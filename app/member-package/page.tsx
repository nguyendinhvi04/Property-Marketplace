'use client'
import React, { useState } from 'react'
import { Check, Star, Crown, Zap, Users, Calendar, Phone, Mail, Building } from 'lucide-react'

interface MembershipPlan {
  id: string
  name: string
  price: number
  duration: string
  color: string
  icon: React.ReactNode
  features: string[]
  maxPosts: number
  priority: string
  support: string
  badge: string
}

const membershipPlans: MembershipPlan[] = [
  {
    id: 'basic',
    name: 'Gói Cơ Bản',
    price: 299000,
    duration: '1 tháng',
    color: 'from-gray-500 to-gray-700',
    icon: <Users className="w-8 h-8" />,
    features: [
      'Đăng tối đa 10 tin/tháng',
      'Hiển thị thông tin liên hệ',
      'Công cụ tìm kiếm cơ bản',
      'Hỗ trợ email'
    ],
    maxPosts: 10,
    priority: 'Bình thường',
    support: 'Email',
    badge: 'Môi giới'
  },
  {
    id: 'premium',
    name: 'Gói Cao Cấp',
    price: 599000,
    duration: '1 tháng',
    color: 'from-blue-500 to-blue-700',
    icon: <Star className="w-8 h-8" />,
    features: [
      'Đăng tối đa 50 tin/tháng',
      'Tin được ưu tiên hiển thị',
      'Thống kê chi tiết',
      'Công cụ CRM cơ bản',
      'Hỗ trợ qua điện thoại',
      'Badge "Môi giới Chuyên nghiệp"'
    ],
    maxPosts: 50,
    priority: 'Ưu tiên cao',
    support: 'Phone + Email',
    badge: 'Môi giới Chuyên nghiệp'
  },
  {
    id: 'vip',
    name: 'Gói VIP',
    price: 999000,
    duration: '1 tháng',
    color: 'from-purple-500 to-purple-700',
    icon: <Crown className="w-8 h-8" />,
    features: [
      'Đăng không giới hạn',
      'Tin luôn hiển thị đầu trang',
      'Thống kê nâng cao',
      'CRM chuyên nghiệp',
      'Hỗ trợ 24/7',
      'Tư vấn marketing',
      'Badge "Môi giới VIP"',
      'Trang cá nhân tùy chỉnh'
    ],
    maxPosts: 999,
    priority: 'Ưu tiên tối đa',
    support: '24/7 Dedicated',
    badge: 'Môi giới VIP'
  }
]

interface RegistrationForm {
  planId: string
  fullName: string
  email: string
  phone: string
  company: string
  experience: string
  licenseNumber: string
  paymentMethod: string
}

