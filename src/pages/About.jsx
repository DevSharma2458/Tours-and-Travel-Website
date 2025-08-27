import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
          We believe that every journey should be unforgettable. Whether you are seeking adventure, relaxation, or cultural exploration, we are here to craft the perfect travel experience for you.

With a passion for discovering hidden gems and curating seamless travel plans, we offer personalized tours, expert recommendations, and hassle-free booking. From breathtaking landscapes to vibrant cityscapes, we help you explore the world with ease and excitement.

Join us on a journey beyond destinations—where every trip becomes a story worth telling.


          </p>
          <br />
          <p>
          Start your adventure today!
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
