import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Work from "./components/Work";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Work/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
