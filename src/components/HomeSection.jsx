import React, { useState } from "react";

const HomeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mediaItems = [
    { type: "image", src: "/Main Function hall.jpeg" },
    { type: "image", src: "/Dining hall.jpeg" },
    { type: "image", src: "/SampadaFrontView.png" },
    { type: "video", src: "/Mini function hall Video.mp4" },
  ];

  return (
    <div
      id="home"
      className="relative min-h-[350px] bg-blue-200 flex flex-col items-start"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-purple-100 font-bold font-sans absolute top-1 left-10 z-10">
        Welcome to Sampada Function Hall!
      </h1>
      <div className="w-full min-h-[280px] mt-0 flex flex-row">
        {/* Image/video container */}
        <div className="w-full h-full ">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className={`w-full h-full absolute top-0 left-0 transition duration-500 ease-in-out ${
                index !== currentIndex ? "opacity-0" : "opacity-100"
              }`}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
