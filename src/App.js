import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Explore from "./components/explore/Explore";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/explore" element={<Explore></Explore>}></Route>
        <Route path="*" element={<>test</>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
