// Example: /api/provinces
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const provinces = await fetch('https://provinces.open-api.vn/api/p/').then(res => res.json())
    return NextResponse.json({ success: true, data: provinces })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Không thể lấy danh sách tỉnh/thành' }, { status: 500 })
  }
}