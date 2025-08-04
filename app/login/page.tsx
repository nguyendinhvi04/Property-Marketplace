'use client';

import { useState } from 'react';
import { FaEye, FaEyeSlash, FaApple, FaGoogle } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.success) {
      // Lưu token, id và tên user vào localStorage
      localStorage.setItem("token", data.token);
      if (data.user) {
        if (data.user.name) {
          localStorage.setItem("userName", data.user.name);
        }
        if (data.user.id) {
          localStorage.setItem("userId", data.user.id.toString());
        }
      }
      router.push("/"); // chuyển hướng về trang chủ
    } else {
      setError(data.message || "Đăng nhập thất bại");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#ef4444] via-[#18181b] to-[#18181b] text-white font-sans">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6 border border-gray-200 relative overflow-hidden group transition">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#ef4444] to-transparent opacity-5 group-hover:opacity-10 transition rounded-2xl pointer-events-none"></div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Chào mừng bạn</h2>
          <p className="text-gray-500 mt-2 text-sm">Đăng nhập để tiếp tục chốt deal !</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="SĐT hoặc Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ef4444] text-sm placeholder-gray-400 transition text-gray-800"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Mật khẩu"
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ef4444] text-sm placeholder-gray-400 transition text-gray-800"
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

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="form-checkbox rounded text-[#ef4444]" /> Nhớ tài khoản
            </label>
            <Link href="/forgot-password" className="text-[#ef4444] hover:underline font-medium">
              Quên mật khẩu?
            </Link>
          </div>

          {error && <div className="text-red-500 text-sm text-center">{error}</div>}

          <button type="submit" className="w-full bg-gradient-to-r from-[#ef4444] to-[#b91c1c] text-white py-3 rounded-2xl font-semibold text-base hover:brightness-110 transition shadow-lg">
            Đăng nhập
          </button>

          <div className="flex items-center justify-center gap-2 text-gray-400 text-xs mt-2">
            <span className="h-px flex-1 bg-gray-300"></span> HOẶC
            <span className="h-px flex-1 bg-gray-300"></span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button type="button" className="flex items-center justify-center gap-2 border py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition font-medium text-sm">
              <FaApple className="text-xl" /> Apple
            </button>
            <button type="button" className="flex items-center justify-center gap-2 border py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition font-medium text-sm">
              <FaGoogle className="text-xl text-[#db4437]" /> Google
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center leading-5 mt-2">
            Tiếp tục nghĩa là bạn đồng ý với <span className="text-[#ef4444]">Điều khoản</span>,{' '}
            <span className="text-[#ef4444]">Chính sách</span> và Quy chế của chúng tôi.
          </p>

          <p className="text-sm text-center text-gray-600 mt-1">
            Chưa có tài khoản?{' '}
            <Link href="/register" className="text-[#ef4444] font-semibold hover:underline">
              Đăng ký ngay
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
