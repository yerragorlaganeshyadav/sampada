import React, { useState, useEffect } from "react";

const PhotosSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mediaItems = [
    { type: "image", src: "/Main Function hall.jpeg" },
    { type: "image", src: "/Dining hall.jpeg" },
    { type: "image", src: "/SampadaFrontView.png" },
    { type: "image", src: "/Entrance.jpeg" },
    { type: "image", src: "/Mini Function hall.jpeg" },
    { type: "video", src: "/Mini function hall Video.mp4" },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = (currentIndex + 1) % mediaItems.length;
      setCurrentIndex(newIndex);
    }, 10000); // Update every 10 seconds

    return () => clearInterval(intervalId);
  }, [mediaItems]);
  const handlePeviousClick = () => {
    setCurrentIndex(
      (previousIndex) =>
        (previousIndex - 1 + mediaItems.length) % mediaItems.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((previousIndex) => (previousIndex + 1) % mediaItems.length);
  };

  return (
    <div
      id="photos"
      className="relative min-h-[700px] bg-white flex flex-col items-center"
    >
      <div className="w-full min-h-[280px] flex flex-row">
        {/* Left arrow button */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-transparent hover:bg-gray-200 rounded-full p-2"
          onClick={handlePeviousClick}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="#000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

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
                <video controls className="w-full h-full">
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </div>

        {/* Right arrow button */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-transparent hover:bg-gray-200 rounded-full p-2 "
          onClick={handleNextClick}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transform rotate-180"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="#000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PhotosSection;
