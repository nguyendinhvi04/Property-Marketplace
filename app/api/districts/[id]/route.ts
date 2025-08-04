import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    const district = await prisma.district.findUnique({
      where: { id: parseInt(id) },
      include: { province: true, wards: true, properties: true },
    });
    if (!district) {
      return NextResponse.json({ error: 'District not found' }, { status: 404 });
    }
    return NextResponse.json(district);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching district' }, { status: 500 });
  }
}