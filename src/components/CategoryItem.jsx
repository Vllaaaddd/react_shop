import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Image,
  Info,
  Title,
} from "./styles/CategoryItem.styles";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to="products">
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
