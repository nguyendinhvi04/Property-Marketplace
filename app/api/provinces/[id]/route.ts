
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    const province = await prisma.province.findUnique({
      where: { id: parseInt(id) },
      include: { districts: true, properties: true },
    });
    if (!province) {
      return NextResponse.json({ error: 'Province not found' }, { status: 404 });
    }
    return NextResponse.json(province);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching province' }, { status: 500 });
  }
}
