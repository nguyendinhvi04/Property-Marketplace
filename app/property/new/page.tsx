'use client'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

interface Category {
  id: string
  name: string
}

interface FormState {
  title: string;
  description: string;
  price: string;
  area: string;
  address: string;
  categoryId: string;
  listingTypeId: string;
  images: File[];
  imagePreviews: string[];
  ownerId: number | string;
  bedrooms: string;
  bathrooms: string;
  floors: string;
  provinceId: string;
  districtId: string;
  wardId: string;
}

const CreateNewPropertyPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [listingTypes, setListingTypes] = useState<{ id: number; name: string }[]>([])
  const { data: session } = useSession();
  const userId = (session?.user as { id?: string | number })?.id;
  // useEffect(() => {
  //   const userId = (session?.user as { id?: string | number; email?: string })?.id || session?.user?.email || '';
  //   if (userId) {
  //     setForm((prev) => ({ ...prev, ownerId: userId }));
  //   }
  // }, [session]);
  console.log(session);
  const [form, setForm] = useState<FormState>({
    title: '',
    description: '',
    price: '',
    area: '',
    address: '',
    categoryId: '',
    listingTypeId: '',
    images: [],
    imagePreviews: [],
    ownerId: userId ?? '',
    bedrooms: '',
    bathrooms: '',
    floors: '',
    provinceId: '',
    districtId: '',
    wardId: '',
  });
  const [loading, setLoading] = useState(false)
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${API_URL}/api/categories`)
        const data = await res.json()
        if (data.success) setCategories(data.data)
      } catch (error) {
        console.error('Failed to fetch categories:', error)
      }
    }
    fetchCategories()
  }, [])

  // lấy danh sách loại giao dịch
  useEffect(() => {
    const fetchListingTypes = async () => {
      try {
        const res = await fetch(`${API_URL}/api/listing-types`)
        const data = await res.json()
        if (data.success) setListingTypes(data.data)
      } catch (error) {
        console.error('Failed to fetch listing types:', error)
      }
    }
    fetchListingTypes()
  }, [])

  // Lấy danh sách tỉnh/thành
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const res = await fetch("/api/provinces");
        const json = await res.json();
        console.log("Provinces:", json);
        setProvinces(json.data || []);
      } catch (error) {
        console.error('Failed to fetch provinces:', error)
      }
    };
    fetchProvinces();
  }, []);

  // Fetch districts when province changes
  useEffect(() => {
    if (!form.provinceId) return;
    const fetchDistricts = async () => {
      try {
        const res = await fetch(`/api/districts?provinceId=${form.provinceId}`);
        const json = await res.json();
        setDistricts(json.data || []);
        setForm(prev => ({ ...prev, districtId: "", wardId: "" }));
        setWards([]);
      } catch (error) {
        console.error('Failed to fetch districts:', error)
      }
    };
    fetchDistricts();
  }, [form.provinceId]);

  // Fetch wards when district changes
  useEffect(() => {
    if (!form.districtId) return;
    const fetchWards = async () => {
      try {
        const res = await fetch(`/api/wards?districtId=${form.districtId}`);
        const json = await res.json();
        setWards(json.data || []);
        setForm(prev => ({ ...prev, wardId: "" }));
      } catch (error) {
        console.error('Failed to fetch wards:', error)
      }
    };
    fetchWards();
  }, [form.districtId]);

  // hàm xử lý thay đổi giá trị của form
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  // hàm xử lý upload ảnh
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files)
      const previews = files.map((file) => URL.createObjectURL(file))
      setForm((prev) => ({ ...prev, images: files, imagePreviews: previews }))
    } else {
      setForm((prev) => ({ ...prev, images: [], imagePreviews: [] }))
    }
  }

  // hàm xử lý submit form - FIXED VERSION
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation cải thiện
    if (!form.title?.trim()) {
      alert('Vui lòng nhập tiêu đề tin đăng');
      return;
    }
    
    if (!form.address?.trim()) {
      alert('Vui lòng nhập địa chỉ');
      return;
    }
    
    if (!form.categoryId) {
      alert('Vui lòng chọn danh mục bất động sản');
      return;
    }
    
    if (!form.listingTypeId) {
      alert('Vui lòng chọn loại giao dịch');
      return;
    }
    
    if (!form.provinceId) {
      alert('Vui lòng chọn tỉnh/thành phố');
      return;
    }
    
    // Validation cho price - chỉ kiểm tra nếu có nhập
    if (form.price && (isNaN(Number(form.price)) || Number(form.price) < 0)) {
      alert('Giá phải là số và không được âm');
      return;
    }
    
    if (form.area && (isNaN(Number(form.area)) || Number(form.area) <= 0)) {
      alert('Diện tích phải là số dương');
      return;
    }
    
    if (form.bedrooms && (isNaN(Number(form.bedrooms)) || Number(form.bedrooms) < 0)) {
      alert('Số phòng ngủ không hợp lệ');
      return;
    }

    // Kiểm tra authentication
    const token = localStorage.getItem("token");
    if (!token) {
      alert('Vui lòng đăng nhập để đăng tin');
      return;
    }
    setLoading(true)
    // const userId = (session?.user as { id?: string | number })?.id;
    // if (!userId) {
    //   alert('Không tìm thấy userId, vui lòng đăng nhập lại!');
    //   return;
    // }
    try {
      // Upload images trước nếu có
      const imageUrls: string[] = []
      if (form.images.length > 0) {
        for (const image of form.images) {
          const formData = new FormData()
          formData.append('file', image)
          
          console.log('Uploading image:', image.name);
          const uploadRes = await fetch(`${API_URL}/api/upload`, {
            method: 'POST',
            body: formData
          })
          
          if (!uploadRes.ok) {
            throw new Error(`Upload failed with status: ${uploadRes.status}`)
          }
          
          const uploadResult = await uploadRes.json()
          console.log('Upload result:', uploadResult);
          
          if (uploadResult.success) {
            imageUrls.push(uploadResult.url)
          } else {
            throw new Error(`Upload failed: ${uploadResult.error || 'Unknown error'}`)
          }
        }
      }

      // Chuẩn bị payload - đảm bảo đúng format
      const payload = {
        title: form.title.trim(),
        description: form.description?.trim() || '',
        price: form.price ? Number(form.price) : 0,
        area: form.area ? Number(form.area) : null,
        address: form.address.trim(),
        categoryId: Number(form.categoryId),
        ownerId: form.ownerId,
        listingTypeId: Number(form.listingTypeId),
        provinceId: Number(form.provinceId),
        districtId: form.districtId ? Number(form.districtId) : null,
        wardId: form.wardId ? Number(form.wardId) : null,
        bedrooms: form.bedrooms ? Number(form.bedrooms) : 0,
        bathrooms: form.bathrooms ? Number(form.bathrooms) : 0,
        floors: form.floors ? Number(form.floors) : 0,
        images: imageUrls,
        
      };

      console.log('Final payload:', payload);

      // Gửi request đến server
      const res = await fetch(`${API_URL}/api/properties`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const errorText = await res.text();
        console.error('HTTP Error Response:', errorText);
        
        let errorMessage = 'Lỗi không xác định nè !';
        try {
          const errorJson = JSON.parse(errorText);
          errorMessage = errorJson.error || errorMessage;
        } catch {
           console.log("Lỗi ở đâu đó rồi !")
        }
        
        throw new Error(errorMessage);
      }

      const result = await res.json();
      console.log('Success response:', result);

      if (result.success) {
        alert('Đăng tin thành công!')
        // Reset form
        setForm({
          title: '',
          description: '',
          price: '',
          area: '',
          address: '',
          categoryId: '',
          listingTypeId: '',
          images: [],
          imagePreviews: [],
          ownerId: '',
          bedrooms: '',
          bathrooms: '',
          floors: '',
          provinceId: '',
          districtId: '',
          wardId: '',
        })
        setDistricts([]);
        setWards([]);
      } else {
        console.error('API returned success=false:', result);
        alert(`Đăng tin thất bại: ${result.error || 'Lỗi không xác định'}`)
      }

    } catch (error) {
      console.error('Submit error:', error)
      const errorMessage = error instanceof Error ? error.message : 'Lỗi không xác định';
      alert(`Đã xảy ra lỗi: ${errorMessage}`)
    } finally {
      setLoading(false)
    }
  }
  
  console.log('Current form state:', {
    categoryId: form.categoryId,
    listingTypeId: form.listingTypeId,
    provinceId: form.provinceId,
    districtId: form.districtId,
    wardId: form.wardId,
    userId: form.ownerId,
    
  });
  
  return (
    <>
      <Head>
        <title>Đăng tin bất động sản | Viland</title>
      </Head>

      {/* FORM */}
      <main className="min-h-screen bg-gradient-to-br from-[#ef4444] via-[#18181b] to-[#18181b] pt-10 pb-20">
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-[#23232a]/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-[#ef4444]/20 flex flex-col gap-6 mt-8 mb-20 font-sans"
        >
          <h2 className="text-3xl font-black text-[#ef4444] mb-4 text-center tracking-wide">
            Đăng tin bất động sản
          </h2>

          {/* Tiêu đề */}
          <InputText label="Tiêu đề tin đăng" name="title" value={form.title} handleChange={handleChange} placeholder="Ví dụ: Căn hộ 3PN view Landmark" required />

          {/* Mô tả */}
          <TextArea label="Mô tả chi tiết" name="description" value={form.description} handleChange={handleChange} placeholder="Nội dung mô tả bất động sản" />

          {/* Giá, Diện tích */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputGroup label="Giá (VNĐ)" name="price" value={form.price} handleChange={handleChange} />
            <InputGroup label="Diện tích (m²)" name="area" value={form.area} handleChange={handleChange} />
          </div>

          {/* Địa chỉ chi tiết */}
          <InputText label="Địa chỉ chi tiết" name="address" value={form.address} handleChange={handleChange} placeholder="Ví dụ: Tổ 3, Thôn 15" required />
          
          {/* Tỉnh/Thành phố */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SelectGroup
              label="Tỉnh/Thành Phố"
              name="provinceId"
              value={form.provinceId}
              handleChange={handleChange}
              options={provinces}
              required
            />
            <SelectGroup
              label="Quận/Huyện"
              name="districtId"
              value={form.districtId}
              handleChange={handleChange}
              options={districts}
            />
            <SelectGroup
              label="Phường/Xã"
              name="wardId"
              value={form.wardId}
              handleChange={handleChange}
              options={wards}
            />
          </div>

          {/* Số phòng ngủ, Số phòng tắm, Số tầng */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputGroup label="Số phòng ngủ" name="bedrooms" value={form.bedrooms} handleChange={handleChange} />
            <InputGroup label="Số phòng tắm" name="bathrooms" value={form.bathrooms} handleChange={handleChange} />
            <InputGroup label="Số tầng" name="floors" value={form.floors} handleChange={handleChange} />
          </div>
          
          {/* Danh mục và Loại giao dịch */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SelectGroup2 label="Danh mục bất động sản" name="categoryId" value={form.categoryId} handleChange={handleChange} options={categories} required />
            <SelectGroup2 label="Loại giao dịch" name="listingTypeId" value={form.listingTypeId} handleChange={handleChange} options={listingTypes} required />
          </div>
       
          {/* Ảnh */}
          <ImageUpload images={form.imagePreviews} handleFileChange={handleFileChange} />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#ef4444] to-[#b91c1c] text-white py-4 rounded-2xl font-extrabold text-xl shadow-lg hover:scale-105 transition-all duration-300 tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Đang đăng...' : 'Đăng tin'}
          </button>
        </form>
      </main>
    </>
  )
}

export default CreateNewPropertyPage

/* --- Components nhỏ --- */

const InputGroup = ({ label, name, value, handleChange }: any) => (
  <div className="flex flex-col gap-2">
    <label className="font-semibold text-gray-200">{label}</label>
    <input type="number" name={name} value={value} onChange={handleChange} min={0}
      className="px-4 py-3 rounded-xl bg-[#18181b] border border-gray-700 text-gray-100 focus:ring-2 focus:ring-[#ef4444] outline-none" />
  </div>
)

const InputText = ({ label, name, value, handleChange, placeholder, required = false }: any) => (
  <div className="flex flex-col gap-2">
    <label className="font-semibold text-gray-200">
      {label} {required && <span className="text-red-400">*</span>}
    </label>
    <input type="text" name={name} value={value} onChange={handleChange} placeholder={placeholder}
      className="px-4 py-3 rounded-xl bg-[#18181b] border border-gray-700 text-gray-100 focus:ring-2 focus:ring-[#ef4444] outline-none"
      required={required} />
  </div>
)

const TextArea = ({ label, name, value, handleChange, placeholder }: any) => (
  <div className="flex flex-col gap-2">
    <label className="font-semibold text-gray-200">{label}</label>
    <textarea name={name} value={value} onChange={handleChange} rows={4} placeholder={placeholder}
      className="px-4 py-3 rounded-xl bg-[#18181b] border border-gray-700 text-gray-100 focus:ring-2 focus:ring-[#ef4444] outline-none resize-none" />
  </div>
)

const SelectGroup = ({ label, name, value, handleChange, options, required = false }: any) => (
  <div className="flex flex-col gap-2">
    <label className="font-semibold text-gray-200">
      {label} {required && <span className="text-red-400">*</span>}
    </label>
    <select name={name} value={value} onChange={handleChange}
      className="px-4 py-3 rounded-xl bg-[#18181b] border border-gray-700 text-gray-100 focus:ring-2 focus:ring-[#ef4444] outline-none"
      required={required}>
      <option value="">Chọn {label}</option>
      {options.map((opt: any) => (
        <option key={opt.code || opt.id} value={opt.code || opt.id}>
          {opt.name}
        </option>
      ))}
    </select>
  </div>
)

const ImageUpload = ({ images, handleFileChange }: any) => (
  <div className="flex flex-col gap-2">
    <label className="font-semibold text-gray-200">Hình ảnh (nhiều ảnh)</label>
    <input type="file" accept="image/*" multiple onChange={handleFileChange}
      className="file:bg-[#ef4444] file:text-white file:rounded-lg file:px-4 file:py-2 file:border-0 file:mr-4 bg-[#18181b] border border-gray-700 text-gray-100 rounded-xl focus:ring-2 focus:ring-[#ef4444] outline-none" />
    {images.length > 0 && (
      <div className="flex flex-wrap gap-3 mt-2">
        {images.map((url: string, idx: number) => (
          <img key={idx} src={url} alt="" className="w-20 h-20 object-cover rounded-xl border border-gray-600" />
        ))}
      </div>
    )}
  </div>
)

const SelectGroup2 = ({ label, name, value, handleChange, options, required = false }: any) => (
  <div className="flex flex-col gap-2">
    <label className="font-semibold text-gray-200">
      {label} {required && <span className="text-red-400">*</span>}
    </label>
    <select name={name} value={value} onChange={handleChange}
      className="px-4 py-3 rounded-xl bg-[#18181b] border border-gray-700 text-gray-100 focus:ring-2 focus:ring-[#ef4444] outline-none"
      required={required}>
      <option value="">Chọn {label}</option>
      {options.map((opt: any) => (
        <option key={opt.id} value={opt.id}>{opt.name}</option>
      ))}
    </select>
  </div>
)