import type { ProductCardProps } from "./types";
import styles from "./ProductCard.module.scss";
import { formattedPrice } from "../../utils";
const ProductCard: React.FC<ProductCardProps> = ({
  title,
  origin,
  price,
  currency,
  imageUrl,
}) => {
  return (
    <div className={styles.productCard}>
      <h2 className={styles.productCard__title}>{title}</h2>
      <p className={styles.productCard__origin}>{origin}</p>
      <p className={styles.productCard__price}>
        {formattedPrice(price, currency)}
      </p>
      <a href={imageUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} className="product-card__image" />
      </a>
    </div>
  );
};

export default ProductCard;
