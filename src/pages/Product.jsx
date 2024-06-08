import { useParams } from "react-router-dom";
import all_products from "../assets/all_products";
import ProductHd from "../components/ProductHd";
import ProductDisplay from "../components/ProductDisplay";
import ProductDescription from "../components/ProductDescription";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  console.log("productId", productId);

  const product = all_products.find((e) => e.id === Number(productId));
  if (!product) return <h1>Product not found</h1>;

  return (
    <section>
      <div>
        <ProductHd product={product} />
        <ProductDisplay product={product} />
        <ProductDescription />
        <RelatedProducts />
      </div>
    </section>
  );
};

export default Product;
