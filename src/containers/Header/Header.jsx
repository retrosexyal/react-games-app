import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import Loader from "../../components/Loader/Loader";
import { StyledFlex } from "../../constants/styledComp";


function Header({onChange, onBlur, onClick}) {

  return (
    <>
    <StyledFlex gap={'50%'} padding={'27px 0px'}>
      <Link to="/" onClick={onClick}>Main</Link>
      <Input onChange={onChange} onBlur={onBlur}/>
    </StyledFlex>
    </>
  );
}

export default Header;
