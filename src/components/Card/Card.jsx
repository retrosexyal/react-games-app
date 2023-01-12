import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledCard = styled.div`
display: flex;
width: 30%;
flex-direction: column;
justify-content: center;
align-items: center;
`

function Card({name, data, reting, img, id}) {
  return (
    <StyledCard>
        <h3>{name}</h3>
        <p>{data}</p>
        <p>{reting}</p>
        <Link to={`/game/:${id}`} style={{width: '80%',}}>
            <img style={{objectFit: 'cover', width: '100%'}} src={img} alt={`${name} picture`} />
        </Link>
    </StyledCard>
  )
}

export default Card