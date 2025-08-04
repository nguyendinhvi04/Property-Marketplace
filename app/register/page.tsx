'use client';

import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (password !== confirmPassword) {
      setError('Mật khẩu xác nhận không khớp');
      return;
    }
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, phoneNumber, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    if (data.success) {
      setSuccess('Đăng ký thành công! Đang chuyển hướng...');
      setTimeout(() => router.push('/login'), 1500);
    } else {
      setError(data.message || 'Đăng ký thất bại');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#ef4444] via-[#18181b] to-[#18181b] text-white font-sans">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6 border border-gray-200 relative overflow-hidden group transition">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#ef4444] to-transparent opacity-5 group-hover:opacity-10 transition rounded-2xl pointer-events-none"></div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Đăng ký tài khoản</h2>
          <p className="text-gray-500 mt-1 text-sm">Tham gia cùng Viland ngay hôm nay!</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Họ và tên"
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#ef4444] text-sm placeholder-gray-400 transition text-gray-800"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#ef4444] text-sm placeholder-gray-400 transition text-gray-800"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Số điện thoại"
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#ef4444] text-sm placeholder-gray-400 transition text-gray-800"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            required
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Mật khẩu"
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#ef4444] text-sm placeholder-gray-400 transition text-gray-800"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-4 flex items-center text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Xác nhận mật khẩu"
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#ef4444] text-sm placeholder-gray-400 transition text-gray-800"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-4 flex items-center text-gray-500"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          {success && <div className="text-green-600 text-sm text-center">{success}</div>}
          <button type="submit" className="w-full bg-gradient-to-r from-[#ef4444] to-[#b91c1c] text-white py-3 rounded-2xl font-semibold hover:brightness-110 transition shadow-lg">
            Đăng ký
          </button>
          <p className="text-sm text-center text-gray-700">
            Đã có tài khoản?{' '}
            <Link href="/login" className="text-[#ef4444] font-semibold hover:underline">
              Đăng nhập
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}