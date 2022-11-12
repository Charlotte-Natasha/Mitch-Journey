
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      
        <NavBar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
      
    </div>
  );
}

export default App;
