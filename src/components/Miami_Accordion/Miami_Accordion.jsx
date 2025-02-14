import React from "react";
import Card from "../shared/Card";

const Miami_Accordion = ({ heading }) => {
  const cardsContents = [
    {
      image:
        "https://i.postimg.cc/mDTDQBjJ/9871d9a2e51e7e9867322468793a06c4.jpg",
      title: "Miami-Dade County",
    },
    {
      image:
        "https://i.postimg.cc/L5b8KfSF/c57c4edb57529e95dc2063c7607f5abd.jpg",
      title: "Brickell",
    },
    {
      image:
        "https://i.postimg.cc/TYKPjkjd/5b851a23832f2584c84835ac04871baf.jpg",
      title: "Downtown Miami",
    },
    {
      image:
        "https://i.postimg.cc/vZ9HkcSC/86bff8720bf382ce4d195ed7b645f39b.jpg",
      title: "Wynwood",
    },
    {
      image:
        "https://i.postimg.cc/ZRYbWjKh/77605711e25676a7bb698ce01245c35c.jpg",
      title: "Edgewater",
    },
    {
      image:
        "https://i.postimg.cc/V67YnMd0/1aac5fdf41dd54392cd94caee5743339.jpg",
      title: "Doral Central",
    },
    {
      image:
        "https://i.postimg.cc/bwXqxqNg/afc8181e65730330d6b0150fb672367f.jpg",
      title: "Mid Beach",
    },
    {
      image:
        "https://i.postimg.cc/x1KngBX2/6cdcff93323828b31e2d68c73e7b20b1.jpg",
      title: "South Beach",
    },
    {
      image:
        "https://i.postimg.cc/wBgHrFNs/dfe9f6875e9b0b36eb6cc70e4068a2c3.jpg",
      title: "Miami",
    },
    {
      image:
        "https://i.postimg.cc/vBmyYB3Y/9bbe84f80b5931f1e8c762090a18e684.jpg",
      title: "Founders Park",
    },
    {
      image:
        "https://i.postimg.cc/TwH6p64r/52d712cd2c1b67dd7deec88f8c0b9aaf.jpg",
      title: "Doral Central Park",
    },
  ];
  return (
    <div>
      <div className="collapse bg-white text-black">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-2xl font-bold border-[#D6D6D6] border-b pb-5 pl-0">
          {heading}
        </div>
        <div className="collapse-content pt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {cardsContents.map((card, index) => (
              <Card key={index} image={card.image} title={card.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Miami_Accordion;
