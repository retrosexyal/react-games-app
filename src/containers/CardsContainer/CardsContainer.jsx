import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import {url} from '../../constants/constants'
import styled from 'styled-components';

const StyledCardsContainer = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`


function CardsContainer() {
    const [games, setGames]= useState([]);
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>setGames(data.results))
    },[])

  return (
    <StyledCardsContainer>
        {games.map(({name, released, rating, background_image, id})=>{
            return (<Card name={name} data={released} rating={rating} img={background_image} key={id} id={id}/>)
        })}
    </StyledCardsContainer>
  )
}

export default CardsContainer