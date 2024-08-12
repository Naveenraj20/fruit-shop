import Home from "./home/Home";
import Fruits from "./fruits/Fruits";
import Vegetables from "./vegetables/Vegetables";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import SearchComponent from "./searchComponent/SearchComponent";


export default function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fruits" element={<Fruits />} />
        <Route path="/Vegetables" element={<Vegetables />} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/SearchComponent" element={<SearchComponent/>}/>
      </Routes>
    </>
  );
}
