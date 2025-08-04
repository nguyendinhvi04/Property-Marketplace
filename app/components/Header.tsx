'use client'  
import React from 'react';
import { FaHeart, FaUserCircle, FaBars, FaHome, FaPlusCircle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [userName, setUserName] = React.useState<string>('');
  const router = useRouter();

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
      const name = localStorage.getItem('userName');
      if (name) setUserName(name);
    }
  }, []);
// localStorage.setItem("userName", data.user.name); // đẩy vào local storage
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
    setUserName('');
    router.push('/login');
  };

  const toggleMobileMenu = (): void => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems: string[] = [ 'Mua bán', 'Cho thuê', 'Tin tức', 'Liên hệ'];

  return (
    <header className="bg-[#18181b] shadow-sm px-2 py-2 md:px-6 md:py-3 flex items-center justify-between w-full font-sans">
      {/* Logo và menu */}
      <div className="flex items-center gap-4 md:gap-8 flex-shrink-0">
        {/* Đã bỏ icon Next ở góc trái, chỉ giữ tên Viland */}
        <span className="text-lg md:text-2xl font-bold text-[#ef4444]">Viland</span>
        {/* Menu điều hướng chỉ hiện trên md trở lên */}
        <nav className="hidden md:flex gap-6 text-gray-200 text-base">
          {/* <a href="#" className="hover:text-[#ef4444]">Trang chủ</a>
          <a href="#" className="hover:text-[#ef4444]">Mua bán</a> */}
          <a href="/"  className="hover:text-[#ef4444]">Home</a>
          <a href="/property/category/cho-thue" className="hover:text-[#ef4444]">Cho thuê</a>
          <a href="/property/category/ban" className="hover:text-[#ef4444]">Mua bán</a>
          <a href="/projects" className="hover:text-[#ef4444]">Dự án</a>
          <a href="/news" className="hover:text-[#ef4444]">Tin tức</a>
          <a href="/about" className="hover:text-[#ef4444]">Giới thiệu</a>
        </nav>
      </div>
      {/* Thanh tìm kiếm */}
      <div className="flex-1 flex flex-row items-center justify-center gap-2 mx-2 md:mx-6">
        <input
          type="text"
          placeholder="Tìm kiếm bất động sản..."
          className="w-full md:w-[320px] px-2 md:px-4 py-1 md:py-2 rounded-md md:rounded-l-md border border-gray-700 focus:outline-none bg-[#23232a] text-gray-100 text-xs md:text-sm placeholder-gray-400"
        />
        {/* Dropdown chỉ hiện trên md trở lên */}
        <select className="hidden md:block px-3 py-2 border border-gray-700 bg-[#23232a] text-gray-100 text-sm rounded-none focus:outline-none">
          <option>Loại bất động sản</option>

        </select>
        <select className="hidden md:block px-3 py-2 border border-gray-700 bg-[#23232a] text-gray-100 text-sm rounded-none focus:outline-none">
          <option>Khu vực</option>

        </select>
        <button  onClick={() => router.push('/search')}  className="bg-white text-[#b91c1c] px-2 md:px-4 py-1 md:py-2 rounded-md md:rounded-r-md font-semibold hover:bg-[#ef4444] hover:text-white transition text-xs md:text-base whitespace-nowrap">Tìm</button>
      </div>

      {/* Icon và nút bên phải: chỉ hiện trên md trở lên */}
      <div className="hidden md:flex items-center gap-4">
      <button className="text-gray-300 hover:text-[#ef4444] text-xl" onClick={() => router.push('/user')}><FaUserCircle/> Cá nhân</button>
        <button  onClick={() => router.push('/favorite')} className="text-[#ef4444] hover:text-white text-xl"><FaHeart /> Yêu thích</button>
        {!isLoggedIn ? (
          <button className="text-gray-200 hover:text-[#ef4444] text-1xl" onClick={() => router.push('/login')}> Đăng nhập</button>
        ) : (
          <>
            <span className="text-gray-100 text-base font-semibold mr-2">{userName}</span>
            <button className="bg-white text-[#b91c1c] px-2 md:px-4 py-1 md:py-2 rounded-md md:rounded-r-md font-semibold hover:bg-[#ef4444] hover:text-white transition text-xs md:text-base whitespace-nowrap" onClick={handleLogout}>Đăng xuất</button>
          </>
        )}
        <button className="bg-white text-[#b91c1c] px-2 md:px-4 py-1 md:py-2 rounded-md md:rounded-r-md font-semibold hover:bg-[#ef4444] hover:text-white transition text-xs md:text-base whitespace-nowrap" onClick={() => router.push('/property/new')}>Đăng tin</button>
      </div>

      {/* Nút menu mobile */}
      <button onClick={toggleMobileMenu} className="md:hidden text-gray-300 text-2xl">
        <FaBars />
      </button>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-[#1f1f24] shadow-lg z-50 flex flex-col p-6 gap-6 transition-all duration-300">
          {menuItems.map((item: string, idx: number) => (
            <a
              key={idx}
              href="#"
              className="text-gray-200 text-lg hover:text-[#ef4444] transition"
              onClick={toggleMobileMenu}
            >
              {item}
            </a>
          ))}
          <button className="bg-gradient-to-r from-[#ef4444] to-[#b91c1c] text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-1 hover:brightness-110 transition shadow-md">
            <FaPlusCircle /> Đăng tin
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
