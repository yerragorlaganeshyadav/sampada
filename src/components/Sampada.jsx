import React, { useState, useEffect, useRef } from "react";
import backgroundImage from "/SampadaFrontView.png";
import mainFunctionHall from "/MainFunctionHall.jpeg";
import image1 from "/Image1.png";
import image2 from "/Image2.png";
import miniFunctionHall from "/MiniFunctionHall.jpeg";
import birthDayImage from "/BirthDayImage.jpg";
import corporateParties from "/CorporateParties.jpg";
import musicBandImage from "/MusicBandImage.jpg";
import weddingImage from "/WeddingImage.jpg";
import { FaWhatsapp, FaPhone, FaInstagram } from "react-icons/fa";

function Sampada() {
  const testimonials = [
    {
      text: `"We were blown away by the elegance of Sampada. The staff was incredibly helpful, and the food was absolutely delicious. Our wedding day was truly magical, thanks to the perfect venue!"`,
      author: "Ganesh Yadav",
    },
    {
      text: `"From the moment we walked in, we knew Sampada was the perfect place for our daughter's birthday party. The decorations were stunning, and the kids had a blast. We highly recommend this venue!"`,
      author: "Sunil Kumar Yadav",
    },
    {
      text: `"Planning a corporate event can be stressful, but the team at Sampada made it effortless. They handled everything from catering to decor, and the event was a huge success. We'll definitely be back!"`,
      author: "Kiran Kumar Yadav",
    },
    {
      text: `"Our family reunion at Sampada was unforgettable. The spacious hall, beautiful outdoor area, and excellent service made it a truly special occasion. We couldn't have asked for a better venue."`,
      author: "Chow Reddy",
    },
    {
      text: `"Sampada exceeded our expectations in every way. The staff was attentive, the food was exceptional, and the ambiance was perfect. We're so grateful we chose this venue for our wedding reception."`,
      author: "Pavan Kumar Tharigopula",
    },
    {
      text: `"We were looking for a venue that could seamlessly blend our traditional Indian wedding customs with a modern aesthetic. Sampada was the perfect fit."`,
      author: "Dhanush",
    },
  ];

  const galleryImages = [
    { src: mainFunctionHall },
    { src: image1 },
    { src: backgroundImage },
    { src: image2 },
    { src: miniFunctionHall },
    { src: birthDayImage },
    { src: corporateParties },
    { src: musicBandImage },
    { src: weddingImage },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [scrollIndex, setScrollIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(testimonialInterval);
  }, [testimonials.length]);

  useEffect(() => {
    const galleryInterval = setInterval(() => {
      setScrollIndex((prev) => (prev + 1) % (galleryImages.length - 2));
    }, 10000);
    return () => clearInterval(galleryInterval);
  }, [galleryImages.length]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: scrollIndex * 320, // image width + margin
        behavior: "smooth",
      });
    }
  }, [scrollIndex]);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat w-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 backdrop-blur-sm bg-white/30 z-0"></div>

      <div className="relative mt-10 z-10 mx-1 sm:mx-2 md:mx-4 lg:mx-6 xl:mx-8 bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 pb-0">
          <div className="font-extrabold text-2xl md:text-5xl lg:text-4xl text-pink-950 font-cursive mb-4">
            Sampada
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img
            className="w-full h-40 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover"
            src={mainFunctionHall}
            alt="Main Function Hall"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-6 md:mx-14 py-12">
          {/* About Us */}
          <div>
            <div className="text-2xl font-serif font-bold mb-4 text-gray-800">
              About us
            </div>
            <div className="text-gray-600 mb-4 leading-relaxed">
              Sampada Function Hall, nestled in the serene Bellary Road,
              Anatapur, offers a perfect blend of elegance and functionality to
              make your special occasions truly memorable.
            </div>
            <a
              href="https://maps.app.goo.gl/8SzL8LXqEkjDZAGY7?g_st=aw"
              className="text-blue-600 hover:text-red-700 font-medium transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here for directions
            </a>
          </div>

          {/* Services */}
          <div className="ml:0 xl:ml-28">
            <div className="text-2xl font-serif font-bold mb-4 text-gray-800">
              Services
            </div>
            <ul className="space-y-2 text-gray-600 list-disc list-inside">
              <li>Weddings</li>
              <li>Birthdays</li>
              <li>Office events</li>
              <li>And many more...</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="ml-0 xl:ml-10">
            <div className="text-2xl font-serif font-bold mb-4 text-gray-800">
              Contact us
            </div>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <a
                  href="https://wa.me/+918309109557"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 bg-green-500 rounded-full hover:bg-green-700 transition"
                >
                  <FaWhatsapp className="text-white text-2xl" />
                </a>
                <span className="text-gray-700 font-medium">
                  - Chat with us
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <a
                  href="https://www.instagram.com/sampada_events?igsh=MXA3ejdqa2Z0Z2pmYw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 bg-pink-500 rounded-full hover:bg-pink-700 transition"
                >
                  <FaInstagram className="text-white text-2xl" />
                </a>
                <span className="text-gray-700 font-medium">
                  - Follow us on Instagram
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <a
                  href="tel:+918309109557"
                  className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full hover:bg-blue-700 transition"
                >
                  <FaPhone className="text-white text-2xl" />
                </a>
                <span className="text-gray-700 font-medium">- Call us</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 px-6">
          {/* Gallery Section */}
          <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
            <h2 className="text-2xl font-serif font-bold mb-4 text-gray-800">
              Gallery Section
            </h2>

            <div
              ref={carouselRef}
              className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory
    [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
            >
              {galleryImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img.src}
                  alt={`Gallery ${idx + 1}`}
                  className="w-[300px] h-[200px] object-cover rounded-lg mr-4 flex-shrink-0 snap-start"
                />
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {Array.from({ length: galleryImages.length - 2 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full ${
                    i === scrollIndex ? "bg-pink-600" : "bg-gray-400"
                  }`}
                ></span>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-black text-center uppercase underline mb-4">
              Reviews
            </h2>
            <div className="text-gray-700 space-y-2">
              <p>{testimonials[currentTestimonialIndex].text}</p>
              <strong>- {testimonials[currentTestimonialIndex].author}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sampada;
