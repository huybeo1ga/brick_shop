'use client';
import React, { useState } from 'react';
import ProductCard, { Product } from './ProductCards';
const PRODUCTS_DATA: Product[] = [
  {
    id: 1,
    name: "Đá rối tổ ong xám lát sân vườn 3cm",
    originalPrice: 170000,
    salePrice: 145000,
    discount: 15,
    imageUrl: "https://placehold.co/400x400?text=Da+To+Ong", // Thay link ảnh thật của bạn
    isBestSeller: true
  },
  {
    id: 2,
    name: "Đá rối tổ ong xám lát sân vườn 3cm",
    originalPrice: 170000,
    salePrice: 145000,
    discount: 15,
    imageUrl: "https://placehold.co/400x400?text=Da+To+Ong", // Thay link ảnh thật của bạn
    isBestSeller: true
  },
  {
    id: 3,
    name: "Đá rối tổ ong xám lát sân vườn 3cm",
    originalPrice: 170000,
    salePrice: 145000,
    discount: 15,
    imageUrl: "https://placehold.co/400x400?text=Da+To+Ong", // Thay link ảnh thật của bạn
    isBestSeller: true
  },
  {
    id: 4,
    name: "Đá rối tổ ong xám lát sân vườn 3cm",
    originalPrice: 170000,
    salePrice: 145000,
    discount: 15,
    imageUrl: "https://placehold.co/400x400?text=Da+To+Ong", // Thay link ảnh thật của bạn
    isBestSeller: true
  },
  {
    id: 5,
    name: "Đá rối tổ ong xám lát sân vườn 3cm",
    originalPrice: 170000,
    salePrice: 145000,
    discount: 15,
    imageUrl: "https://placehold.co/400x400?text=Da+To+Ong", // Thay link ảnh thật của bạn
    isBestSeller: true
  },
  {
    id: 6,
    name: "Đá rối tổ ong xám lát sân vườn 3cm",
    originalPrice: 170000,
    salePrice: 145000,
    discount: 15,
    imageUrl: "https://placehold.co/400x400?text=Da+To+Ong", // Thay link ảnh thật của bạn
    isBestSeller: true
  },
  {
    id: 7,
    name: "Đá rối tổ ong xám lát sân vườn 3cm",
    originalPrice: 170000,
    salePrice: 145000,
    discount: 15,
    imageUrl: "https://placehold.co/400x400?text=Da+To+Ong", // Thay link ảnh thật của bạn
    isBestSeller: false
  },
  {
    id: 8,
    name: "Đá rối tổ ong xám lát sân vườn 3cm",
    originalPrice: 170000,
    salePrice: 145000,
    discount: 15,
    imageUrl: "https://placehold.co/400x400?text=Da+To+Ong", // Thay link ảnh thật của bạn
    isBestSeller: true
  },
  // Thêm các sản phẩm khác tương tự ở đây...
];

const ProductListing: React.FC = () => {
  const [activeTab, setActiveTab] = useState('KHUYẾN MÃI');

  const tabs = ['KHUYẾN MÃI', 'BÁN CHẠY NHẤT', 'MỚI NHẤT'];

  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-50 min-h-screen">
      {/* Tabs Header */}
      <div className="flex justify-center border-b border-gray-200 mb-6 bg-white">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 text-sm font-bold transition-colors relative cursor-pointer ${
              activeTab === tab 
              ? 'text-blue-900' 
              : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-900" />
            )}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {PRODUCTS_DATA.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;