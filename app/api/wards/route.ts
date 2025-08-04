import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const districtId = searchParams.get('districtId')

  if (!districtId) {
    return NextResponse.json({ success: false, error: 'Thiếu districtId' }, { status: 400 })
  }

  try {
    const wards = await fetch(`https://provinces.open-api.vn/api/d/${districtId}?depth=2`)
      .then(res => res.json())
      .then(data => data.wards || [])
    return NextResponse.json({ success: true, data: wards })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Không thể lấy danh sách phường/xã' }, { status: 500 })
  }
}