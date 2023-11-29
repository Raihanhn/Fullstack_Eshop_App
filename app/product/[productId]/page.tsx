import Container from "@/app/components/Container";
import { product } from "@/app/utils/product";
import React from "react";
import ProductDetails from "./ProductDetails";

interface IPrams {
  productId?: string;
}

const Product = ({ params }: { params: IPrams }) => {
  console.log("params", params);

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
};

export default Product;
