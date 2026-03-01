import React from 'react';

export interface Product {
  id: number;
  name: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  imageUrl: string;
  isNew?: boolean;
  isBestSeller?: boolean; // Tương ứng với tag "MUA NHIỀU"
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Hàm format tiền tệ Việt Nam
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + 'đ';
  };

  return (
    <div className="group flex flex-col bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
      {/* Tags */}
      <div className="absolute top-0 right-0 z-10 flex flex-col items-end">
        {product.isNew && (
          <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 mb-1">
            MỚI
          </span>
        )}
        {product.isBestSeller && (
          <span className="bg-yellow-400 text-black text-[10px] font-bold px-2 py-1 mb-1">
            MUA NHIỀU
          </span>
        )}
        <span className="bg-red-600 text-white text-[11px] font-bold px-2 py-1">
          -{product.discount}%
        </span>
      </div>

      {/* Image Container */}
      <div className="aspect-square w-full overflow-hidden bg-gray-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col items-center text-center flex-grow">
        <h3 className="text-[13px] font-semibold text-gray-800 line-clamp-2 min-h-[40px] mb-2">
          {product.name}
        </h3>
        
        <div className="flex items-baseline gap-2">
          <span className="text-red-600 font-bold text-sm">
            {formatCurrency(product.salePrice)}
          </span>
          <span className="text-gray-400 line-through text-[11px]">
            {formatCurrency(product.originalPrice)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;