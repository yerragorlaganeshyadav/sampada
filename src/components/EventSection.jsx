import React, { useState, useEffect } from "react";

const EventSection = () => {
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
      text: `"We were looking for a venue that could seamlessly blend our traditional Indian wedding customs with a modern aesthetic. Sampada was the perfect fit. The elegant decor, delicious food, and impeccable service created a truly unforgettable experience for us and our guests."`,
      author: "Dhanush",
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  return (
    <div
      id="services"
      className="relative min-h-[700px] bg-blue-100 flex flex-col items-start"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 ml-5">
        At Sampada, we turn your dream events into unforgettable realities.
      </h1>
      <div className="flex flex-col md:flex-row md:gap-10 mt-5 ml-5 mr-5">
        <div className="md:w-1/2 h-[500px] grid grid-cols-2 gap-4">
          <div className="h-[250px]">
            <img
              src="/WeddingImage.jpg"
              alt="Wedding Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[250px]">
            <img
              src="/BirthDayImage.jpg"
              alt="Birthday Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[250px]">
            <img
              src="/CorporateParties.jpg"
              alt="Corporate Party Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[250px]">
            <img
              src="/MusicBandImage.jpg"
              alt="Music Band Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2 min-h-[500px] grid grid-rows-2 gap-4 mt-3">
          <div>
            <p>
              Sampada Function Hall is the ideal venue for any occasion, from
              weddings and receptions to birthdays, located conveniently near
              Bellary Road Anantapur.
            </p>
            <p>
              Known as the "Land of Pearls," Anantapur offers a captivating
              blend of heritage, culture, and culinary delights, making it a
              unique choice for wedding celebrations. With its majestic palaces,
              historical venues, and scenic surroundings, the area creates a
              magical setting for unforgettable moments. Sampada Function Hall,
              conveniently located near Bellary Road, provides the perfect
              backdrop to make your special day truly memorable.
            </p>
            <p>
              At Sampada Function Hall, we specialize in hosting a wide range of
              events, including
              <em>
                {" "}
                <strong>
                  weddings, birthdays, corporate parties and more
                </strong>{" "}
              </em>
              ensuring each celebration is memorable and flawlessly executed.
            </p>
          </div>
          <div className=" border border-gray-500 mr-3 mb-10 p-4 pb-2 mt-5 items-center flex flex-col gap-4">
            <h1 className="font-sans text-3xl md:text-4xl text-bold text-yellow-950 text-center uppercase underline">
              Testimonials
            </h1>
            <div>
              <p>{testimonials[currentTestimonialIndex].text}</p>
              <strong>- {testimonials[currentTestimonialIndex].author}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSection;
