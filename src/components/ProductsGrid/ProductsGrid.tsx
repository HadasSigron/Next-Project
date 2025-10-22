import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductsGrid.module.css";
import {Product}from "@/types/product";


// טיפוס לפרופס של ProductsGrid
type ProductsGridProps = {
  products: Product[];
};

// const products = [
//   {
//     id: 1,
//     name: "shirt",
//     price: 350,
//     description: "shirt",
//     image:
//       "https://i.pinimg.com/236x/ff/4b/70/ff4b7018904ffa6869f4da8fccc344c3.jpg",
//   },
//   {
//     id: 2,
//     name: "aa",
//     price: 240,
//     description: "aaa",
//     image:
//       "http://cala.co.il/cdn/shop/articles/IMG_2113_360x_5846f3fa-267a-48e5-86c8-3f88b4f151c2.webp?v=1684050384&width=2048",
//   },
//   {
//     id: 3,
//     name: "dress",
//     price: 450,
//     description: "dress  ",
//     image:
//       "https://bracha-online.co.il/wp-content/uploads/2023/11/%D7%91%D7%92%D7%93%D7%99%D7%9D-%D7%A6%D7%A0%D7%95%D7%A2%D7%99%D7%9D-%D7%9C%D7%A0%D7%A2%D7%A8%D7%95%D7%AA-400x600.jpg",
//   },
// ];

export default function ProductsGrid({ products }: ProductsGridProps) {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}