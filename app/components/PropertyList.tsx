"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt, FaLayerGroup, FaSortAmountDown, FaHome, FaHeart } from "react-icons/fa";

export interface Property {
  id: number;
  image: string;
  type: string;
  label?: string;
  title: string;
  location: string;
  area: string;
  propertyType: string;
  price: string;
}


interface PropertyListProps {
  properties?: Property[];
}

const PropertyList: React.FC<PropertyListProps> = ({ properties: propsProperties }) => {
  const router = useRouter();
  const [properties, setProperties] = useState<Property[]>(propsProperties || []);

  useEffect(() => {
    if (!propsProperties) {
      fetch("/api/properties")
        .then((res) => res.json())
        .then((json) => {
          setProperties(
            json.data.map((item: any) => ({
              id: item.id,
              image: item.images?.[0] || "/default.jpg",
              type: item.listingType?.name || "",
              label: item.status,
              title: item.title,
              location: item.address,
              area: item.area?.toString() || "",
              propertyType: item.category?.name || "",
              price: Number(item.price).toLocaleString() + " đ" || "",
            }))
          );
        });
    }
  }, [propsProperties]);

  return (
   <section className="flex-[2] min-w-[0] max-w-full px-2 md:px-4 py-2 md:py-4 font-sans">
  <div className="flex items-center justify-between mb-4">
    <h1 className="text-3xl font-extrabold tracking-wide text-[#ef4444] mb-1">
      Danh sách bài viết gần đây 
    </h1>
    <div className="flex items-center gap-2">
      <FaSortAmountDown size={24} color="#ef4444" />
      <select className="px-3 py-2 border border-gray-700 rounded bg-[#23232a]/80 text-gray-100 text-sm focus:ring-2 focus:ring-[#ef4444]">
        <option>Mới nhất</option>
        <option>Giá cao nhất</option>
        <option>Giá thấp nhất</option>
      </select>
    </div>
  </div>

  {/* LIST BẤT ĐỘNG SẢN SCROLL */}
  <div className="flex flex-col gap-5 overflow-y-auto h-[900px] pr-2 scroll-smooth">
    {properties.map((p) => (
      <div
        key={p.id}
        className="flex items-center bg-[#23232a]/90 rounded-2xl border border-[#ef4444]/50 shadow-lg hover:scale-[1.015] transition-all duration-300 px-6 py-5 cursor-pointer min-h-[220px]"
        onClick={() => router.push(`/property/${p.id}`)}
      >
        <img
          src={p.image}
          alt={p.title}
          className="w-40 h-40 object-cover rounded-xl border border-gray-700 mr-6"
        />
        <div className="flex-1 flex flex-col justify-between h-full">
          <div className="font-extrabold text-2xl text-white mb-3">{p.title}</div>
          <div className="text-base text-gray-300 flex flex-wrap gap-4">
            <span className="flex items-center gap-1"><FaMapMarkerAlt size={16} /> {p.location}</span>
            <span className="flex items-center gap-1"><FaLayerGroup size={16} /> {p.area}m²</span>
            <span className="flex items-center gap-1"><FaHome size={16} /> {p.propertyType}</span>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <span className="bg-[#00bf63]/90 text-black text-sm px-3 py-1 rounded-full font-semibold">{p.type}</span>
            {p.label && <span className="bg-yellow-400 text-black text-sm px-3 py-1 rounded-full font-semibold">{p.label}</span>}
<button className="text-red-500 text-xl hover:text-red-600"><FaHeart /></button>
          </div>
        </div>
        <div className="font-extrabold text-2xl text-[#ef4444] ml-6 whitespace-nowrap">{p.price}</div>
      
      </div>
    ))}
  </div>
</section>

  );
};

export default PropertyList; 