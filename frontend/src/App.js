import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./global/Navbar";
import Footer from "./global/Footer";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
