"use client";
import { useEffect, useState } from "react";
import ProductsGrid from "@/components/ProductsGrid/ProductsGrid";
import { getProducts } from "@/services/client/products";
import { Product } from "@/types/product";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        console.log("Products from API:", data); // 👈 כאן תראי בקונסול של הדפדפן
        setProducts(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Our Products</h1>
      <ProductsGrid products={products} />
    </div>
  );
}
