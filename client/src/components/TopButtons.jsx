import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Seattle",
    },
    {
      id: 2,
      title: "Los Angeles",
    },
    {
      id: 3,
      title: "New York",
    },
    {
      id: 4,
      title: "Houston",
    },
    {
      id: 5,
      title: "Atlanta",
    },
  ];

  return (
    <div className="flex items-center justify-between my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-xl font-medium cursor-pointer transition ease-out hover:scale-125"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
