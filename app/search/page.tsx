"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PropertyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";

  const [data, setData] = useState<any[]>([]);
  const [searchInput, setSearchInput] = useState(name);

  // Gọi API mỗi khi 'name' thay đổi
  useEffect(() => {
    const fetchData = async () => {
      const url = name
        ? `/api/property?name=${encodeURIComponent(name)}`
        : `/api/property`;

      const res = await fetch(url);
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, [name]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/property?name=${encodeURIComponent(searchInput.trim())}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Danh sách bất động sản</h1>

      <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Nhập tên bất động sản..."
          className="border p-2 rounded w-80"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Tìm
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-3">
        {name ? `Kết quả cho: "${name}"` : "Tất cả bất động sản"}
      </h2>

      {data.length === 0 ? (
        <p className="text-gray-600">Không tìm thấy bất động sản nào.</p>
      ) : (
        <ul className="space-y-2">
          {data.map((item) => (
            <li
              key={item.id}
              className="border rounded p-3 shadow-sm hover:shadow transition"
            >
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
