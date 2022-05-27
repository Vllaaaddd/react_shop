import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 100px 200px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 0.5;
`;

const Image = styled.img`
  width: 300px;
  height: auto;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const About = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="img/me.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>Владислав Тромпак</Title>
          <Desc>
            Навчаюсь в національному університеті "Львівська політехніка",
            студент 2-го курсу, факультет комп'ютерних наук, група КН-210.
            Проживаю в Закарпатській області, місто Ужгород.
          </Desc>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default About;
