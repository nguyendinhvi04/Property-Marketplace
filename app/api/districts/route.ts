import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const provinceId = searchParams.get('provinceId')

  if (!provinceId) {
    return NextResponse.json({ success: false, error: 'Thiếu provinceId' }, { status: 400 })
  }

  try {
    const districts = await fetch(`https://provinces.open-api.vn/api/p/${provinceId}?depth=2`)
      .then(res => res.json())
      .then(data => data.districts || [])
    return NextResponse.json({ success: true, data: districts })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Không thể lấy danh sách huyện' }, { status: 500 })
  }
}