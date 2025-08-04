import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seedVietnamData() {
  // Seed Provinces
  await prisma.province.createMany({
    data: [
      { id: 1, name: 'Hà Nội' },
      { id: 79, name: 'TP. Hồ Chí Minh' },
      { id: 80, name: 'Long An' },
    ],
    skipDuplicates: true,
  });

  // Seed Districts
  await prisma.district.createMany({
    data: [
      { id: 5, name: 'Cầu Giấy', provinceId: 1 },
      { id: 6, name: 'Hai Bà Trưng', provinceId: 1 },
      { id: 10, name: 'Thanh Xuân', provinceId: 1 },
      { id: 16, name: 'Đông Anh', provinceId: 1 },
      { id: 18, name: 'Long Biên', provinceId: 1 },
      { id: 760, name: 'Quận 1', provinceId: 79 },
      { id: 764, name: 'Quận 3', provinceId: 79 },
      { id: 769, name: 'Bình Thạnh', provinceId: 79 },
      { id: 770, name: 'Quận 2', provinceId: 79 },
      { id: 771, name: 'Quận 7', provinceId: 79 },
      { id: 773, name: 'Quận 9', provinceId: 79 },
      { id: 774, name: 'Quận 12', provinceId: 79 },
      { id: 783, name: 'Bình Chánh', provinceId: 79 },
      { id: 784, name: 'Nhà Bè', provinceId: 79 },
      { id: 794, name: 'Đức Hòa', provinceId: 80 },
    ],
    skipDuplicates: true,
  });

  // Seed Wards
  await prisma.ward.createMany({
    data: [
      { id: 181, name: 'Cầu Giấy', districtId: 5 },
      { id: 211, name: 'Bà Triệu', districtId: 6 },
      { id: 349, name: 'Thanh Xuân', districtId: 10 },
      { id: 571, name: 'Đông Hội', districtId: 16 },
      { id: 607, name: 'Long Biên', districtId: 18 },
      { id: 26998, name: 'Bến Nghé', districtId: 760 },
      { id: 27058, name: 'Phường 3', districtId: 764 },
      { id: 27169, name: 'Phường 22', districtId: 769 },
      { id: 27190, name: 'Thảo Điền', districtId: 770 },
      { id: 27228, name: 'Tân Phú', districtId: 771 },
      { id: 27268, name: 'Long Thạnh Mỹ', districtId: 773 },
      { id: 27277, name: 'Tân Hưng Thuận', districtId: 774 },
      { id: 27490, name: 'Bình Chánh', districtId: 783 },
      { id: 27511, name: 'Nhơn Đức', districtId: 784 },
      { id: 27700, name: 'Đức Hòa Đông', districtId: 794 },
    ],
    skipDuplicates: true,
  });
}

