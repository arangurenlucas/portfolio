import "./App.css";
import React, { useState, useEffect } from "react";
import Cover from "./Components/cover/Cover";
import Navbar from "./Components/navbar/Navbar";
import About from "./Components/about/About";
import Slider from "./Components/slider/Slider";
import Info from "./Components/info/Info";
import Footer from "./Components/footer/Footer";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Cover />
      <About />
      <Slider />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
