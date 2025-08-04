import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const provinces = await fetch('https://provinces.open-api.vn/api/p/').then(res => res.json());

  for (const province of provinces) {
    const districts = await fetch(`https://provinces.open-api.vn/api/p/${province.code}?depth=2`)
      .then(res => res.json())
      .then(data => data.districts);

    for (const district of districts) {
      await prisma.district.upsert({
        where: { id: district.code },
        update: {},
        create: {
          id: district.code,
          name: district.name,
          provinceId: province.code,
        },
      });
    }
  }

  console.log('✅ Seeded districts xong!');
}

main().finally(() => prisma.$disconnect());
