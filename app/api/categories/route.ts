import { NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const categories = await prisma.category.findMany();
    return Response.json({ success: true, data: categories });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return Response.json({ success: false, error: errorMessage }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const category = await prisma.category.create({ data: body });
    return Response.json({ success: true, data: category });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return Response.json({ success: false, error: errorMessage }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.id) return Response.json({ success: false, error: 'Missing id' }, { status: 400 });
    const category = await prisma.category.update({
      where: { id: body.id },
      data: body,
    });
    return Response.json({ success: true, data: category });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return Response.json({ success: false, error: errorMessage }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.id) return Response.json({ success: false, error: 'Missing id' }, { status: 400 });
    await prisma.category.delete({ where: { id: body.id } });
    return Response.json({ success: true });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return Response.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
