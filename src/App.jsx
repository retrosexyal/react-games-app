import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./containers/Header/Header";
import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound/NotFound";
import LinkedCard from "./components/LinkedCard/LinkedCard";

function App() {
  return (
  <>
    <Header/>
    <Routes>
      <Route path="/" element={<Main/>}  />
      <Route path="/game/:id" element={<LinkedCard />}  />
      <Route path="*" element={<NotFound />}  />
    </Routes>
  </>
  );
}

export default App;
