import React from "react";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="relative min-h-[300px] bg-green-200 flex flex-col items-center"
    >
      <div className="ml-5 mr-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 items-start">
          About Us
        </h1>
        <div className="mt-3 text-base md:text-lg text-gray-600 text-start">
          <p>
            Sampada Function Hall, nestled in the serene Bellary Road, Anatapur,
            offers a perfect blend of elegance and functionality to make your
            special occasions truly memorable. Whether it's a grand wedding, a
            corporate event, or a family gathering, Sampada provides the ideal
            setting to celebrate life's precious moments.
          </p>
          <p>
            Our spacious and well-appointed function halls are designed to
            accommodate a variety of events, from intimate gatherings to
            large-scale celebrations. With state-of-the-art amenities and
            meticulous attention to detail, Sampada ensures a seamless and
            unforgettable experience for you and your guests.
          </p>
          <p>
            Our dedicated team of professionals is committed to exceeding your
            expectations. From expert event planning to delectable catering
            services, we take care of every aspect, allowing you to relax and
            enjoy your special day. Experience the Sampada difference and create
            lasting memories at our luxurious function hall.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
