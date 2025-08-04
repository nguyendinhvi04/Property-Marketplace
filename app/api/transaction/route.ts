import { NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const transactions = await prisma.transaction.findMany();
    return Response.json({ success: true, data: transactions });
  } catch (error) {
    return Response.json({ success: false, error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const transaction = await prisma.transaction.create({ data: body });
    return Response.json({ success: true, data: transaction });
  } catch (error) {
    return Response.json({ success: false, error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.id) return Response.json({ success: false, error: 'Missing id' }, { status: 400 });
    const transaction = await prisma.transaction.update({
      where: { id: body.id },
      data: body,
    });
    return Response.json({ success: true, data: transaction });
  } catch (error) {
    return Response.json({ success: false, error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.id) return Response.json({ success: false, error: 'Missing id' }, { status: 400 });
    await prisma.transaction.delete({ where: { id: body.id } });
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}
