'use client';
import React, { useRef, useState } from 'react'

interface UserProfile {
  name: string
  email: string
  phoneNumber?: string
  avatarUrl?: string
  role: string
  createdAt: string
}

const ROLE_COLORS: Record<string, string> = {
  customer: 'bg-green-500',
  broker: 'bg-orange-500',
  admin: 'bg-red-500',
}

const ROLE_LABELS: Record<string, string> = {
  customer: 'Khách hàng',
  broker: 'Môi giới',
  admin: 'Quản trị viên',
}

// Mock data
const mockUser: UserProfile = {
  name: 'Vĩ Cò Đất',
  email: 'nguyenvanan@example.com',
  phoneNumber: '0123456789',
  avatarUrl: '',
  role: 'customer',
  createdAt: '2023-01-15T00:00:00Z'
}

function AvatarUpload({
  avatarUrl,
  onChange,
}: {
  avatarUrl: string
  onChange: (file: File, preview: string) => void
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [preview, setPreview] = useState<string>('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (ev) => {
        setPreview(ev.target?.result as string)
        onChange(file, ev.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="relative group cursor-pointer">
      <img
        src={preview || avatarUrl || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'}
        alt="Avatar"
        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md transition-all duration-200 group-hover:brightness-90"
        onClick={() => inputRef.current?.click()}
      />
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
      <div className="absolute inset-0 rounded-full bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-white text-xs font-medium">Đổi ảnh</span>
      </div>
    </div>
  )
}

function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  React.useEffect(() => {
    const timer = setTimeout(onClose, 2500)
    return () => clearTimeout(timer)
  }, [onClose])
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg">
      {message}
    </div>
  )
}

function ChangePasswordTab() {
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  })

  return (
    <div className="w-full bg-white rounded-2xl shadow-2xl p-8 space-y-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Đổi mật khẩu</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Mật khẩu hiện tại</label>
          <input
            type="password"
            value={passwords.current}
            onChange={(e) => setPasswords({...passwords, current: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Mật khẩu mới</label>
          <input
            type="password"
            value={passwords.new}
            onChange={(e) => setPasswords({...passwords, new: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Xác nhận mật khẩu mới</label>
          <input
            type="password"
            value={passwords.confirm}
            onChange={(e) => setPasswords({...passwords, confirm: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>
      </div>
      <button className="w-full px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-150">
        Cập nhật mật khẩu
      </button>
    </div>
  )
}

function PostsTab() {
  const mockPosts = [
    { id: 1, title: 'Bán nhà 3 tầng tại Quận 1', status: 'Đang hiển thị', createdAt: '2024-01-10' },
    { id: 2, title: 'Cho thuê căn hộ cao cấp', status: 'Đã ẩn', createdAt: '2024-01-05' },
    { id: 3, title: 'Đất nền dự án mới', status: 'Đang hiển thị', createdAt: '2023-12-28' }
  ]

  return (
    <div className="w-full bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Bài đăng của tôi</h2>
      <div className="space-y-4">
        {mockPosts.map((post) => (
          <div key={post.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">{post.title}</h3>
                <p className="text-sm text-gray-600 mt-1">Ngày đăng: {post.createdAt}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                post.status === 'Đang hiển thị' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {post.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AppointmentsTab() {
  const mockAppointments = [
    { id: 1, title: 'Xem nhà tại Quận 2', date: '2024-01-20', time: '10:00', status: 'Đã xác nhận' },
    { id: 2, title: 'Tư vấn dự án mới', date: '2024-01-25', time: '14:30', status: 'Chờ xác nhận' },
    { id: 3, title: 'Ký hợp đồng thuê', date: '2024-01-15', time: '09:00', status: 'Hoàn thành' }
  ]

  return (
    <div className="w-full bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Lịch hẹn</h2>
      <div className="space-y-4">
        {mockAppointments.map((appointment) => (
          <div key={appointment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">{appointment.title}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {appointment.date} lúc {appointment.time}
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                appointment.status === 'Đã xác nhận' ? 'bg-green-100 text-green-800' :
                appointment.status === 'Chờ xác nhận' ? 'bg-yellow-100 text-yellow-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {appointment.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function UserProfilePage() {
  const [user] = useState<UserProfile>(mockUser)
  const [avatarFile, setAvatarFile] = useState<File | null>(null)
  const [avatarPreview, setAvatarPreview] = useState<string>('')
  const [toast, setToast] = useState<string>('')
  const [activeTab, setActiveTab] = useState('profile')

  const handleAvatarChange = (file: File, preview: string) => {
    setAvatarFile(file)
    setAvatarPreview(preview)
  }

  const handleUpdate = () => {
    setToast('Cập nhật thông tin thành công!')
    if (avatarPreview) {
      setAvatarFile(null)
      setAvatarPreview('')
    }
  }

  const handleLogout = () => {
    setToast('Đã đăng xuất!')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-900 via-black to-red-700 flex font-sans">
      {toast && <Toast message={toast} onClose={() => setToast('')} />}
      
      {/* Sidebar */}
      <aside className="basis-1/4 max-w-[280px] bg-[#1e1e2f] text-white flex flex-col py-8 px-4 gap-2 shadow-2xl">
        <div className="text-2xl font-bold mb-8 px-2">Viland</div>
        {[
          { key: 'profile', label: 'Thông tin cá nhân' },
          { key: 'password', label: 'Đổi mật khẩu' },
          { key: 'posts', label: 'Bài đăng' },
          { key: 'appointments', label: 'Lịch hẹn' },
          { key: 'logout', label: 'Đăng xuất' }
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => {
              if (item.key === 'logout') {
                handleLogout()
              } else {
                setActiveTab(item.key)
              }
            }}
            className={`text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === item.key ? 'bg-red-600' : 'hover:bg-white/10'
            }`}
          >
            {item.label}
          </button>
        ))}
      </aside>
    
      {/* Content */}
      <section className="flex-1 basis-3/4 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-3xl">
          {activeTab === 'profile' && (
            <div className="w-full bg-white rounded-2xl shadow-2xl p-8 space-y-6 border border-gray-200 relative overflow-hidden group transition">
              <AvatarUpload avatarUrl={avatarPreview || user.avatarUrl || ''} onChange={handleAvatarChange} />
              <div className="mt-3 text-xl font-semibold text-gray-900">{user.name}</div>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold text-white ${ROLE_COLORS[user.role]}`}
                >
                  {ROLE_LABELS[user.role]}
                </span>
              </div>
              <div className="mt-2 w-full flex flex-col gap-1 text-gray-700 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-medium w-28">Email:</span>
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium w-28">Số điện thoại:</span>
                  <span>{user.phoneNumber}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium w-28">Ngày tham gia:</span>
                  <span>{new Date(user.createdAt).toLocaleDateString('vi-VN')}</span>
                </div>
              </div>
              <div className="flex gap-4 mt-6 w-full justify-center">
                <button
                  className="px-6 py-2 rounded-lg bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition-all duration-150"
                  onClick={handleUpdate}
                >
                  Cập nhật thông tin
                </button>
              </div>
            </div>
          )}
    
          {activeTab === 'password' && (
            <ChangePasswordTab />
          )}
          {activeTab === 'posts' && (
            <PostsTab />
          )}
          {activeTab === 'appointments' && (
            <AppointmentsTab />
          )}
        </div>
      </section>
    </main>
  )
}