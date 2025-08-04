'use client';

import { useState, useEffect } from 'react';

export default function AboutCompanyPage() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    stats: false,
    about: false,
    team: false,
    services: false,
    values: false
  });
  const [activeTab, setActiveTab] = useState('about');
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  // Debug: log giá trị activeTab để kiểm tra chuyển tab
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('activeTab:', activeTab);
  }, [activeTab]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Nguyễn Văn Anh",
      role: "CEO & Founder",
      avatar: "👨‍💼",
      description: "15 năm kinh nghiệm trong lĩnh vực bất động sản và công nghệ",
      skills: ["Leadership", "Strategy", "Business Development"],
      social: { linkedin: "#", github: "#", email: "anh@company.com" },
      quote: "Công nghệ là chìa khóa để tạo ra những giá trị bền vững"
    },
    {
      id: 2,
      name: "Trần Thị Minh",
      role: "CTO & Co-Founder",
      avatar: "👩‍💻",
      description: "Chuyên gia về AI và Machine Learning với 12 năm kinh nghiệm",
      skills: ["AI/ML", "System Architecture", "Full-stack Development"],
      social: { linkedin: "#", github: "#", email: "minh@company.com" },
      quote: "Innovation is the bridge between dreams and reality"
    },
    {
      id: 3,
      name: "Lê Hoàng Tuấn",
      role: "Lead Frontend Developer",
      avatar: "👨‍🎨",
      description: "Chuyên gia UI/UX với đam mê tạo ra những trải nghiệm tuyệt vời",
      skills: ["React", "Vue.js", "UI/UX Design", "Animation"],
      social: { linkedin: "#", github: "#", email: "tuan@company.com" },
      quote: "Design is not just what it looks like, design is how it works"
    },
    {
      id: 4,
      name: "Phạm Thị Lan",
      role: "Backend Developer",
      avatar: "👩‍🔬",
      description: "Chuyên gia về hệ thống backend và database với 8 năm kinh nghiệm",
      skills: ["Node.js", "Python", "Database Design", "Cloud Architecture"],
      social: { linkedin: "#", github: "#", email: "lan@company.com" },
      quote: "Strong foundations create limitless possibilities"
    },
    {
      id: 5,
      name: "Hoàng Minh Đức",
      role: "DevOps Engineer",
      avatar: "👨‍🔧",
      description: "Chuyên gia về CI/CD và cloud infrastructure",
      skills: ["Docker", "Kubernetes", "AWS", "Jenkins"],
      social: { linkedin: "#", github: "#", email: "duc@company.com" },
      quote: "Automation is the key to scalable success"
    },
    {
      id: 6,
      name: "Vũ Thị Hương",
      role: "Product Manager",
      avatar: "👩‍📊",
      description: "Chuyên gia về quản lý sản phẩm và phân tích thị trường",
      skills: ["Product Strategy", "Market Analysis", "Agile", "Data Analytics"],
      social: { linkedin: "#", github: "#", email: "huong@company.com" },
      quote: "Great products come from understanding user needs"
    }
  ];

  const stats = [
    { number: "50+", label: "Dự Án Hoàn Thành", icon: "🏆" },
    { number: "100+", label: "Khách Hàng Hài Lòng", icon: "😊" },
    { number: "5", label: "Năm Kinh Nghiệm", icon: "⭐" },
    { number: "24/7", label: "Hỗ Trợ Khách Hàng", icon: "🚀" }
  ];

  const technologies = [
    { name: "React", icon: "⚛️", color: "from-blue-400 to-blue-600" },
    { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
    { name: "Python", icon: "🐍", color: "from-yellow-400 to-yellow-600" },
    { name: "AI/ML", icon: "🤖", color: "from-purple-400 to-purple-600" },
    { name: "Cloud", icon: "☁️", color: "from-cyan-400 to-cyan-600" },
    { name: "Mobile", icon: "📱", color: "from-pink-400 to-pink-600" }
  ];

  const values = [
    {
      title: "Đổi Mới Sáng Tạo",
      description: "Không ngừng tìm tòi và áp dụng những công nghệ tiên tiến nhất",
      icon: "💡",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Chất Lượng Cao",
      description: "Cam kết mang đến sản phẩm và dịch vụ chất lượng tốt nhất",
      icon: "⭐",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Khách Hàng Là Trung Tâm",
      description: "Luôn lắng nghe và đặt nhu cầu khách hàng lên hàng đầu",
      icon: "❤️",
      color: "from-red-400 to-red-600"
    },
    {
      title: "Teamwork",
      description: "Sức mạnh đến từ sự hợp tác và chia sẻ của toàn đội ngũ",
      icon: "🤝",
      color: "from-green-400 to-green-600"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#ef4444] via-[#18181b] to-[#0f172a] text-white font-sans overflow-x-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-40 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-40 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent animate-pulse">
              Viland Studio
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Đội ngũ phát triển website và ứng dụng hàng đầu 🚀
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setActiveTab('team')}
                className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-red-500/25"
              >
                Gặp Gỡ Đội Ngũ 👥
              </button>
              <button 
                onClick={() => setActiveTab('services')}
                className="bg-gradient-to-r from-gray-700 to-gray-800 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-105 transition-all duration-300"
              >
                Dịch Vụ Của Chúng Tôi 💼
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center transform transition-all duration-1000 delay-${index * 200} ${
                  isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-black text-red-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'about', label: 'Về Chúng Tôi', icon: '🏢' },
              { id: 'team', label: 'Đội Ngũ', icon: '👥' },
              { id: 'services', label: 'Dịch Vụ', icon: '💼' },
              { id: 'values', label: 'Giá Trị', icon: '💎' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white scale-105'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      {activeTab === 'about' && (
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center mb-16">
                <h2 className="text-5xl font-black mb-6">Về Viland Studio 🏢</h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Chúng tôi là một studio công nghệ chuyên phát triển website, ứng dụng di động và giải pháp AI. 
                  Với đội ngũ tài năng và kinh nghiệm, chúng tôi cam kết mang đến những sản phẩm tuyệt vời nhất.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-red-900/30 to-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-red-500/30">
                    <h3 className="text-2xl font-bold mb-4 text-red-400">🎯 Sứ Mệnh</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Democratize công nghệ và làm cho công nghệ tiên tiến trở nên dễ tiếp cận với mọi doanh nghiệp. 
                      Chúng tôi tin rằng mỗi ý tưởng tốt đều xứng đáng được hiện thực hóa bằng công nghệ.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-900/30 to-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/30">
                    <h3 className="text-2xl font-bold mb-4 text-blue-400">🔮 Tầm Nhìn</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Trở thành studio công nghệ hàng đầu Việt Nam, được biết đến với những sản phẩm chất lượng cao 
                      và dịch vụ khách hàng xuất sắc. Chúng tôi hướng đến việc mở rộng ra thị trường quốc tế.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-r from-purple-900/30 to-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30">
                    <h3 className="text-2xl font-bold mb-6 text-purple-400">🛠️ Công Nghệ Sử Dụng</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {technologies.map((tech, index) => (
                        <div key={index} className={`bg-gradient-to-r ${tech.color} p-4 rounded-2xl text-center text-white font-bold hover:scale-105 transition-all duration-300`}>
                          <div className="text-2xl mb-2">{tech.icon}</div>
                          <div>{tech.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Team Section */}
      {activeTab === 'team' && (
        <section id="team" className="py-20">
          <div className="container mx-auto px-4">
            <div>
              {/* DEBUG: Team section is rendered! activeTab: {activeTab}, isVisible.team: {isVisible.team.toString()} */}
              <div className="text-center mb-16">
                <h2 className="text-5xl font-black mb-6">Đội Ngũ Tuyệt Vời 👥</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Gặp gỡ những con người tài năng đã tạo nên thành công của TechVision Studio. 
                  Mỗi thành viên đều mang đến những kỹ năng độc đáo và đam mê công nghệ.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div 
                    key={index}
                    className={`group relative bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-500 hover:scale-105 transform delay-${index * 100}`}
                    onMouseEnter={() => setHoveredMember(member.id)}
                    onMouseLeave={() => setHoveredMember(null)}
                  >
                    {/* Avatar */}
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {member.avatar}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                      <p className="text-red-400 font-bold mb-2">{member.role}</p>
                      <p className="text-gray-300 text-sm">{member.description}</p>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-3 text-center">Kỹ Năng Chuyên Môn</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="bg-red-600/20 border border-red-500/50 px-3 py-1 rounded-full text-sm hover:bg-red-600/40 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="text-center mb-6">
                      <div className="text-gray-400 italic text-sm">
                        "{member.quote}"
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-4">
                      <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl transition-colors">
                        LinkedIn
                      </button>
                      <button className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-xl transition-colors">
                        GitHub
                      </button>
                      <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl transition-colors">
                        Email
                      </button>
                    </div>

                    {/* Hover Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-red-600/10 to-purple-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {activeTab === 'services' && (
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <div 
            // className= {`transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="text-center mb-16">
                <h2 className="text-5xl font-black mb-6">Dịch Vụ Của Chúng Tôi 💼</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Chúng tôi cung cấp giải pháp công nghệ toàn diện từ thiết kế đến phát triển và triển khai.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Phát Triển Website",
                    description: "Thiết kế và phát triển website responsive, hiện đại với công nghệ tiên tiến",
                    icon: "🌐",
                    color: "from-blue-600 to-blue-700",
                    features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Modern UI/UX"]
                  },
                  {
                    title: "Ứng Dụng Di Động",
                    description: "Phát triển ứng dụng iOS và Android với trải nghiệm người dùng tuyệt vời",
                    icon: "📱",
                    color: "from-green-600 to-green-700",
                    features: ["Cross-platform", "Native Performance", "Push Notifications", "Offline Support"]
                  },
                  {
                    title: "Giải Pháp AI",
                    description: "Tích hợp AI và Machine Learning vào sản phẩm để tự động hóa quy trình",
                    icon: "🤖",
                    color: "from-purple-600 to-purple-700",
                    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
                  },
                  {
                    title: "E-commerce",
                    description: "Xây dựng nền tảng thương mại điện tử với tính năng thanh toán an toàn",
                    icon: "🛍️",
                    color: "from-yellow-600 to-yellow-700",
                    features: ["Payment Integration", "Inventory Management", "Order Tracking", "Customer Analytics"]
                  },
                  {
                    title: "Cloud Services",
                    description: "Triển khai và quản lý hạ tầng cloud cho doanh nghiệp",
                    icon: "☁️",
                    color: "from-cyan-600 to-cyan-700",
                    features: ["AWS/Azure", "Auto Scaling", "Security", "Monitoring"]
                  },
                  {
                    title: "Tư Vấn Công Nghệ",
                    description: "Tư vấn chiến lược công nghệ và chuyển đổi số cho doanh nghiệp",
                    icon: "💡",
                    color: "from-red-600 to-red-700",
                    features: ["Digital Transformation", "Tech Strategy", "Process Optimization", "Training"]
                  }
                ].map((service, index) => (
                  <div key={index} className={`bg-gradient-to-r ${service.color} p-1 rounded-3xl hover:scale-105 transition-all duration-300`}>
                    <div className="bg-gray-900 rounded-3xl p-6 h-full">
                      <div className="text-center mb-4">
                        <div className="text-5xl mb-4">{service.icon}</div>
                        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                        <p className="text-gray-300">{service.description}</p>
                      </div>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                            <span className="text-green-400">✓</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Values Section */}
      {activeTab === 'values' && (
        <section id="values" className="py-20">
          <div className="container mx-auto px-4">
            <div 
            // className={`transition-all duration-1000 ${isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
             
             >
                <div className="text-center mb-16">
                <h2 className="text-5xl font-black mb-6">Giá Trị Cốt Lõi 💎</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Những giá trị định hướng mọi hành động và quyết định của chúng tôi.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <div key={index} className={`bg-gradient-to-r ${value.color} p-1 rounded-3xl hover:scale-105 transition-all duration-300`}>
                    <div className="bg-gray-900 rounded-3xl p-8 h-full">
                      <div className="text-center">
                        <div className="text-6xl mb-4">{value.icon}</div>
                        <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-red-900/30 to-gray-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-6">Sẵn Sàng Bắt Đầu Dự Án? 🚀</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Hãy liên hệ với chúng tôi để thảo luận về ý tưởng và biến chúng thành hiện thực!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-105 transition-all duration-300">
              📞 Liên Hệ Ngay
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-105 transition-all duration-300">
              📧 Gửi Email
            </button>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 text-center">
        <button
          onClick={() => window.history.back()}
          className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-3 rounded-2xl font-bold text-lg shadow-lg hover:scale-105 transition-all duration-300 hover:from-gray-600 hover:to-gray-700"
        >
          ← Quay về trang chủ
        </button>
      </section>
    </main>
  );
}