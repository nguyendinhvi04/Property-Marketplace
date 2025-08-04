import React, { useState } from 'react';

const ChangePasswordTab = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('Mật khẩu mới không khớp!');
      return;
    }
    // TODO: Gọi API đổi mật khẩu
    setMessage('Đổi mật khẩu thành công!');
  };

  return (
    <form onSubmit={handleChangePassword} className="bg-white rounded-2xl shadow-2xl p-8 space-y-6 border border-gray-200 w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Đổi mật khẩu</h2>
      <div>
        <label className="block mb-1 font-medium">Mật khẩu cũ</label>
        <input type="password" className="w-full border rounded px-3 py-2" value={oldPassword} onChange={e => setOldPassword(e.target.value)} required />
      </div>
      <div>
        <label className="block mb-1 font-medium">Mật khẩu mới</label>
        <input type="password" className="w-full border rounded px-3 py-2" value={newPassword} onChange={e => setNewPassword(e.target.value)} required />
      </div>
      <div>
        <label className="block mb-1 font-medium">Xác nhận mật khẩu mới</label>
        <input type="password" className="w-full border rounded px-3 py-2" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
      </div>
      <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold w-full mt-4">Đổi mật khẩu</button>
      {message && <div className="text-center text-red-600 mt-2">{message}</div>}
    </form>
  );
};

export default ChangePasswordTab; 