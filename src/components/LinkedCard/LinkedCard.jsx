import React, { useEffect, useState } from "react";
import { url } from "../../constants/constants";
import Card from "../Card/Card";

function LinkedCard() {
  const idUrl = window.location.href.split(":")[
    window.location.href.split(":").length - 1
  ];
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setGames(data.results));
  }, []);

  return (
  <div>
    {games.map(({name, released, rating, background_image, id})=>{
        if (+id === +idUrl) return (<Card name={name} data={released} rating={rating} img={background_image} key={id} id={id}/>)
        })}
  </div>
  );
}

export default LinkedCard;
