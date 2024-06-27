import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./layout/NavBar/NavBar";
import Header from "./layout/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import ServicesComponent from "./components/Services/ServicesComponent";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/aboutme" Component={AboutMe} />
        <Route path="/servicescomponent" Component={ServicesComponent} />
        <Route path="/portfolio" Component={Portfolio} />
        <Route path="/testimonials" Component={Testimonials} />
      </Routes>
      <NavBar />
    </>
  );
}

export default App;
