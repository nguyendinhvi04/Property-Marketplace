import { NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const listingTypes = await prisma.listingType.findMany();
    return Response.json({ success: true, data: listingTypes });
  } catch (error) {
    return Response.json({ success: false, error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const listingType = await prisma.listingType.create({ data: body });
    return Response.json({ success: true, data: listingType });
  } catch (error) {
    return Response.json({ success: false, error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.id) return Response.json({ success: false, error: 'Missing id' }, { status: 400 });
    const listingType = await prisma.listingType.update({
      where: { id: body.id },
      data: body,
    });
    return Response.json({ success: true, data: listingType });
  } catch (error) {
    return Response.json({ success: false, error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.id) return Response.json({ success: false, error: 'Missing id' }, { status: 400 });
    await prisma.listingType.delete({ where: { id: body.id } });
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}
