import type { ProductCardProps } from "./components/ProductCard/types";

//функция для форматирования цены
export const formattedPrice = (
  price: number,
  currency: ProductCardProps["currency"]
) =>
  new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  }).format(price / 100);
