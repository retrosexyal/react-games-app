import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./containers/Header/Header";
import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound/NotFound";
import LinkedCard from "./components/LinkedCard/LinkedCard";
import { useState } from "react";

function App() {
  const [game, setGame] = useState('');
  const handleChange = (e)=>{
    setGame(e.target.value)
  }

  const handleBlur = (e) =>{
    e.target.value = '';
  }

  const handleClick = () =>{
    setGame('')
  }

  return (
  <>
    <Header onChange={handleChange} onBlur={handleBlur} onClick={handleClick}/>
    <Routes>
      <Route path="/" element={<Main game={game}/>}  />
      <Route path="/game/:id" element={<LinkedCard />}  />
      <Route path="*" element={<NotFound />}  />
    </Routes>
  </>
  );
}

export default App;
