import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { name, email, phoneNumber, password } = await req.json();

    // Validation đầu vào
    if (!name || !email || !phoneNumber || !password) {
      return NextResponse.json({ 
        success: false, 
        message: "Vui lòng điền đầy đủ thông tin" 
      }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ 
        success: false, 
        message: "Email không hợp lệ" 
      }, { status: 400 });
    }

    // Validate password strength
    if (password.length < 6) {
      return NextResponse.json({ 
        success: false, 
        message: "Mật khẩu phải có ít nhất 6 ký tự" 
      }, { status: 400 });
    }

    // Validate phone number format (Vietnam)
    const phoneRegex = /^(0|\+84)[3-9]\d{8}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return NextResponse.json({ 
        success: false, 
        message: "Số điện thoại không hợp lệ" 
      }, { status: 400 });
    }

    // Kiểm tra email và phone number đã tồn tại chưa
    const existing = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { phoneNumber }
        ]
      }
    });

    if (existing) {
      const field = existing.email === email ? "Email" : "Số điện thoại";
      return NextResponse.json({ 
        success: false, 
        message: `${field} đã tồn tại` 
      }, { status: 400 });
    }

    // Băm mật khẩu
    const passwordHash = await bcrypt.hash(password, 12); // Tăng salt rounds

    // Tạo user mới
    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: email.toLowerCase().trim(),
        phoneNumber: phoneNumber.trim(),
        passwordHash,
        role: "customer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    // Trả về thông tin user an toàn
    return NextResponse.json({ 
      success: true, 
      message: "Đăng ký thành công",
      user: { 
        id: user.id, 
        email: user.email, 
        name: user.name,
        phoneNumber: user.phoneNumber,
        role: user.role
      } 
    }, { status: 201 });

  } catch (error) {
    console.error("Registration error:", error);
    
    // Xử lý lỗi database cụ thể
    if (error instanceof Error) {
      // Prisma unique constraint error
      if (error.message.includes('Unique constraint')) {
        return NextResponse.json({ 
          success: false, 
          message: "Email hoặc số điện thoại đã tồn tại" 
        }, { status: 400 });
      }
    }

    return NextResponse.json({ 
      success: false, 
      message: "Đã xảy ra lỗi trong quá trình đăng ký" 
    }, { status: 500 });

  } finally {
    await prisma.$disconnect();
  }
}