async function main() {
  // Xóa dữ liệu cũ
  await prisma.review.deleteMany({});
  await prisma.statistic.deleteMany({});
  await prisma.brokerMembership.deleteMany({});
  await prisma.membershipPackage.deleteMany({});
  await prisma.message.deleteMany({});
  await prisma.transaction.deleteMany({});
  await prisma.appointment.deleteMany({});
  await prisma.favorite.deleteMany({});
  await prisma.property.deleteMany({});
  await prisma.category.deleteMany({});
  await prisma.listingType.deleteMany({});
  await prisma.ward.deleteMany({});
  await prisma.district.deleteMany({});
  await prisma.province.deleteMany({});
  await prisma.user.deleteMany({});

  // Seed location data
  await seedVietnamData();

  // Tạo user
  const users = await prisma.user.createMany({
    data: [
      {
        name: 'Nguyễn Văn A',
        email: 'a@gmail.com',
        passwordHash: 'hash1',
        phoneNumber: '0911111111',
        role: 'customer',
        avatarUrl: '/n1.jpg',
      },
      {
        name: 'Trần Thị B',
        email: 'b@gmail.com',
        passwordHash: 'hash2',
        phoneNumber: '0922222222',
        role: 'broker',
        avatarUrl: '/n2.jpg',
      },
      {
        name: 'Lê Văn C',
        email: 'c@gmail.com',
        passwordHash: 'hash3',
        phoneNumber: '0933333333',
        role: 'admin',
        avatarUrl: '/n3.jpg',
      },
      {
        name: 'Phạm Thị D',
        email: 'd@gmail.com',
        passwordHash: 'hash4',
        phoneNumber: '0944444444',
        role: 'customer',
        avatarUrl: '/n4.jpg',
      },
      {
        name: 'Ngô Văn E',
        email: 'e@gmail.com',
        passwordHash: 'hash5',
        phoneNumber: '0955555555',
        role: 'broker',
        avatarUrl: '/n5.jpg',
      },
      {
        name: 'Đặng Thị F',
        email: 'f@gmail.com',
        passwordHash: 'hash6',
        phoneNumber: '0966666666',
        role: 'customer',
        avatarUrl: '/n6.jpg',
      },
      {
        name: 'Nguyễn Văn G',
        email: 'g@gmail.com',
        passwordHash: 'hash7',
        phoneNumber: '0977777777',
        role: 'broker',
        avatarUrl: '/n7.jpg',
      },
      {
        name: 'Trần Thị H',
        email: 'h@gmail.com',
        passwordHash: 'hash8',
        phoneNumber: '0988888888',
        role: 'customer',
        avatarUrl: '/n8.jpg',
      },
      {
        name: 'Nguyễn Văn I',
        email: 'i@gmail.com',
        passwordHash: 'hash9',
        phoneNumber: '0999999999',
        role: 'customer',
        avatarUrl: '/n9.jpg',
      },
      {
        name: 'Nguyễn Văn J',
        email: 'j@gmail.com',
        passwordHash: 'hash10',
        phoneNumber: '0900000000',
        role: 'customer',
        avatarUrl: '/n10.jpg',
      },
      {
        name: 'Nguyễn Văn K',
        email: 'k@gmail.com',
        passwordHash: 'hash11',
        phoneNumber: '0911111111',
        role: 'customer',
        avatarUrl: '/n11.jpg',
      },
    ],
  });

  // Lấy lại user để lấy id
  const allUsers = await prisma.user.findMany();
  const customer1 = allUsers.find((u) => u.role === 'customer');
  const broker1 = allUsers.find((u) => u.role === 'broker');
  const admin1 = allUsers.find((u) => u.role === 'admin');
  const customer2 = allUsers.filter((u) => u.role === 'customer')[1];
  const broker2 = allUsers.filter((u) => u.role === 'broker')[1];
  const broker3 = allUsers.filter((u) => u.role === 'broker')[2];

  // Category
  const categories = await prisma.category.createMany({
    data: [
      { name: 'Căn hộ' },
      { name: 'Nhà phố' },
      { name: 'Đất nền' },
      { name: 'Biệt thự' },
      { name: 'Nhà trọ' },
      { name: 'Văn phòng' },
      { name: 'Shophouse' },
      { name: 'Nhà mặt tiền' },
      { name: 'Kho xưởng' },
      { name: 'Phòng trọ' },
      { name: 'Mặt bằng kinh doanh' },
    ],
  });
  const allCategories = await prisma.category.findMany();

  // ListingType
  const listingTypes = await prisma.listingType.createMany({
    data: [
      { name: 'Bán' },
      { name: 'Cho thuê' },
      { name: 'Dự án' },
    ],
  });
  const allListingTypes = await prisma.listingType.findMany();

  // Property
  const properties = await prisma.property.createMany({
    data: [
      {
        title: 'Căn hộ Vinhomes Central Park',
        description: 'Căn hộ cao cấp, view sông, nội thất đầy đủ.',
        price: 4500000000,
        address: '208 Nguyễn Hữu Cảnh, Bình Thạnh, TP.HCM',
        area: 80,
        images: ['/n1.jpg', '/n2.jpg'],
        categoryId: allCategories[0].id,
        ownerId: broker2.id,
        status: 'thương lượng',
        listingTypeId: allListingTypes[0].id,
        provinceId: 79,
        districtId: 769,
        wardId: 27169,
        bedrooms: 2,
        bathrooms: 2,
        floors: 20,
      },
      {
        title: 'Nhà phố Quận 7',
        description: 'Nhà phố 3 tầng, gần trường học, tiện ích đầy đủ.',
        price: 7200000000,
        address: '45 Lê Văn Lương, Quận 7, TP.HCM',
        area: 120,
        images: ['/n3.jpg'],
        categoryId: allCategories[1].id,
        ownerId: broker2.id,
        status: 'thương lượng',
        listingTypeId: allListingTypes[0].id,
        provinceId: 79,
        districtId: 771,
        wardId: 27228,
        bedrooms: 4,
        bathrooms: 3,
        floors: 3,
      },
      {
        title: 'Căn hộ Masteri Thảo Điền',
        description: 'Căn hộ 2PN, view landmark 81, full nội thất cao cấp.',
        price: 5200000000,
        address: '159 Xa Lộ Hà Nội, Thảo Điền, Quận 2, TP.HCM',
        area: 75,
        images: ['/n4.jpg', '/n5.jpg', '/n6.jpg'],
        categoryId: allCategories[0].id,
        ownerId: broker3.id,
        status: 'có thể bán',
        listingTypeId: allListingTypes[0].id,
        provinceId: 79,
        districtId: 770,
        wardId: 27190,
        bedrooms: 2,
        bathrooms: 2,
        floors: 35,
      },
      {
        title: 'Đất nền Đức Hòa, Long An',
        description: 'Đất nền sổ hồng riêng, thổ cư 100%, gần chợ và trường học.',
        price: 1200000000,
        address: 'Xã Đức Hòa Đông, Huyện Đức Hòa, Long An',
        area: 200,
        images: ['/n7.jpg'],
        categoryId: allCategories[2].id,
        ownerId: broker2.id,
        status: 'có thể bán',
        listingTypeId: allListingTypes[0].id,
        provinceId: 80,
        districtId: 794,
        wardId: 27700,
        bedrooms: 0,
        bathrooms: 0,
        floors: 0,
      },
      {
        title: 'Căn hộ cho thuê Vinhomes Grand Park',
        description: 'Căn hộ 3PN, mới 100%, view công viên, đầy đủ nội thất.',
        price: 15000000,
        address: 'Vinhomes Grand Park, Quận 9, TP.HCM',
        area: 90,
        images: ['/n8.jpg', '/n9.jpg'],
        categoryId: allCategories[0].id,
        ownerId: broker2.id,
        status: 'có thể bán',
        listingTypeId: allListingTypes[1].id,
        provinceId: 79,
        districtId: 773,
        wardId: 27268,
        bedrooms: 3,
        bathrooms: 2,
        floors: 30,
      },
      {
        title: 'Biệt thự Thảo Điền',
        description: 'Biệt thự sang trọng, có hồ bơi, sân vườn rộng rãi.',
        price: 25000000000,
        address: '89 Đường Số 1, Thảo Điền, Quận 2, TP.HCM',
        area: 400,
        images: ['/n10.jpg', '/n11.jpg', '/n12.jpg'],
        categoryId: allCategories[3].id,
        ownerId: broker3.id,
        status: 'thương lượng',
        listingTypeId: allListingTypes[0].id,
        provinceId: 79,
        districtId: 770,
        wardId: 27190,
        bedrooms: 5,
        bathrooms: 4,
        floors: 3,
      },
      {
        title: 'Nhà trọ Quận Bình Thạnh',
        description: 'Nhà trọ 10 phòng, thu nhập ổn định, gần khu công nghiệp.',
        price: 3500000000,
        address: '234 Điện Biên Phủ, Bình Thạnh, TP.HCM',
        area: 180,
        images: ['/n13.jpg'],
        categoryId: allCategories[4].id,
        ownerId: broker2.id,
        status: 'có thể bán',
        listingTypeId: allListingTypes[0].id,
        provinceId: 79,
        districtId: 769,
        wardId: 27169,
        bedrooms: 10,
        bathrooms: 10,
        floors: 2,
      },
      {
        title: 'Văn phòng cho thuê Quận 1',
        description: 'Văn phòng hạng A, view đẹp, gần trung tâm thành phố.',
        price: 50000000,
        address: '456 Lê Lợi, Quận 1, TP.HCM',
        area: 150,
        images: ['/n14.jpg', '/n15.jpg'],
        categoryId: allCategories[5].id,
        ownerId: broker2.id,
        status: 'có thể bán',
        listingTypeId: allListingTypes[1].id,
        provinceId: 79,
        districtId: 760,
        wardId: 26998,
        bedrooms: 0,
        bathrooms: 2,
        floors: 25,
      },
      {
        title: 'Shophouse Sala Đại Quang Minh',
        description: 'Shophouse 4 tầng, vị trí đắc địa, phù hợp kinh doanh.',
        price: 12000000000,
        address: 'Sala Đại Quang Minh, Quận 2, TP.HCM',
        area: 160,
        images: ['/n16.jpg'],
        categoryId: allCategories[6].id,
        ownerId: broker3.id,
        status: 'thương lượng',
        listingTypeId: allListingTypes[0].id,
        provinceId: 79,
        districtId: 770,
        wardId: 27190,
        bedrooms: 0,
        bathrooms: 3,
        floors: 4,
      },
      {
        title: 'Căn hộ Sunview Town',
        description: 'Căn hộ 1PN, giá tốt, gần Metro, phù hợp đầu tư.',
        price: 1800000000,
        address: 'Sunview Town, Thủ Đức, TP.HCM',
        area: 45,
        images: ['/n17.jpg'],
        categoryId: allCategories[0].id,
        ownerId: broker2.id,
        status: 'có thể bán',
        listingTypeId: allListingTypes[0].id,
        provinceId: 79,
        districtId: 783,
        wardId: 27490,
        bedrooms: 1,
        bathrooms: 1,
        floors: 15,
      },
      {
        title: 'Nhà mặt tiền Quận 3',
        description: 'Nhà mặt tiền kinh doanh, 4 tầng, vị trí đắc địa.',
        price: 18000000000,
        address: '123 Cách Mạng Tháng 8, Quận 3, TP.HCM',
        area: 100,
        images: ['/n18.jpg', '/n19.jpg'],
        categoryId: allCategories[7].id,
        ownerId: broker2.id,
        status: 'thương lượng',
        listingTypeId: allListingTypes[0].id,
        provinceId: 79,
        districtId: 764,
        wardId: 27058,
        bedrooms: 6,
        bathrooms: 4,
        floors: 4,
      },
      {
        title: 'Đất thổ cư Nhà Bè',
        description: 'Đất thổ cư, sổ hồng riêng, mặt tiền đường lớn.',
        price: 2500000000,
        address: 'Xã Nhơn Đức, Huyện Nhà Bè, TP.HCM',
        area: 300,
        images: ['/n20.jpg', "/n11.jpg"],
        categoryId: allCategories[2].id,
        ownerId: broker3.id,
        status: 'có thể bán',
        listingTypeId: allListingTypes[0].id,
        provinceId: 79,
        districtId: 784,
        wardId: 27511,
        bedrooms: 0,
        bathrooms: 0,
        floors: 0,
      },
      {
        title: 'Căn hộ Sunrise Riverside',
        description: 'Căn hộ 2PN, view sông, nội thất cơ bản, giá tốt.',
        price: 2200000000,
        address: 'Sunrise Riverside, Huyện Nhà Bè, TP.HCM',
        area: 70,
        images: ['/n21.jpg', '/n20.jpg'],
        categoryId: allCategories[0].id,
        ownerId: broker2.id,
        status: 'có thể bán',
        listingTypeId: allListingTypes[0].id,
        provinceId: 79,
        districtId: 784,
        wardId: 27511,
        bedrooms: 2,
        bathrooms: 2,
        floors: 20,
      },
      {
        title: 'Kho xưởng Bình Chánh',
        description: 'Kho xưởng 1000m2, mặt tiền đường lớn, thuận tiện vận chuyển.',
        price: 8000000000,
        address: 'Xã Bình Chánh, Huyện Bình Chánh, TP.HCM',
        area: 1000,
        images: ['/n21.jpg', '/n20.jpg'],
        categoryId: allCategories[8].id,
        ownerId: broker2.id,
        status: 'thương lượng',
        listingTypeId: allListingTypes[0].id,
        provinceId: 79,
        districtId: 783,
        wardId: 27490,
        bedrooms: 0,
        bathrooms: 2,
        floors: 1,
      },
      {
        title: 'Phòng trọ Quận 12',
        description: 'Phòng trọ mới, đầy đủ tiện nghi, gần trường đại học.',
        price: 2500000,
        address: '567 Quốc Lộ 1A, Quận 12, TP.HCM',
        area: 20,
        images:['/n21.jpg', '/n20.jpg'],
        categoryId: allCategories[9].id,
        ownerId: broker2.id,
        status: 'có thể bán',
        listingTypeId: allListingTypes[1].id,
        provinceId: 79,
        districtId: 774,
        wardId: 27277,
        bedrooms: 1,
        bathrooms: 1,
        floors: 1,
      },
      {
        title: 'Biệt thự Vinhomes Riverside',
        description: 'Biệt thự đơn lập, thiết kế hiện đại, sân vườn rộng.',
        price: 35000000000,
        address: 'Vinhomes Riverside, Long Biên, Hà Nội',
        area: 500,
        images: ['/n25.jpg', '/n26.jpg', '/n27.jpg'],
        categoryId: allCategories[3].id,
        ownerId: broker2.id,
        status: 'thương lượng',
        listingTypeId: allListingTypes[0].id,
        provinceId: 1,
        districtId: 18,
        wardId: 607,
        bedrooms: 6,
        bathrooms: 5,
        floors: 3,
      },
      {
        title: 'Căn hộ chung cư Cầu Giấy',
        description: 'Căn hộ 3PN, đầy đủ nội thất, view công viên.',
        price: 3800000000,
        address: 'Chung cư CT1, Cầu Giấy, Hà Nội',
        area: 95,
        images: ['/n20.jpg'],
        categoryId: allCategories[0].id,
        ownerId: broker2.id,
        status: 'có thể bán',
        listingTypeId: allListingTypes[0].id,
        provinceId: 1,
        districtId: 5,
        wardId: 181,
        bedrooms: 3,
        bathrooms: 2,
        floors: 15,
      },
      {
        title: 'Nhà liền kề Thanh Xuân',
        description: 'Nhà liền kề 4 tầng, thiết kế hiện đại, gần trung tâm.',
        price: 9500000000,
        address: '89 Lê Văn Lương, Thanh Xuân, Hà Nội',
        area: 80,
        images: ['/n21.jpg', '/n13.jpg'],
        categoryId: allCategories[1].id,
        ownerId: broker2.id,
        status: 'thương lượng',
        listingTypeId: allListingTypes[0].id,
        provinceId: 1,
        districtId: 10,
        wardId: 349,
        bedrooms: 4,
        bathrooms: 3,
        floors: 4,
      },
      {
        title: 'Đất nền Đông Anh',
        description: 'Đất nền dự án, hạ tầng hoàn thiện, sổ đỏ trao tay.',
        price: 1800000000,
        address: 'Xã Đông Hội, Huyện Đông Anh, Hà Nội',
        area: 150,
        images: ['/n13.jpg'],
        categoryId: allCategories[2].id,
        ownerId: broker2.id,
        status: 'có thể bán',
        listingTypeId: allListingTypes[0].id,
        provinceId: 1,
        districtId: 16,
        wardId: 571,
        bedrooms: 0,
        bathrooms: 0,
        floors: 0,
      },
      {
        title: 'Mặt bằng kinh doanh Hai Bà Trưng',
        description: 'Mặt bằng 2 tầng, vị trí đắc địa, phù hợp mở cửa hàng.',
        price: 80000000,
        address: '234 Bà Triệu, Hai Bà Trưng, Hà Nội',
        area: 120,
        images: ['/n17.jpg', '/n18.jpg'],
        categoryId: allCategories[10].id,
        ownerId: broker2.id,
        status: 'có thể bán',
        listingTypeId: allListingTypes[1].id,
        provinceId: 1,
        districtId: 6,
        wardId: 211,
        bedrooms: 0,
        bathrooms: 2,
        floors: 2,
      },
    ],
  });

  const allProperties = await prisma.property.findMany();

  // Favorite
  await prisma.favorite.createMany({
    data: [
      { customerId: customer2.id, propertyId: allProperties[0].id },
      { customerId: customer2.id, propertyId: allProperties[1].id },
      { customerId: customer2.id, propertyId: allProperties[2].id },
    ],
  });

  // Appointment
  await prisma.appointment.createMany({
    data: [
      {
        customerId: customer2.id,
        brokerId: broker2.id,
        propertyId: allProperties[0].id,
        appointmentTime: new Date(Date.now() + 86400000),
        note: 'Xem nhà buổi sáng',
        status: 'scheduled',
      },
      {
        customerId: customer2.id,
        brokerId: broker2.id,
        propertyId: allProperties[1].id,
        appointmentTime: new Date(Date.now() + 2 * 86400000),
        note: 'Xem nhà buổi chiều',
        status: 'scheduled',
      },
      {
        customerId: customer2.id,
        brokerId: broker2.id,
        propertyId: allProperties[2].id,
        appointmentTime: new Date(Date.now() + 3 * 86400000),
        note: 'Xem nhà chiều thứ 5',
        status: 'scheduled',
      },
    ],
  });

  // Transaction
  await prisma.transaction.createMany({
    data: [
      {
        propertyId: allProperties[0].id,
        buyerId: customer2.id,
        brokerId: broker2.id,
        price: 4500000000,
        commission: 90000000,
        status: 'completed',
      },
      {
        propertyId: allProperties[1].id,
        buyerId: customer2.id,
        brokerId: broker2.id,
        price: 7200000000,
        commission: 144000000,
        status: 'in_process',
      },
    ],
  });

  // Message
  await prisma.message.createMany({
    data: [
      {
        senderId: customer2.id,
        receiverId: broker2.id,
        content: 'Chào anh/chị, em muốn xem nhà.',
        sentAt: new Date(),
      },
      {
        senderId: broker2.id,
        receiverId: customer2.id,
        content: 'Ok em, mai anh/chị dẫn đi xem.',
        sentAt: new Date(),
      },
    ],
  });

  // MembershipPackage & BrokerMembership
  const pkg = await prisma.membershipPackage.create({
    data: {
      name: 'Gói VIP',
      price: 2000000,
      durationDays: 30,
      description: 'Đăng tin không giới hạn, ưu tiên hiển thị',
    },
  });
  await prisma.brokerMembership.create({
    data: {
      brokerId: broker2.id,
      packageId: pkg.id,
      startDate: new Date(),
      endDate: new Date(Date.now() + 30 * 86400000),
    },
  });

  // Statistic
  await prisma.statistic.createMany({
    data: [
      {
        userId: broker2.id,
        totalProperties: 3,
        totalTransactions: 1,
        totalIncome: 90000000,
      },
      {
        userId: broker2.id,
        totalProperties: 2,
        totalTransactions: 1,
        totalIncome: 144000000,
      },
    ],
  });

  // Review
  await prisma.review.createMany({
    data: [
      {
        reviewerId: customer2.id,
        targetUserId: broker2.id,
        propertyId: allProperties[0].id,
        rating: 5,
        comment: 'Môi giới nhiệt tình, hỗ trợ tốt!',
      },
      {
        reviewerId: customer2.id,
        targetUserId: broker2.id,
        propertyId: allProperties[1].id,
        rating: 4,
        comment: 'Tư vấn nhanh, chuyên nghiệp.',
      },
    ],
  });

  console.log('Đã đẩy thành công nha anh Vĩ đẹp zai!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });