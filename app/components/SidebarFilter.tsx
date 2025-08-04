import React from 'react';

const SidebarFilter = () => {


  return (
    <aside className="hidden md:block bg-[#23232a]/60 backdrop-blur-md p-4 lg:p-8 rounded-2xl shadow-xl border border-[#ef4444]/30 w-full min-w-[180px] max-w-xs font-sans flex flex-col gap-4 lg:gap-6">
      <h2 className="text-lg md:text-xl font-extrabold mb-2 text-[#ef4444] tracking-wide">Bộ lọc tìm kiếm</h2>
      {/* Loại giao dịch */}
      <div className="mb-2">
        <div className="font-semibold mb-2 text-gray-200 tracking-wide text-xs md:text-sm">Loại giao dịch</div>
        <div className="flex flex-col gap-1 md:gap-2">
          <label className="flex items-center gap-2 text-gray-200 text-xs md:text-sm">
            <input type="checkbox" className="accent-[#ef4444] w-4 h-4 md:w-5 md:h-5 transition-all duration-200" /> Mua bán
          </label>
          <label className="flex items-center gap-2 text-gray-200 text-xs md:text-sm">
            <input type="checkbox" className="accent-[#ef4444] w-4 h-4 md:w-5 md:h-5 transition-all duration-200" /> Cho thuê
          </label>
        </div>
      </div>
      {/* Loại bất động sản */}
      <div className="mb-2">
        <div className="font-semibold mb-2 text-gray-200 tracking-wide text-xs md:text-sm">Loại bất động sản</div>
        <div className="flex flex-col gap-1 md:gap-2">
          {['Căn hộ chung cư', 'Nhà riêng', 'Đất nền', 'Biệt thự', 'Văn phòng'].map(type => (
            <label key={type} className="flex items-center gap-2 text-gray-200 text-xs md:text-sm">
              <input type="checkbox" className="accent-[#ef4444] w-4 h-4 md:w-5 md:h-5 transition-all duration-200" /> {type}
            </label>
          ))}
        </div>
      </div>
      {/* Khu vực */}
      <div className="mb-2">
        <div className="font-semibold mb-2 text-gray-200 tracking-wide text-xs md:text-sm">Khu vực</div>
        <select className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-[#18181b]/80 text-gray-100 text-xs md:text-sm focus:ring-2 focus:ring-[#ef4444] transition-all duration-200">
          <option>Tất cả</option>
        </select>
      </div>
      {/* Khoảng giá */}
      <div className="mb-2">
        <div className="font-semibold mb-2 text-gray-200 tracking-wide text-xs md:text-sm">Khoảng giá (0đ - 20 tỷ)</div>
        <input type="range" min="0" max="2000000000" className="w-full accent-[#ef4444]" />
      </div>
      {/* Diện tích */}
      <div className="mb-2">
        <div className="font-semibold mb-2 text-gray-200 tracking-wide text-xs md:text-sm">Diện tích</div>
        <div className="flex flex-col gap-1 md:gap-2">
          {['Tất cả', '<30m²', '30-50m²', '50-80m²', '80-100m²', '>100m²'].map(area => (
            <label key={area} className="flex items-center gap-2 text-gray-200 text-xs md:text-sm">
              <input type="checkbox" className="accent-[#ef4444] w-4 h-4 md:w-5 md:h-5 transition-all duration-200" /> {area}
            </label>
          ))}
        </div>
      </div>
      {/* Số phòng ngủ */}
      <div className="mb-2">
        <div className="font-semibold mb-2 text-gray-200 tracking-wide text-xs md:text-sm">Số phòng ngủ</div>
        <div className="flex gap-2 md:gap-4">
          {['Tất cả', '1', '2', '3', '4+'].map(room => (
            <label key={room} className="flex items-center gap-1 text-gray-200 text-xs md:text-sm">
              <input type="radio" name="bedroom" className="accent-[#ef4444] w-4 h-4 md:w-5 md:h-5 transition-all duration-200" /> {room}
            </label>
          ))}
        </div>
      </div>
      {/* Hướng nhà */}
      <div className="mb-2">
        <div className="font-semibold mb-2 text-gray-200 tracking-wide text-xs md:text-sm">Hướng nhà</div>
        <select className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-[#18181b]/80 text-gray-100 text-xs md:text-sm focus:ring-2 focus:ring-[#ef4444] transition-all duration-200">
          <option>Tất cả</option>
        </select>
      </div>
      <button className="w-full mt-2 bg-gradient-to-r from-[#ef4444] to-[#b91c1c] text-white py-2 md:py-3 rounded-2xl font-extrabold text-xs md:text-base shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 tracking-wide">Áp dụng bộ lọc</button>
    </aside>
  );
};

export default SidebarFilter; 