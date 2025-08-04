// app/api/property/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name');

  if (!name) {
    return NextResponse.json({ error: 'Thiếu tên cần tìm' }, { status: 400 });
  }

  try {
    const properties = await prisma.property.findMany({
      where: {
        title: {
          contains: name,
          mode: 'insensitive',
        },
      },
    });

    return NextResponse.json(properties);
  } catch (error) {
    console.error('Lỗi khi tìm property:', error);
    return NextResponse.json({ error: 'Lỗi server' }, { status: 500 });
  }
}
