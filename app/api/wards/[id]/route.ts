import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    const ward = await prisma.ward.findUnique({
      where: { id: parseInt(id) },
      include: { district: true, properties: true },
    });
    if (!ward) {
      return NextResponse.json({ error: 'Ward not found' }, { status: 404 });
    }
    return NextResponse.json(ward);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching ward' }, { status: 500 });
  }
}