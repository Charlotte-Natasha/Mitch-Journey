import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Work from "./components/Work";
import About from "./components/About";
import Footer from "./components/Footer";
import More from "./components/More";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Work/>
      <About/>
      <More/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
