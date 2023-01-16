import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import { StyledFlex } from "../../constants/styledComp";

function CardsContainer({ page, game }) {
  const [games, setGames] = useState([]);
  const [isLoad, setIsload] = useState(false);
  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=dea7d81dcde74e9a856058111223df6b&search=${game}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setGames(data.results);
        setIsload(true);
      });
  }, [page, game]);

  return (
    <StyledFlex flexWrap="wrap" gap={"27px"}>
      {isLoad ? (
        games.map(({ name, released, rating, background_image, id }) => {
          return (
            <Card
              name={name}
              data={released}
              rating={rating}
              img={background_image}
              key={id}
              id={id}
            />
          );
        })
      ) : (
        <Loader />
      )}
    </StyledFlex>
  );
}

export default CardsContainer;
