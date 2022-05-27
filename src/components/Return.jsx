import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  margin: 0px 10px;
  padding: 10px 0;
  font-size: 14px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Return = () => {
  return (
    <Link to="/">
      <Button>Return to homepage</Button>
    </Link>
  );
};

export default Return;
