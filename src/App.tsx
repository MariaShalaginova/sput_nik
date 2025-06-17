import "./index.css";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  return (
    <>
      <ProductCard
        title="Cherry tiggo 7"
        origin="Китай"
        price={349000000}
        currency="RUB"
        imageUrl="https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_5253c41afead4aa4b4e90bd3c3db68b3.webp"
      />
    </>
  );
}

export default App;
