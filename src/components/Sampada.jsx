import React from "react";
import backgroundImage from "/SampadaFrontView.png";
import mainFunctionHall from "/MainFunctionHall.jpeg";
import { FaWhatsapp, FaPhone, FaInstagram } from "react-icons/fa";

function Sampada() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat w-full"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay with blur */}
      <div className="absolute inset-0 backdrop-blur-sm bg-white/30 z-0"></div>

      {/* Foreground content */}
      <div className="relative mt-10 z-10 mx-1 sm:mx-2 md:mx-4 lg:mx-6 xl:mx-8 bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden">
        {/* Heading with padding */}
        <div className="p-6 pb-0">
          <div className="font-extrabold text-2xl md:text-5xl lg:text-4xl text-pink-950 font-cursive mb-4">
            Sampada
          </div>
        </div>

        {/* Full-width image without side spacing */}
        <div className="flex justify-center items-center">
          {/* <h1 className="absolute z-10 items-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-green-500 font-bold font-sans mt-10 ">
            Sampada Function hall
          </h1> */}
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
              make your special occasions truly memorable. Whether it's a grand
              wedding, a corporate event, or a family gathering, Sampada
              provides the ideal setting to celebrate life's precious moments.
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
              {/* WhatsApp */}
              <li className="flex items-center space-x-3">
                <a
                  href="https://wa.me/+918309109557"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 bg-green-500 rounded-full hover:bg-green-700 transition"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="text-white text-2xl" />
                </a>
                <span className="text-gray-700 font-medium">
                  - Chat with us
                </span>
              </li>
              {/* Instagram */}
              <li className="flex items-center space-x-3">
                <a
                  href="https://www.instagram.com/sampada_events?igsh=MXA3ejdqa2Z0Z2pmYw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 bg-pink-500 rounded-full hover:bg-pink-700 transition"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-white text-2xl" />
                </a>
                <span className="text-gray-700 font-medium">
                  - Follow us on Instagram
                </span>
              </li>
              {/* Phone */}
              <li className="flex items-center space-x-3">
                <a
                  href="tel:+918309109557"
                  className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full hover:bg-blue-700 transition"
                  aria-label="Phone"
                >
                  <FaPhone className="text-white text-2xl" />
                </a>
                <span className="text-gray-700 font-medium">- Call us</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sampada;
