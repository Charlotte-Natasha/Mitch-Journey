import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Work from "./components/Work";
import About from "./components/About";
import Footer from "./components/Footer";
import More from "./components/More";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Work/>
      <About/>
      <More/>
      <Footer/>
    </div>
  );
}

export default App;