function PlanCard({ plan, isSelected, onSelect }: { 
  plan: MembershipPlan
  isSelected: boolean
  onSelect: (planId: string) => void 
}) {
  return (
    <div 
      className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 bg-gradient-to-br ${plan.color} ${
        isSelected 
          ? 'ring-4 ring-red-500 shadow-2xl' 
          : 'hover:shadow-xl'
      }`}
      onClick={() => onSelect(plan.id)}
    >
      {plan.id === 'premium' && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-xs font-bold">
          PHỔ BIẾN NHẤT
        </div>
      )}
      
      <div className="text-white">
        <div className="flex items-center gap-3 mb-4">
          {plan.icon}
          <h3 className="text-xl font-bold">{plan.name}</h3>
        </div>
        
        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold">{plan.price.toLocaleString('vi-VN')}</span>
            <span className="text-sm opacity-80">đ/{plan.duration}</span>
          </div>
        </div>
        
        <ul className="space-y-3 mb-6">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="space-y-2 text-xs opacity-90">
          <div>📊 Tin đăng: {plan.maxPosts === 999 ? 'Không giới hạn' : `${plan.maxPosts} tin/tháng`}</div>
          <div>⚡ Ưu tiên: {plan.priority}</div>
          <div>🎯 Hỗ trợ: {plan.support}</div>
        </div>
        
        {isSelected && (
          <div className="absolute top-4 right-4">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function RegistrationForm({ selectedPlan, onSubmit }: {
  selectedPlan: MembershipPlan
  onSubmit: (data: RegistrationForm) => void
}) {
  const [formData, setFormData] = useState<RegistrationForm>({
    planId: selectedPlan.id,
    fullName: '',
    email: '',
    phone: '',
    company: '',
    experience: '',
    licenseNumber: '',
    paymentMethod: 'bank_transfer'
  })

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email || !formData.phone || !formData.experience) {
      return
    }
    onSubmit(formData)
  }

  const updateField = (field: keyof RegistrationForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Đăng ký gói {selectedPlan.name}</h2>
        <p className="text-gray-600">Vui lòng điền đầy đủ thông tin để hoàn tất đăng ký</p>
      </div>

      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Users className="w-4 h-4 inline mr-2" />
              Họ và tên *
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => updateField('fullName', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="Nhập họ và tên"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Số điện thoại *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="0123456789"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Building className="w-4 h-4 inline mr-2" />
              Công ty
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => updateField('company', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="Tên công ty (nếu có)"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Kinh nghiệm *</label>
            <select
              required
              value={formData.experience}
              onChange={(e) => updateField('experience', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            >
              <option value="">Chọn kinh nghiệm</option>
              <option value="under_1">Dưới 1 năm</option>
              <option value="1_3">1-3 năm</option>
              <option value="3_5">3-5 năm</option>
              <option value="over_5">Trên 5 năm</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Số giấy phép môi giới</label>
            <input
              type="text"
              value={formData.licenseNumber}
              onChange={(e) => updateField('licenseNumber', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="Số giấy phép (nếu có)"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">Phương thức thanh toán *</label>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { id: 'bank_transfer', name: 'Chuyển khoản ngân hàng', icon: '🏦' },
              { id: 'momo', name: 'Ví MoMo', icon: '📱' },
              { id: 'zalopay', name: 'ZaloPay', icon: '💳' }
            ].map((method) => (
              <label key={method.id} className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method.id}
                  checked={formData.paymentMethod === method.id}
                  onChange={(e) => updateField('paymentMethod', e.target.value)}
                  className="mr-3"
                />
                <div>
                  <div className="font-medium">{method.icon} {method.name}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="font-medium text-red-800 mb-2">Tóm tắt đơn hàng</h4>
          <div className="space-y-1 text-sm text-red-700">
            <div className="flex justify-between">
              <span>Gói: {selectedPlan.name}</span>
              <span>{selectedPlan.price.toLocaleString('vi-VN')}đ</span>
            </div>
            <div className="flex justify-between">
              <span>Thời hạn: {selectedPlan.duration}</span>
            </div>
            <hr className="border-red-200 my-2" />
            <div className="flex justify-between font-bold">
              <span>Tổng cộng:</span>
              <span>{selectedPlan.price.toLocaleString('vi-VN')}đ</span>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <input type="checkbox" required className="mt-1" />
          <label className="text-sm text-gray-600">
            Tôi đồng ý với <a href="#" className="text-red-600 hover:underline">Điều khoản dịch vụ</a> và 
            <a href="#" className="text-red-600 hover:underline ml-1">Chính sách bảo mật</a> của Viland
          </label>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-8 rounded-lg font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <Zap className="w-5 h-5 inline mr-2" />
          Thanh toán và Kích hoạt gói
        </button>
      </div>
    </div>
  )
}

function Toast({ message, type = 'success', onClose }: { 
  message: string
  type?: 'success' | 'error'
  onClose: () => void 
}) {
  React.useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-lg shadow-lg text-white ${
      type === 'success' ? 'bg-green-600' : 'bg-red-600'
    }`}>
      <div className="flex items-center gap-2">
        {type === 'success' ? <Check className="w-5 h-5" /> : <span>❌</span>}
        {message}
      </div>
    </div>
  )
}

export default function BrokerMembershipPage() {
  const [selectedPlan, setSelectedPlan] = useState<string>('')
  const [showForm, setShowForm] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId)
  }

  const handleContinue = () => {
    if (!selectedPlan) {
      setToast({ message: 'Vui lòng chọn một gói hội viên!', type: 'error' })
      return
    }
    setShowForm(true)
  }

  const handleRegistration = (data: RegistrationForm) => {
    console.log('Registration data:', data)
    setToast({ message: 'Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.', type: 'success' })
    // Reset form
    setTimeout(() => {
      setShowForm(false)
      setSelectedPlan('')
    }, 2000)
  }

  const selectedPlanData = membershipPlans.find(p => p.id === selectedPlan)

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-red-700">
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}

      <div className="container mx-auto px-4 py-12">
        {!showForm ? (
          <>
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trở thành Môi giới Chuyên nghiệp
              </h1>
              <p className="text-xl text-red-100 max-w-3xl mx-auto">
                Tăng cường hiệu quả kinh doanh với các gói hội viên được thiết kế đặc biệt cho môi giới bất động sản
              </p>
            </div>

            {/* Plans */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {membershipPlans.map((plan) => (
                <PlanCard
                  key={plan.id}
                  plan={plan}
                  isSelected={selectedPlan === plan.id}
                  onSelect={handlePlanSelect}
                />
              ))}
            </div>

            {/* Continue Button */}
            <div className="text-center">
              <button
                onClick={handleContinue}
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-full text-lg font-bold transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!selectedPlan}
              >
                Tiếp tục đăng ký
              </button>
            </div>
          </>
        ) : (
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setShowForm(false)}
              className="text-white hover:text-red-300 mb-6 flex items-center gap-2"
            >
              ← Quay lại chọn gói
            </button>
            {selectedPlanData && (
              <RegistrationForm
                selectedPlan={selectedPlanData}
                onSubmit={handleRegistration}
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
}