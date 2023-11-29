"use client";
import {
  CartProductType,
  SelectedImgType,
} from "@/app/product/[productId]/ProductDetails";
import React from "react";

interface SetColorProps {
  images: SelectedImgType[];
  cartProduct: CartProductType;
  handleColorSelect: (value: SelectedImgType) => void;
}

const SetColor: React.FC<SetColorProps> = ({
  images,
  cartProduct,
  handleColorSelect,
}) => {
  return <div>SetColor</div>;
};

export default SetColor;
