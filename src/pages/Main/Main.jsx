import React, {useState} from 'react'
import PaginationButtons from '../../components/PaginationButtons/PaginationButtons'
import { StyledFlex } from '../../constants/styledComp'
import CardsContainer from '../../containers/CardsContainer/CardsContainer'

function Main({game}) {
  const [page, setPage] = useState('1')

  const handlePage = (e)=>{
    console.log(!isNaN(+e.target.innerText))
    console.log(e.target.innerText)
    if (!isNaN(+e.target.innerText) && e.target.innerText !== ''){
      setPage(e.target.innerText)
    } 
  }

  return (
    <StyledFlex flexDir={'column'} gap={'27px'}>
        <CardsContainer page={page} game={game}/>
        <PaginationButtons onClick={handlePage}/>
    </StyledFlex>
  )
}

export default Main