import clock from "../Imagens/clock.svg";
import YellowStar from "../Imagens/YellowStar.svg";
import GreyStar from "../Imagens/GreyStar.svg"

import { Clock, Constelation, ContainerTRY, MiddleText, Star, TimeText } from "./Style";

export default function TimeRateYear() {
  return (
    <ContainerTRY>
      <TimeText>
        <Clock src={clock} />

        <MiddleText>51min</MiddleText>
      </TimeText>
      <Constelation>
        <Star src={YellowStar} />
        <Star src={YellowStar} />
        <Star src={YellowStar} />
        <Star src={YellowStar} />
        <Star src={GreyStar} />
      </Constelation>
      <MiddleText>2021</MiddleText>
    </ContainerTRY>
  );
}
