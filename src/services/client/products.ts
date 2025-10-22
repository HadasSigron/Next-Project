import { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("/api/products", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch products");
  const data = (await res.json()) as Product[];
  // אם ה-API ממפה ל-id רגיל, עדכני את הטיפוס בהתאם
  return data;
}
