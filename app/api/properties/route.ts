import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()


// GET: Lấy chi tiết property theo id
export async function GET_DETAIL(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ success: false, message: 'Thiếu id' }, { status: 400 });
    }
    const property = await prisma.property.findUnique({
      where: { id: Number(id) },
      include: {
        category: true,
        owner: true,
        listingType: true,
      },
    });
    if (!property) {
      return NextResponse.json({ success: false, message: 'Không tìm thấy property' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: property });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}


// GET: Lấy danh sách property

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get('name');

    const properties = await prisma.property.findMany({
      where: name
        ? {
            title: {
              contains: name,
              mode: 'insensitive', // không phân biệt hoa thường
            },
          }
        : undefined,
      include: {
        category: true,
        owner: true,
        listingType: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ success: true, data: properties });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}


// POST: Tạo property mới'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('Request body:', body);

    // Kiểm tra token
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json({ success: false, error: 'Thiếu Authorization header' }, { status: 401 });
    }
    const token = authHeader.replace('Bearer ', '');
    if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET is not defined');
      return NextResponse.json({ success: false, error: 'Lỗi server' }, { status: 500 });
    }
    let ownerId: number;
    try {
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET);
      ownerId = decoded.userId;
    } catch (err) {
      console.error('JWT Error:', err);
      return NextResponse.json({ success: false, error: 'Token không hợp lệ hoặc đã hết hạn' }, { status: 401 });
    }

    // Validation
    if (!body.title || !body.address || !body.categoryId || !body.listingTypeId || !body.provinceId) {
      return NextResponse.json({ success: false, error: 'Thiếu thông tin bắt buộc' }, { status: 400 });
    }
    if (body.images && !Array.isArray(body.images)) {
      return NextResponse.json({ success: false, error: 'Danh sách ảnh không hợp lệ' }, { status: 400 });
    }
    if (body.price && isNaN(Number(body.price))) {
      return NextResponse.json({ success: false, error: 'Giá không hợp lệ' }, { status: 400 });
    }
    if (body.area && isNaN(Number(body.area))) {
      return NextResponse.json({ success: false, error: 'Diện tích không hợp lệ' }, { status: 400 });
    }
    if (body.bedrooms && Number(body.bedrooms) < 0) {
      return NextResponse.json({ success: false, error: 'Số phòng ngủ không hợp lệ' }, { status: 400 });
    }

    // Kiểm tra tồn tại
    const category = await prisma.category.findUnique({ where: { id: Number(body.categoryId) } });
    if (!category) {
      return NextResponse.json({ success: false, error: 'Danh mục không tồn tại' }, { status: 400 });
    }
    const listingType = await prisma.listingType.findUnique({ where: { id: Number(body.listingTypeId) } });
    if (!listingType) {
      return NextResponse.json({ success: false, error: 'Loại giao dịch không tồn tại' }, { status: 400 });
    }
    const owner = await prisma.user.findUnique({ where: { id: ownerId } });
    if (!owner) {
      return NextResponse.json({ success: false, error: 'Người dùng không tồn tại' }, { status: 400 });
    }
    if (body.provinceId) {
      const province = await prisma.province.findUnique({ where: { id: Number(body.provinceId) } });
      if (!province) {
        return NextResponse.json({ success: false, error: 'Tỉnh/Thành không tồn tại' }, { status: 400 });
      }
    }
    if (body.districtId) {
      const district = await prisma.district.findUnique({ where: { id: Number(body.districtId) } });
      if (!district) {
        return NextResponse.json({ success: false, error: 'Quận/Huyện không tồn tại' }, { status: 400 });
      }
    }
    if (body.wardId) {
      const ward = await prisma.ward.findUnique({ where: { id: Number(body.wardId) } });
      if (!ward) {
        return NextResponse.json({ success: false, error: 'Phường/Xã không tồn tại' }, { status: 400 });
      }
    }

    // Tạo bản ghi
    const property = await prisma.property.create({
      data: {
        title: body.title,
        description: body.description || '',
        price: body.price ? Number(body.price) : 0,
        address: body.address,
        area: body.area ? Number(body.area) : null,
        images: body.images || [],
        status: body.status || 'pending',
        categoryId: Number(body.categoryId),
        ownerId,
        listingTypeId: Number(body.listingTypeId),
        provinceId: body.provinceId ? Number(body.provinceId) : null,
        districtId: body.districtId ? Number(body.districtId) : null,
        wardId: body.wardId ? Number(body.wardId) : null,
        bedrooms: body.bedrooms ? Number(body.bedrooms) : 0,
        bathrooms: body.bathrooms ? Number(body.bathrooms) : 0,
        floors: body.floors ? Number(body.floors) : 0,
      },
    });

    return NextResponse.json({ success: true, data: property });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ success: false, error: 'Lỗi server' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
