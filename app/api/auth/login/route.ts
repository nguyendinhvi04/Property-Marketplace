import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    
    // Tìm user theo email
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ 
        success: false, 
        message: "Email không tồn tại" 
      }, { status: 401 });
    }

    // Kiểm tra mật khẩu
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return NextResponse.json({ 
        success: false, 
        message: "Sai mật khẩu" 
      }, { status: 401 });
    }

    // Tạo JWT token với userId (thay vì id)
    const token = jwt.sign(
      { 
        userId: user.id,  
        email: user.email, 
        role: user.role 
      },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Trả về response
    return NextResponse.json({ 
      success: true, 
      token, 
      user: { 
        id: user.id, 
        email: user.email, 
        name: user.name, 
        role: user.role 
      } 
    });
    
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ 
      success: false, 
      message: (error as Error).message 
    }, { status: 500 });
  }
}