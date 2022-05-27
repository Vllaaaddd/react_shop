import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import {
  Center,
  Container,
  Input,
  Language,
  Left,
  Logo,
  MenuItem,
  Right,
  SearchContainer,
  Wrapper,
} from "./styles/Navbar.styles";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              VladiSlave
            </Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link to="about" style={{ textDecoration: "none", color: "black" }}>
              About
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="registration"
              style={{ textDecoration: "none", color: "black" }}
            >
              Registration
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="login" style={{ textDecoration: "none", color: "black" }}>
              Login
            </Link>
          </MenuItem>

          <MenuItem>
            <Badge color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
