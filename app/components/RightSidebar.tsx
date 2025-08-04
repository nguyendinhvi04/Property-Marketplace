import React from 'react';

const hotNews = [
  {
    id: 1,
    title: 'Giá nhà đất trung tâm tăng mạnh quý 2/2024',
    desc: 'Nhiều khu vực trung tâm ghi nhận mức tăng giá ấn tượng, thu hút nhà đầu tư.',
  },
  {
    id: 2,
    title: 'Chính sách mới hỗ trợ người mua nhà lần đầu',
    desc: 'Ngân hàng đồng loạt giảm lãi suất, ưu đãi lớn cho khách hàng cá nhân.',
  },
  {
    id: 3,
    title: 'Dự án ven đô hút khách nhờ hạ tầng phát triển',
    desc: 'Các dự án vùng ven được quan tâm nhờ giao thông thuận tiện, giá hợp lý.',
  },
];

const RightSidebar = () => {
  return (
    <aside className="bg-[#23232a]/60 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#ef4444]/30 min-w-[200px] max-w-[180px] flex flex-col gap-6 h-fit">
      {/* Bản đồ */}
      <div>
        <h3 className="text-base font-bold text-[#ef4444] mb-3 tracking-wide">Bản đồ</h3>
        <div className="rounded-xl overflow-hidden shadow-lg border border-[#ef4444]/20">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Bản đồ" className="w-full h-40 object-cover" />
        </div>
      </div>
      {/* Tin nóng */}
      <div>
        <h3 className="text-base font-bold text-[#ef4444] mb-3 tracking-wide">News</h3>
        <ul className="flex flex-col gap-4">
          {hotNews.map(news => (
            <li key={news.id} className="pb-4 border-b border-[#ef4444]/20 last:border-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-[#ef4444] text-white text-xs px-2 py-0.5 rounded-full font-bold">Hot</span>
                <span className="font-semibold text-sm text-gray-100">{news.title}</span>
              </div>
              <p className="text-xs text-gray-400 leading-snug">{news.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default RightSidebar; 