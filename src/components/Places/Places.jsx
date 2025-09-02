import React from "react";
import PlaceCard from "./PlaceCard";

// ✅ Fixed imports with consistent lowercase, no spaces
import Img1 from "../../assets/places/new-york.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/washington.jpeg";
import Img4 from "../../assets/places/sydney.webp";
import Img5 from "../../assets/places/shanghai.jpeg";
import Img6 from "../../assets/places/beijing.jpeg";

const PlacesData = [
  {
    img: Img1,
    title: "Time Square",
    location: "USA",
    description:
      "Times Square – the vibrant heart of New York City, famous for its dazzling lights, bustling energy, and iconic attractions.",
    price: 443,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 267,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Washington",
    location: "US",
    description:
      "Washington, D.C., the capital of the United States, is a historic city known for its iconic landmarks, including the White House, U.S. Capitol, Lincoln Memorial, and Smithsonian museums, offering a perfect blend of politics, culture, and rich heritage.",
    price: 500,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Sydney",
    location: "Australia",
    description:
      "Sydney, Australia, is a vibrant city famous for its iconic Sydney Opera House, Harbour Bridge, and stunning beaches, offering a perfect mix of urban excitement, cultural experiences, and breathtaking coastal beauty.",
    price: 2000,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Shanghai",
    location: "China",
    description:
      "Shanghai – a dynamic blend of tradition and modernity, where historic temples meet futuristic skyscrapers.",
    price: 1000,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Beijing",
    location: "China",
    description:
      "Beijing – the cultural and political heart of China, home to ancient wonders and modern innovation.",
    price: 1500,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
      <section data-aos="fade-up" className="container ">
        <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Best Places to Visit
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PlacesData.map((item, index) => (
            <PlaceCard
              handleOrderPopup={handleOrderPopup}
              key={index}
              {...item}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Places;
