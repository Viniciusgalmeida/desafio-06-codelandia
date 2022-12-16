import styled from "styled-components";
import { device } from "../Devices";

export const Banner = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  background-color: rgb(18, 18, 18);
`;

export const ImgLokiMobile = styled.img`
  width: 100vw;
  max-width: 430px;
  height: auto;

  @media ${device.laptop} {
    display: none;
  }
`;

export const ImgLokiDesktop = styled.img`
  // Elimina ImgLokiDesktop da versão mobile
  @media screen and (max-width: 1023px) {
    display: none;
  }

  
  width: 100%;
  max-width: 1440px;
  height: auto;
  max-height: 720px;
  
`;

export const BlackSquare = styled.div`
  background-color: rgb(0, 0, 0, 70%);
  width: 100vw;
  height: 700px;
  position: absolute;
  top: 0;

  @media ${device.laptop} {
    height: 800px;
    max-height: 720px;
  }
`;

export const SubTitle = styled.h2`
  position: absolute;
  top: 60px;
  font-family: "B612";
  font-size: 18px;
  color: #ffffff;
  text-transform: uppercase;

  @media ${device.laptop} {
    font-size: 20px;
  }
`;

export const Title = styled.h1`
  position: absolute;
  top: 114px;
  font-family: "B612";
  font-size: 64px;
  color: #ffffff;

  @media ${device.laptop} {
    font-size: 96px;
  }
`;

export const Capa = styled.img`
  //Elimina Capa da versão mobile
  @media screen and (max-width: 1023px) {
    display: none;
  }

  position: absolute;
  width: 184px;
  height: auto;
  left: 230px;
  top: 342px;
`;
