'use client';

import { useState } from 'react';

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  type NewsArticle = {
    id: number;
    title: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
    summary: string;
    content: string;
    tags: string[];
  };

  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: "Thị Trường Bất Động Sản TP.HCM Tăng Trưởng Mạnh Quý 4/2024",
      category: "real-estate",
      author: "Nguyễn Minh Tuấn",
      date: "12/07/2025",
      readTime: "5 phút",
      image: "🏢",
      summary: "Giá bất động sản tại TP.HCM tăng 8.5% so với cùng kỳ năm trước, dẫn đầu về tốc độ tăng trưởng trong cả nước.",
      content: `
        Theo báo cáo mới nhất từ Hiệp hội Bất động sản Việt Nam, thị trường bất động sản TP.HCM đã ghi nhận mức tăng trưởng ấn tượng 8.5% trong quý 4/2024.
        
        Các khu vực như Quận 2, Quận 7, và Quận 9 dẫn đầu về mức độ tăng giá, với mức tăng trung bình 12-15%. Nguyên nhân chính được cho là do nguồn cung hạn chế và nhu cầu tăng cao từ các nhà đầu tư.
        
        Chuyên gia dự báo xu hướng này sẽ tiếp tục trong năm 2025, đặc biệt là các dự án gần metro và khu vực có hạ tầng phát triển mạnh.
      `,
      tags: ["Bất động sản", "TP.HCM", "Tăng trưởng", "Đầu tư"]
    },
    {
      id: 2,
      title: "Công Nghệ AI Revolutionizing Real Estate: Xu Hướng Mới 2025",
      category: "tech",
      author: "Trần Thị Lan",
      date: "11/07/2025",
      readTime: "7 phút",
      image: "🤖",
      summary: "Trí tuệ nhân tạo đang thay đổi cách thức hoạt động của ngành bất động sản, từ định giá tự động đến tour ảo VR.",
      content: `
        Năm 2025 đánh dấu bước ngoặt quan trọng trong việc ứng dụng AI vào ngành bất động sản. Các công ty hàng đầu đã triển khai thành công nhiều giải pháp AI tiên tiến.
        
        Định giá tự động bằng AI giúp tăng độ chính xác lên 95%, giảm thời gian đánh giá từ 3-5 ngày xuống chỉ còn vài giờ. Công nghệ VR/AR cho phép khách hàng xem nhà từ xa với trải nghiệm thực tế.
        
        Chatbot AI thông minh có thể tư vấn 24/7, phân tích nhu cầu khách hàng và đưa ra gợi ý phù hợp. Dự báo xu hướng thị trường cũng trở nên chính xác hơn nhờ machine learning.
      `,
      tags: ["AI", "Công nghệ", "VR", "Tự động hóa", "Innovation"]
    },
    {
      id: 3,
      title: "Dự Án Khu Đô Thị Thông Minh Đầu Tiên Tại Hà Nội Khởi Công",
      category: "real-estate",
      author: "Lê Văn Hùng",
      date: "10/07/2025",
      readTime: "6 phút",
      image: "🏗️",
      summary: "Khu đô thị thông minh đầu tiên tại Hà Nội chính thức khởi công với tổng vốn đầu tư 15,000 tỷ VNĐ.",
      content: `
        Dự án khu đô thị thông minh Eco-Smart City tại Hà Nội đã chính thức khởi công với sự tham dự của nhiều lãnh đạo thành phố và các nhà đầu tư quốc tế.
        
        Dự án có quy mô 500 hecta, bao gồm 10,000 căn hộ, biệt thự và các tiện ích hiện đại như trường học quốc tế, bệnh viện, trung tâm thương mại và công viên sinh thái.
        
        Điểm đặc biệt là toàn bộ khu đô thị được trang bị hệ thống IoT, năng lượng tái tạo 100%, và hệ thống giao thông thông minh với xe bus điện tự lái.
      `,
      tags: ["Smart City", "Hà Nội", "IoT", "Xanh", "Khởi công"]
    },
    {
      id: 4,
      title: "Startup Fintech Việt Nam Gọi Vốn Thành Công 50 Triệu USD",
      category: "tech",
      author: "Phạm Thị Mai",
      date: "09/07/2025",
      readTime: "4 phút",
      image: "💰",
      summary: "Startup PropertyTech hàng đầu Việt Nam vừa hoàn thành Series B với mức định giá 500 triệu USD.",
      content: `
        RealEstate.vn, startup fintech chuyên về bất động sản, vừa công bố hoàn thành vòng gọi vốn Series B với số tiền 50 triệu USD từ các quỹ đầu tư hàng đầu khu vực.
        
        Công ty được định giá 500 triệu USD, trở thành unicorn đầu tiên trong lĩnh vực PropTech tại Việt Nam. Nguồn vốn sẽ được sử dụng để mở rộng sang các thị trường Đông Nam Á.
        
        Nền tảng hiện có hơn 2 triệu người dùng, xử lý giao dịch trị giá 10 tỷ USD mỗi năm và hỗ trợ hơn 50,000 môi giới bất động sản trên toàn quốc.
      `,
      tags: ["Startup", "Fintech", "Gọi vốn", "Unicorn", "PropTech"]
    },
    {
      id: 5,
      title: "Chính Sách Thuế Mới Cho Bất Động Sản Có Hiệu Lực Từ 1/8/2025",
      category: "policy",
      author: "Hoàng Minh Đức",
      date: "08/07/2025",
      readTime: "8 phút",
      image: "📋",
      summary: "Chính phủ ban hành chính sách thuế mới nhằm điều tiết thị trường bất động sản và tăng nguồn thu ngân sách.",
      content: `
        Nghị định mới về thuế bất động sản sẽ có hiệu lực từ 1/8/2025, áp dụng thuế lũy tiến theo giá trị tài sản và số lượng bất động sản sở hữu.
        
        Thuế suất dao động từ 0.3% đến 2% giá trị tài sản, trong đó căn nhà đầu tiên được miễn thuế nếu giá trị dưới 3 tỷ VNĐ. Các căn thứ hai trở đi sẽ chịu thuế cao hơn.
        
        Chính sách nhằm hạn chế đầu cơ, tăng nguồn thu cho ngân sách địa phương và khuyến khích sử dụng bất động sản hiệu quả hơn.
      `,
      tags: ["Chính sách", "Thuế", "Luật", "Điều tiết", "Ngân sách"]
    },
    {
      id: 6,
      title: "Blockchain Trong Bất Động Sản: Tương Lai Của Giao Dịch Minh Bạch",
      category: "tech",
      author: "Vũ Thành Nam",
      date: "07/07/2025",
      readTime: "6 phút",
      image: "⛓️",
      summary: "Công nghệ blockchain đang tạo ra cuộc cách mạng trong giao dịch bất động sản với tính minh bạch và bảo mật cao.",
      content: `
        Việt Nam đang dẫn đầu khu vực trong việc ứng dụng blockchain cho giao dịch bất động sản. Các smart contract giúp tự động hóa quy trình và giảm thiểu rủi ro gian lận.
        
        Hệ thống sổ cái phân tán lưu trữ toàn bộ lịch sử giao dịch, quyền sở hữu và các thông tin pháp lý một cách bất biến. Điều này giúp tăng cường niềm tin của nhà đầu tư.
        
        Các ngân hàng lớn đã bắt đầu triển khai pilot program, dự kiến sẽ mở rộng toàn quốc trong năm 2026.
      `,
      tags: ["Blockchain", "Smart Contract", "Minh bạch", "Bảo mật", "Giao dịch"]
    }
  ];

  const categories = [
    { id: 'all', name: 'Tất cả', icon: '📰', count: newsArticles.length },
    { id: 'real-estate', name: 'Bất động sản', icon: '🏢', count: newsArticles.filter(a => a.category === 'real-estate').length },
    { id: 'tech', name: 'Công nghệ', icon: '💻', count: newsArticles.filter(a => a.category === 'tech').length },
    { id: 'policy', name: 'Chính sách', icon: '📋', count: newsArticles.filter(a => a.category === 'policy').length }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const featuredArticle = newsArticles[0];
  const trendingArticles = newsArticles.slice(1, 4);

  if (selectedArticle) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-[#ef4444] via-[#18181b] to-[#18181b] text-white font-sans">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <button
            onClick={() => setSelectedArticle(null)}
            className="mb-6 flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <span>←</span> Quay lại danh sách tin tức
          </button>

          {/* Article Content */}
          <article className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800">
              {/* Article Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">{selectedArticle.image}</div>
                <div>
                  <h1 className="text-4xl font-black mb-4">{selectedArticle.title}</h1>
                  <div className="flex items-center gap-6 text-gray-300">
                    <span>👤 {selectedArticle.author}</span>
                    <span>📅 {selectedArticle.date}</span>
                    <span>⏱️ {selectedArticle.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  {selectedArticle.summary}
                </p>
                <div className="whitespace-pre-line text-gray-200 leading-relaxed">
                  {selectedArticle.content}
                </div>
              </div>

              {/* Tags */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="text-lg font-bold mb-4">Thẻ tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedArticle.tags.map((tag, index) => (
                    <span key={index} className="bg-red-600 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#ef4444] via-[#18181b] to-[#18181b] text-white font-sans">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-black tracking-tight mb-4 bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
            Tin Tức & Cập Nhật 📰
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cập nhật những tin tức mới nhất về bất động sản, công nghệ và chính sách. 
            Luôn đón đầu xu hướng với những thông tin chính xác và kịp thời.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            🔥 Tin Nổi Bật
          </h2>
          <div className="bg-gradient-to-r from-red-900/30 to-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-red-500/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-6xl">{featuredArticle.image}</span>
                  <div>
                    <div className="text-sm text-red-400 font-bold mb-1">TIN HOT</div>
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                      <span>📅 {featuredArticle.date}</span>
                      <span>⏱️ {featuredArticle.readTime}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4">{featuredArticle.title}</h3>
                <p className="text-gray-300 mb-6">{featuredArticle.summary}</p>
                <button
                  onClick={() => setSelectedArticle(featuredArticle)}
                  className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 rounded-2xl font-bold hover:scale-105 transition-all duration-300"
                >
                  Đọc Ngay →
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {featuredArticle.tags.map((tag, index) => (
                  <span key={index} className="bg-red-600/20 border border-red-500/50 px-3 py-1 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trending Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            📈 Tin Xu Hướng
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {trendingArticles.map(article => (
              <div key={article.id} className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{article.image}</span>
                  <div className="text-sm text-gray-300">
                    <div>📅 {article.date}</div>
                    <div>⏱️ {article.readTime}</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{article.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{article.summary}</p>
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="text-red-400 hover:text-red-300 font-bold text-sm"
                >
                  Đọc thêm →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Danh Mục Tin Tức</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white scale-105'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105'
                }`}
              >
                {category.icon} {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* All Articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredArticles.map(article => (
            <div key={article.id} className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{article.image}</span>
                <div className="text-xs text-gray-400">
                  <div>📅 {article.date}</div>
                  <div>⏱️ {article.readTime}</div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{article.title}</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{article.summary}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">👤 {article.author}</span>
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl text-sm font-bold transition-colors"
                >
                  Đọc Ngay
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-red-900/30 to-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-red-500/30 text-center">
          <h2 className="text-3xl font-bold mb-4">📧 Đăng Ký Nhận Tin Tức</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Không bỏ lỡ những tin tức quan trọng nhất. Đăng ký để nhận bản tin hàng tuần 
            với những thông tin cập nhật về thị trường bất động sản và công nghệ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn..."
              className="flex-1 px-4 py-3 rounded-2xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
            />
            <button className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 rounded-2xl font-bold hover:scale-105 transition-all duration-300">
              Đăng Ký
            </button>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.history.back()}
            className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-3 rounded-2xl font-bold text-lg shadow-lg hover:scale-105 transition-all duration-300 hover:from-gray-600 hover:to-gray-700"
          >
            ← Quay về trang chủ
          </button>
        </div>
      </div>
    </main>
  );
}