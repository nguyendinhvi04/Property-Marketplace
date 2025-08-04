'use client';

import Link from 'next/link';

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen bg-gray-100 items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Quên mật khẩu?</h2>
          <p className="text-gray-500 mt-1 text-sm">Nhập email hoặc số điện thoại của bạn để nhận liên kết khôi phục.</p>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Email hoặc SĐT"
            className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-[#ef4444] text-sm"
          />

          <button className="w-full bg-[#ef4444] text-white py-3 rounded font-semibold hover:bg-[#d32f2f] transition">
            Gửi yêu cầu khôi phục
          </button>

          <p className="text-sm text-center text-gray-700">
            Quay về{' '}
            <Link href="/login" className="text-[#ef4444] font-semibold hover:underline">
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
