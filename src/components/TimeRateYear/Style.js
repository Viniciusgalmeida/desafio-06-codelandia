import styled from "styled-components";
import { device } from "../Devices";

export const ContainerTRY = styled.div`
  width: 100%;
  max-width: 450px;
  position: absolute;
  top: 490px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 0 25px;

  @media ${device.laptop} {
    width: 760px;
    left: 484px;
    max-width: none;
  }
`;

export const TimeText = styled.div`
  width: 75px;
  display: flex;
  justify-content: space-between;

  @media ${device.laptop} {
    width: 110px;
  }
`;

export const Clock = styled.img`
  @media ${device.laptop} {
    width: 25px;
    height: 25px;
  }
`;

export const MiddleText = styled.p`
  font-family: "B612";
  font-size: 16px;
  color: #ffffff;

  @media ${device.laptop} {
    font-weight: 700;
    font-size: 24px;
  }
`;

export const Constelation = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: top;

  @media ${device.laptop} {
    width: 220px;
  }
`;

export const Star = styled.img`
  width: 17px;
  height: auto;

  @media ${device.laptop} {
    width: 33px;
    height: 31px;
  }
`;
