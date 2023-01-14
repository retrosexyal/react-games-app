import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";

function Header({onChange}) {

  return (
    <>
      <Link to="/">Main</Link>
      <Input onChange={onChange} />
    </>
  );
}

export default Header;
