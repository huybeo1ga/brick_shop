/**
 * Type definitions for Sanity content.
 */

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  featuredImage?: SanityImage | null;
  excerpt?: string | null;
  content?: unknown[] | null;
  author?: string | null;
}

export interface ProductName {
  en?: string;
  vi?: string;
}

export interface ProductSpecifications {
  material?: string;
  finish?: string;
  thickness?: string;
  origin?: string;
}

export interface ProductCategoryRef {
  _id: string;
  slug: string;
  name: string;
}

export interface Product {
  _id: string;
  slug: string;
  name: string | ProductName;
  category: string | ProductCategoryRef;
  description?: unknown[] | null;
  thumbnail?: SanityImage | null;
  mainImage?: SanityImage | null;
  gallery?: (SanityImage | null)[] | null;
  specifications?: ProductSpecifications | null;
  featured?: boolean;
}

export interface ProductListItem {
  _id: string;
  slug: string;
  name: string;
  category: string | ProductCategoryRef;
  thumbnail?: SanityImage | null;
  mainImage?: SanityImage | null;
  featured?: boolean;
}
