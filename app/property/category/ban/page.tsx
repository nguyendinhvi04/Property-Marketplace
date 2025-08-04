"use client";
import React, { useEffect, useState } from "react";
import PropertyList, { Property } from "../../../components/PropertyList";
import { motion } from "framer-motion";
import Link from "next/link";
import SidebarFilter from "../../../components/SidebarFilter";

export default function PropertyForSalePage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/properties`);
      const json = await res.json();
      const filtered = (json.data || []).filter(
        (item: any) => item.listingType?.name?.toLowerCase() === "bán"
      );
      const mapped = filtered.map((item: any) => ({
        id: item.id,
        image: item.images?.[0] || "/default.jpg",
        type: item.listingType?.name || "",
        label: item.status,
        title: item.title,
        location: item.address,
        area: item.area?.toString() || "",
        propertyType: item.category?.name || "",
        price: Number(item.price).toLocaleString() + " đ" || "",
      }));
      setProperties(mapped);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#ef4444] via-[#18181b] to-[#18181b] pt-10 pb-20">
    <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-6">Bất động sản cho thuê</h1>
        {loading ? (
            <div className="text-white">Đang tải...</div>
        ) : (
            <PropertyList properties={properties} />
        )}
    </div>
</main>
  );
}
