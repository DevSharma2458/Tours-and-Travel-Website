import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/New York.jpg";
import Img3 from "../../assets/places/Japan.jpeg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in India",
    description:
      `Taj Mahal Tourism: A Journey into Timeless Beauty
The Taj Mahal, one of the Seven Wonders of the World, is a mesmerizing symbol of love and architectural brilliance. Located in Agra, India, this UNESCO World Heritage Site attracts millions of visitors each year, offering an unforgettable experience of history, culture, and breathtaking craftsmanship.

Built by Mughal Emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal, the Taj Mahal stands as a masterpiece of white marble architecture, adorned with intricate carvings and stunning Mughal gardens. Whether witnessing the golden hues of sunrise or the magical glow of moonlight, every moment at the Taj Mahal is a sight to behold.

Tourists can explore the main mausoleum, the reflecting pools, the grand entrance gates, and the surrounding gardens, each telling a story of love and legacy. Nearby attractions like Agra Fort, Mehtab Bagh, and Fatehpur Sikri further enhance the historical charm of this journey.

A visit to the Taj Mahal is more than just sightseeing—it’s an experience that stays with you forever. Plan your trip today and witness the magic of India's most iconic monument!`,
    author: "Avnish Mishra",
    date: "April 22, 2022",
  },
  {
    id: 1,
    image: Img2,
    title: "Top places to visit in US",
    description:
      `Times Square Tourism: The Heart of New York City
Times Square, famously known as "The Crossroads of the World," is one of the most vibrant and iconic destinations in New York City. Located in the heart of Manhattan, this dazzling hub is famous for its giant digital billboards, Broadway theaters, shopping, dining, and non-stop energy that captivates millions of visitors every year.

From the world-renowned Broadway shows to the electrifying New Year's Eve Ball Drop, Times Square is a place where entertainment never stops. Whether you're strolling through the neon-lit streets, exploring Madame Tussauds, or enjoying street performances, every corner offers an unforgettable experience.

Visitors can also explore nearby attractions like Rockefeller Center, Bryant Park, the Museum of Modern Art (MoMA), and Fifth Avenue for a complete NYC adventure. Whether day or night, Times Square remains a symbol of New York’s fast-paced culture and endless excitement.

Experience the magic of Times Square—where the city truly never sleeps!`,
    author: "Harshal Mahajan",
    date: "April 22, 2022",
  },
  {
    id: 1,
    image: Img3,
    title: "Top places to visit in Japan",
    description:
      `Japan Tourism: A Land of Tradition and Innovation
Japan, an enchanting blend of ancient traditions and futuristic marvels, is a dream destination for travelers worldwide. From the historic temples of Kyoto to the neon-lit streets of Tokyo, Japan offers a unique cultural experience that caters to every kind of explorer.

Visitors can marvel at iconic landmarks like Mount Fuji, Fushimi Inari Shrine, the bustling Shibuya Crossing, and the serene Arashiyama Bamboo Forest. Experience the delicate beauty of cherry blossoms in spring, the vibrant festivals throughout the year, and the rich heritage preserved in castles, shrines, and tea ceremonies.

Japan is also a paradise for food lovers, offering everything from sushi and ramen to unique delicacies like wagyu beef and matcha desserts. Adventure seekers can explore high-tech cities, ride the famous Shinkansen (bullet train), or relax in traditional onsen (hot springs).

Whether you’re drawn to the elegance of geisha culture, the thrill of anime and gaming districts, or the peaceful countryside, Japan promises an unforgettable journey blending the past, present, and future.

Discover Japan—where every moment is a masterpiece!`,
    author: "Kashish Paliwal",
    date: "April 22, 2022",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
