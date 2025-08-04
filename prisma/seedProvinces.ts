import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const res = await fetch('https://provinces.open-api.vn/api/p/')
  const provinces = await res.json()

  for (const province of provinces) {
    await prisma.province.upsert({
      where: { id: Number(province.code) },
      update: {},
      create: {
        id: Number(province.code),
        name: province.name,
      },
    })
  }

  console.log('✅ Seed provinces thành công')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect()
  })
