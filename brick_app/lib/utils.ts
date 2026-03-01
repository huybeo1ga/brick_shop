import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge classNames an toàn cho Tailwind
 * - Loại bỏ class trùng
 * - Ưu tiên class phía sau
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}