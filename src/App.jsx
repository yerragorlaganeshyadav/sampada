import React from "react";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import EventSection from "./components/EventSection";
import Footer from "./components/Footer";
import PhotosSection from "./components/PhotosSection";
import Sampada from "./components/Sampada";

function App() {
  return (
    <div className="flex flex-col">
      {/* <Header />
      <HomeSection />
      <AboutSection />
      <PhotosSection />
      <EventSection />
      <Footer /> */}
      <Sampada />
    </div>
  );
}

export default App;
