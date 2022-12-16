import styled from "styled-components";
import { device } from "../Devices";

export const ContainerPrincipal = styled.div`
  width: 100vw;
  height: 250px;
  background-color: #19191f;
  position: absolute;
  top: 550px;
  border-radius: 20px 20px 0px 0px;

  @media ${device.laptop} {
    background-color: rgba(0, 0, 0, 0);
    width: 60vw;
    height: 267px;
    top: 344px;
    left: 487px;
    border-radius: 0px 0px 0px 0px;
  }
`;

export const DoisBotoes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const BotaoTrailer = styled.button`
  width: 150px;
  height: 35px;
  font-family: "Open Sans";
  font-size: 14px;
  color: #ffffff;
  border-radius: 3px;
  font-weight: 700;
  margin: 32px 5px 24px 5px;
  background-color: #00000000;
  border: 1px solid #ffffff;

  @media ${device.laptop} {
    position: absolute;
    width: 115px;
    height: 52px;
    top: 184px;
    left: 258px;

    font-weight: 700;
    font-size: 16px;
  }
`;

export const BotaoAssistir = styled.button`
  width: 150px;
  height: 35px;
  font-family: "Open Sans";
  font-size: 14px;
  color: #ffffff;
  border-radius: 3px;
  font-weight: 700;
  margin: 32px 5px 24px 5px;
  border: none;
  background-color: #0072d2;

  @media ${device.laptop} {
    padding: 15px 27px;
    gap: 10px;

    position: absolute;
    width: 184px;
    height: 52px;
    left: 58px;
    top: 184px;
    font-size: 16px;
  }
`;

export const Divide = styled.hr`
  margin: 0 25px 24px 25px;
  border: 0.5px solid rgba(196, 196, 196, 0.08);

  @media ${device.laptop} {
    display: none;
  }
`;
export const TextoPrincipal = styled.p`
  font-family: "B612";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;

  margin: 0 24px 34px 24px;
  color: #ffffff;

  //Configuração tela desktop
  @media ${device.laptop} {
    position: absolute;
    width: 722px;
    height: 96px;
    left: 34px;
    top: 7px;

    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
  }
`;
