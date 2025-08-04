"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FaHeart, FaShareAlt } from 'react-icons/fa';

interface Property {
  title: string;
  images: string[];
  price: string;
  location: string;
  area: string;
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
  floor: string;
  description: string;
  mapLink: string;
  owner: any;
}

const PropertyDetailPage: React.FC = () => {
  const params = useParams();
  const [property, setProperty] = React.useState<Property | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
      const res = await fetch(`${baseUrl}/api/properties/${params.id}`, { cache: 'no-store' });
      if (!res.ok) {
        setProperty(null);
        setLoading(false);
        return;
      }
      const json = await res.json();
      if (!json.success || !json.data) {
        setProperty(null);
        setLoading(false);
        return;
      }
      const item = json.data;
      setProperty({
        title: item.title,
        images: item.images || ['/n1.jpg'],
        price: Number(item.price).toLocaleString() + ' đ',
        location: item.address,
        area: item.area?.toString() || '',
        propertyType: item.category?.name || '',
        bedrooms: item.bedrooms ?? '0',
        bathrooms: item.bathrooms ?? '0',
        floor: item.floor ?? '0',
        description: item.description || 'Không có mô tả',
        mapLink: item.mapLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address)}`,
        owner: item.owner || { name: "Người đăng tin ", phoneNumber: "---", email: "---", avatarUrl: "---" },
      });
      setLoading(false);
    };
    fetchData();
  }, [params.id]);

  if (loading) {
    return <div className="max-w-6xl mx-auto p-6 bg-white rounded shadow mt-8 text-center">Đang tải dữ liệu...</div>;
  }
  if (!property) {
    return <div className="max-w-6xl mx-auto p-6 bg-white rounded shadow mt-8 text-center text-red-600">Không tìm thấy bất động sản!</div>;
  }

  const owner = property.owner || { name: "Người đăng", phoneNumber: "---", email: "---" };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded shadow mt-8">
      <div className="text-sm text-gray-600 mb-4">
        <Link href="/">Trang chủ</Link> / <Link href="/properties">Bất động sản</Link> / {property.title}
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main content */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">{property.title}</h1>
            <div className="flex space-x-4">
              <button className="text-red-500 text-xl hover:text-red-600"><FaHeart />Yêu Thích</button>
              <button className="text-blue-500 text-xl hover:text-blue-600" onClick={() => navigator.share ? navigator.share({ title: property.title, url: window.location.href }) : alert("Thiết bị không hỗ trợ chia sẻ")}> 
                <FaShareAlt /> Chia sẻ
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {property.images.map((img: string, index: number) => (
              <Image key={index} src={img} alt={`Ảnh ${index}`} width={600} height={400} className="object-cover rounded" />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-lg mb-2">Giá: <span className="font-semibold text-green-600">{property.price}</span></p>
              <p className="mb-2">Khu vực: {property.location}</p>
              <p className="mb-2">Diện tích: {property.area} m²</p>
              <p className="mb-2">Loại: {property.propertyType}</p>
            </div>
            <div>
              <p className="mb-2">Phòng ngủ: {property.bedrooms}</p>
              <p className="mb-2">Phòng tắm: {property.bathrooms}</p>
              <p className="mb-2">Số tầng: {property.floor}</p>
            </div>
          </div>
          <p className="mb-4">Mô tả: {property.description}</p>
          <div className="mb-6">
            <a href={property.mapLink} target="_blank" className="text-blue-600 hover:underline">Xem trên bản đồ</a>
          </div>
          <div className="border-t pt-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">Liên hệ với chủ tin</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Họ và tên" className="w-full border p-2 rounded" />
              <input type="text" placeholder="Số điện thoại" className="w-full border p-2 rounded" />
              <textarea placeholder="Tin nhắn" rows={3} className="w-full border p-2 rounded"></textarea>
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Gửi liên hệ</button>
            </form>
          </div>
        </div>
        {/* Sidebar thông tin người đăng */}
        <aside className="w-full lg:w-80 bg-gray-50 rounded-xl shadow p-6 h-fit">
          <h3 className="text-lg font-bold mb-4 text-[#ef4444]">Thông tin người đăng</h3>
          {owner.avatarUrl && (
            <div className="flex justify-center mb-4">
              <Image src={owner.avatarUrl} alt="Avatar" width={80} height={80} className="rounded-full object-cover" />
            </div>
          )}
          <div className="mb-2"><span className="font-semibold">Tên:</span> {owner.name}</div>
          <div className="mb-2"><span className="font-semibold">SĐT:</span> {owner.phoneNumber}</div>
          <div className="mb-2"><span className="font-semibold">Email:</span> {owner.email}</div>
          {owner.address && <div className="mb-2"><span className="font-semibold">Địa chỉ:</span> {owner.address}</div>}
          {owner.description && <div className="mb-2"><span className="font-semibold">Mô tả:</span> {owner.description}</div>}
          {owner.zalo && <div className="mb-2"><span className="font-semibold">Zalo:</span> {owner.zalo}</div>}
          {owner.facebook && <div className="mb-2"><span className="font-semibold">Facebook:</span> <a href={owner.facebook} target="_blank" className="text-blue-600 hover:underline">{owner.facebook}</a></div>}
          {owner.website && <div className="mb-2"><span className="font-semibold">Website:</span> <a href={owner.website} target="_blank" className="text-blue-600 hover:underline">{owner.website}</a></div>}
        </aside>
      </div>
    </div>
  );
}
export default PropertyDetailPage;
