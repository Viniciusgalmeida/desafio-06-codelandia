//import styled from "styled-components";
import { Banner, BlackSquare, Capa, ImgLokiDesktop, ImgLokiMobile, SubTitle, Title } from "./Style";
import banner_loki_mobile from "../Imagens/banner_loki_mobile.png";
import banner_loki_desktop from '../Imagens/banner_loki_desktop.png'
import capa from '../Imagens/capa.png'
import TimeRateYear from "../TimeRateYear/Index";

export default function BannerLoki() {
  return (
    <Banner>
      <ImgLokiDesktop src={banner_loki_desktop}/>
      <ImgLokiMobile src={banner_loki_mobile} />
      <BlackSquare />
      <SubTitle>está disponível agora</SubTitle>
      <Title>LOKI</Title>
      <Capa src={capa} />
      <TimeRateYear />
    </Banner>
  );
}
