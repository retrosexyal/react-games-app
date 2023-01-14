import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledFlex, StyledImg } from "../../constants/styledComp";

const StyledCard = styled(StyledFlex)`
  width: 20%;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 27px;
  height: 50vh;
  overflow: hidden;
  justify-content: space-between;
  background-color: #c7fab9;
`;

const StyledLink = styled(Link)`
width: 100%;
border:1px solid black;
height: 70%;
`


function Card({ name, data, rating, img, id }) {
  return (
    <StyledCard>
      <h3>{name}</h3>
      <p>{data}</p>
      <p>{rating}</p>
      <StyledLink to={`/game/:${id}`} >
        <StyledImg
          src={img}
          alt={`${name} picture`}
        />
      </StyledLink>
    </StyledCard>
  );
}

export default Card;
