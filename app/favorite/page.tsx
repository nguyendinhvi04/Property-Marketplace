'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Định nghĩa kiểu dữ liệu cho tin đăng
interface Listing {
  id: number;
  title: string;
  price: string;
  area: string;
  location: string;
  image: string;
  description: string;
  type: string;
  status: string;
  bedrooms: number;
  bathrooms: number;
}

// Dữ liệu mẫu tích hợp trực tiếp
const listingsData: Listing[] = [
  {
    id: 1,
    title: 'Căn hộ cao cấp 2 phòng ngủ Quận 1',
    price: '3.2 tỷ',
    area: '65m²',
    location: 'Quận 1, TP.HCM',
    image: '/n1.jpg',
    description: 'Căn hộ hiện đại, view sông, đầy đủ nội thất, gần trung tâm thương mại.',
    type: 'Căn hộ',
    status: 'Sổ hồng riêng',
    bedrooms: 2,
    bathrooms: 1,
  },
  {
    id: 2,
    title: 'Nhà phố 3 tầng Quận Bình Thạnh',
    price: '6.5 tỷ',
    area: '80m²',
    location: 'Quận Bình Thạnh, TP.HCM',
    image: '/n2.jpg',
    description: 'Nhà phố mới xây, thiết kế hiện đại, gần trường học và chợ.',
    type: 'Nhà phố',
    status: 'Sổ đỏ',
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: 3,
    title: 'Biệt thự ven sông Thủ Đức',
    price: '12 tỷ',
    area: '200m²',
    location: 'Thủ Đức, TP.HCM',
    image: '/n3.jpg',
    description: 'Biệt thự sang trọng, không gian xanh, hồ bơi riêng, an ninh 24/7.',
    type: 'Biệt thự',
    status: 'Sổ hồng riêng',
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    id: 4,
    title: 'Biệt thự ven sông Thủ Đức',
    price: '12 tỷ',
    area: '200m²',
    location: 'Thủ Đức, TP.HCM',
    image: '/n4.jpg',
    description: 'Biệt thự sang trọng, không gian xanh, hồ bơi riêng, an ninh 24/7.',
    type: 'Biệt thự',
    status: 'Sổ hồng riêng',
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    id: 5,
    title: 'Biệt thự ven sông Thủ Đức',
    price: '12 tỷ',
    area: '200m²',
    location: 'Thủ Đức, TP.HCM',
    image: '/n5.jpg',
    description: 'Biệt thự sang trọng, không gian xanh, hồ bơi riêng, an ninh 24/7.',
    type: 'Biệt thự',
    status: 'Sổ hồng riêng',
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    id: 6,
    title: 'Biệt thự ven sông Thủ Đức',
    price: '12 tỷ',
    area: '200m²',
    location: 'Thủ Đức, TP.HCM',
    image: '/n6.jpg',
    description: 'Biệt thự sang trọng, không gian xanh, hồ bơi riêng, an ninh 24/7.',
    type: 'Biệt thự',
    status: 'Sổ hồng riêng',
    bedrooms: 4,
    bathrooms: 3,
  },
];

// Component FavoriteButton
const FavoriteButton = ({ listingId }: { listingId: number }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(listingId));
  }, [listingId]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (isFavorite) {
      const newFavorites = favorites.filter((id: number) => id !== listingId);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    } else {
      favorites.push(listingId);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`px-4 py-2 rounded font-medium ${
        isFavorite ? 'bg-red-500 text-white' : 'bg-red-500 text-white'
      }`}
    >
      {isFavorite ? 'Bỏ yêu thích' : 'Liên Hệ Ngay'}
    </button>
  );
};

// Component ListingCard
const ListingCard = ({ listing }: { listing: Listing }) => {
  return (
    <div className="border-[#ef4444]/50 shadow-lg rounded-lg p-4 ">
      <Image
        src={listing.image}
        alt={listing.title}
        width={400}
        height={192}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-2">{listing.title}</h2>
      <p className="text-gray-600">{listing.price}</p>
      <p>{listing.area} - {listing.location}</p>
      <p className="text-gray-500">{listing.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <FavoriteButton listingId={listing.id} />
        <Link href={`/listing/${listing.id}`} className="text-blue-500 hover:underline">
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

// Component chính
export default function Home() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [favorites, setFavorites] = useState<Listing[]>([]);

  // Load danh sách tin đăng
  useEffect(() => {
    setListings(listingsData);
  }, []);

  // Load danh sách yêu thích
  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(listingsData.filter(listing => favoriteIds.includes(listing.id)));
  }, [listings]);

  return (
    <div className="min-h-screen font-sans text-white bg-gradient-to-br from-[#ef4444] via-[#18181b] to-[#18181b] pt-8 pb-4">
         <div className="container mx-auto p-4">
      {/* Danh sách tin đăng */}
      <h1 className="text-3xl font-bold mb-4">Danh sách tin đăng yêu thích</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {listings.map(listing => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>

      {/* Danh sách yêu thích
      <h1 className="text-3xl font-bold mb-4">Danh sách yêu thích</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-500">Chưa có tin đăng nào trong danh sách yêu thích.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {favorites.map(listing => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      )} */}
    </div>
    </div>
   
  );
}