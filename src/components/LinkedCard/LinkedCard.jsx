import React, { useEffect, useState } from "react";
import { url } from "../../constants/constants";
import Card from "../Card/Card";
import { useParams } from "react-router-dom";
import { StyledFlex, StyledImg } from "../../constants/styledComp";

function LinkedCard() {
  const idGame = useParams().id.slice(1);
  /* const idUrl = window.location.href.split(":")[
    window.location.href.split(":").length - 1
  ]; */
  const [game, setGames] = useState([]);
  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${idGame}?key=dea7d81dcde74e9a856058111223df6b`)
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);
  const {name, description_raw, background_image_additional} = game;
  return (
  <StyledFlex flexDir={'column'} gap={'27px'} width={'100vw'} style={{maxHeight: '80vh'}}>
    <div>{name}</div>
    <div>{description_raw}</div>
    <div style={{maxWidth: '50%'}}>
      <StyledImg src={background_image_additional} alt={background_image_additional} />
    </div>
  </StyledFlex>
  );
}

export default LinkedCard;
