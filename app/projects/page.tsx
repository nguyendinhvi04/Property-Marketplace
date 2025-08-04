'use client';


import { useState } from 'react';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Khu Đô Thị Sunrise City",
      category: "real-estate",
      description: "Dự án khu đô thị cao cấp với 500 căn hộ và biệt thự, tích hợp đầy đủ tiện ích hiện đại.",
      image: "🏙️",
      status: "Đang triển khai",
      progress: 75,
      location: "Quận 7, TP.HCM",
      price: "2.5 - 8.5 tỷ VNĐ",
      features: ["Hồ bơi", "Gym", "Trường học", "Siêu thị"]
    },
    {
      id: 2,
      title: "Biệt Thự Oceanview Resort",
      category: "real-estate",
      description: "Khu biệt thự nghỉ dưỡng view biển với 50 căn, thiết kế sang trọng và tiện nghi 5 sao.",
      image: "🏖️",
      status: "Hoàn thành",
      progress: 100,
      location: "Vũng Tàu",
      price: "12 - 25 tỷ VNĐ",
      features: ["View biển", "Bãi tắm riêng", "Spa", "Nhà hàng"]
    },
    {
      id: 3,
      title: "App Quản Lý Bất Động Sản",
      category: "tech",
      description: "Ứng dụng di động giúp quản lý danh mục bất động sản, theo dõi giá cả và kết nối khách hàng.",
      image: "📱",
      status: "Đang phát triển",
      progress: 60,
      location: "Online",
      price: "Miễn phí",
      features: ["React Native", "AI Price Prediction", "Real-time Chat", "VR Tour"]
    },
    {
      id: 4,
      title: "Chung Cư Green Garden",
      category: "real-estate",
      description: "Chung cư xanh thân thiện môi trường với hệ thống năng lượng mặt trời và vườn sinh thái.",
      image: "🌱",
      status: "Sắp khởi công",
      progress: 15,
      location: "Quận 2, TP.HCM",
      price: "1.8 - 4.2 tỷ VNĐ",
      features: ["Năng lượng xanh", "Vườn sinh thái", "Smart Home", "Parking thông minh"]
    },
    {
      id: 5,
      title: "Platform Đầu Tư Bất Động Sản",
      category: "tech",
      description: "Nền tảng crowdfunding cho phép nhiều nhà đầu tư cùng tham gia các dự án bất động sản lớn.",
      image: "💰",
      status: "Beta Testing",
      progress: 85,
      location: "Online",
      price: "Commission-based",
      features: ["Blockchain", "Smart Contracts", "Due Diligence", "Portfolio Tracking"]
    },
    {
      id: 6,
      title: "Khu Công Nghiệp Thông Minh",
      category: "industrial",
      description: "Khu công nghiệp tích hợp công nghệ IoT, tự động hóa và quản lý thông minh.",
      image: "🏭",
      status: "Đang triển khai",
      progress: 45,
      location: "Bình Dương",
      price: "Liên hệ",
      features: ["IoT Integration", "Automated Systems", "Green Technology", "24/7 Security"]
    }
  ];

  const categories = [
    { id: 'all', name: 'Tất cả', icon: '🔥' },
    { id: 'real-estate', name: 'Bất động sản', icon: '🏘️' },
    { id: 'tech', name: 'Công nghệ', icon: '💻' },
    { id: 'industrial', name: 'Công nghiệp', icon: '🏭' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Hoàn thành': return 'bg-green-500';
      case 'Đang triển khai': return 'bg-blue-500';
      case 'Đang phát triển': return 'bg-yellow-500';
      case 'Beta Testing': return 'bg-purple-500';
      case 'Sắp khởi công': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#ef4444] via-[#18181b] to-[#18181b] text-white font-sans">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-black tracking-tight mb-4 bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
            Dự Án Của Tôi 🚀
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Khám phá danh mục dự án đa dạng từ bất động sản cao cấp đến công nghệ tiên tiến. 
            Mỗi dự án đều được thực hiện với sự tận tâm và chuyên nghiệp cao nhất.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-2xl font-bold text-lg transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-[#ef4444] to-[#b91c1c] text-white shadow-lg scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105'
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              {/* Project Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{project.image}</div>
                <div className={`px-3 py-1 rounded-full text-sm font-bold ${getStatusColor(project.status)}`}>
                  {project.status}
                </div>
              </div>

              {/* Project Info */}
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Tiến độ</span>
                  <span className="text-sm font-bold text-red-400">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-red-400">📍</span>
                  <span className="text-sm text-gray-300">{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-400">💰</span>
                  <span className="text-sm text-gray-300">{project.price}</span>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.features.map((feature, index) => (
                  <span key={index} className="bg-gray-800 px-3 py-1 rounded-full text-xs text-gray-300">
                    {feature}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-2xl font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:shadow-lg">
                Xem Chi Tiết
              </button>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-6 text-center border border-gray-800">
            <div className="text-4xl font-black text-red-400 mb-2">6+</div>
            <div className="text-gray-300">Dự Án Đang Thực Hiện</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-6 text-center border border-gray-800">
            <div className="text-4xl font-black text-green-400 mb-2">2</div>
            <div className="text-gray-300">Dự Án Hoàn Thành</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-6 text-center border border-gray-800">
            <div className="text-4xl font-black text-blue-400 mb-2">1000+</div>
            <div className="text-gray-300">Khách Hàng Hài Lòng</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-6 text-center border border-gray-800">
            <div className="text-4xl font-black text-purple-400 mb-2">50B+</div>
            <div className="text-gray-300">Tổng Giá Trị Dự Án</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Quan Tâm Đến Dự Án Nào Đó?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn chi tiết về các dự án đang triển khai 
            và cơ hội đầu tư hấp dẫn.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-[#ef4444] to-[#b91c1c] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-105 transition-all duration-300">
              📞 Liên Hệ Ngay
            </button>
            <button className="bg-gray-800 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-105 hover:bg-gray-700 transition-all duration-300">
              📧 Đăng Ký Nhận Thông Tin
            </button>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.history.back()}
            className="inline-block bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-3 rounded-2xl font-bold text-lg shadow-lg hover:scale-105 transition-all duration-300 hover:from-gray-600 hover:to-gray-700"
          >
            ← Quay về trang chủ
          </button>
        </div>
      </div>
    </main>
  );
}