const Footer = () => {
  return (
    <footer className="w-full bg-[#18181b] text-gray-300 py-4 mt-0 border-t border-gray-800 text-center font-sans">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-base font-semibold">© {new Date().getFullYear()} Viland. All rights reserved.</p>
        <p className="text-sm mt-2">Đầu tư và mua bán bất động sản toàn quốc. Hotline: <span className="text-[#ef4444] font-bold">1900 9999</span></p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="/" className="hover:text-[#ef4444] transition">Trang chủ</a>
          <a href="/about" className="hover:text-[#ef4444] transition">Giới thiệu</a>
          <a href="/contact" className="hover:text-[#ef4444] transition">Liên hệ</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
