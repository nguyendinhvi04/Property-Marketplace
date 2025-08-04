import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const districts = await fetch('https://provinces.open-api.vn/api/d/').then(res => res.json());

  for (const district of districts) {
    const wards = await fetch(`https://provinces.open-api.vn/api/d/${district.code}?depth=2`)
      .then(res => res.json())
      .then(data => data.wards);

    for (const ward of wards) {
      await prisma.ward.upsert({
        where: { id: ward.code },
        update: {},
        create: {
          id: ward.code,
          name: ward.name,
          districtId: district.code,
        },
      });
    }
  }

  console.log('✅ Seeded wards xong!');
}

main().finally(() => prisma.$disconnect());
