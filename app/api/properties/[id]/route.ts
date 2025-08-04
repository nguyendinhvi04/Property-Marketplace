import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    if (!id) {
      return NextResponse.json({ success: false, message: 'Thiếu id' }, { status: 400 });
    }
    const property = await prisma.property.findUnique({
      where: { id },
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
