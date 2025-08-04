// pages/api/user/[id].ts
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req

  if (method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const userId = parseInt(id as string, 10)

  if (isNaN(userId)) {
    return res.status(400).json({ message: 'Invalid user ID' })
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        phoneNumber: true,
        role: true,
        avatarUrl: true,
        createdAt: true,
      },
    })

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    return res.status(200).json(user)
  } catch (error) {
    console.error('Error fetching user:', error)
    return res.status(500).json({ message: 'Server error' })
  }
}
