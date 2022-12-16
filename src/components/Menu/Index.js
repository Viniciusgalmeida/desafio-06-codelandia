import {
  BotaoAssistir,
  BotaoTrailer,
  ContainerPrincipal,
  Divide,
  DoisBotoes,
  TextoPrincipal,
} from "./Style";

export default function Menu() {
  return (
    <ContainerPrincipal>
      <DoisBotoes>
        <BotaoAssistir>ASSISTIR AGORA</BotaoAssistir>
        <BotaoTrailer>TRAILER</BotaoTrailer>
      </DoisBotoes>
      <Divide />
      <TextoPrincipal>
        Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston)
        retoma seu papel como o Deus do Mal em uma nova série que ocorre após os
        eventos de “Vingadores: Endgame”.
      </TextoPrincipal>
    </ContainerPrincipal>
  );
}
