import React from "react";
import { popular } from "../data";
import Product from "./Product";
import { Container } from "./styles/Products.styles";

const Products = () => {
  return (
    <Container>
      {popular.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
