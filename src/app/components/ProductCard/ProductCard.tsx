import styles from "./ProductCard.module.css";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>${product.price}</p>
    </div>
  );
}