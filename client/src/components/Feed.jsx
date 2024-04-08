import React from "react";
import { FaStar } from "react-icons/fa";

const Feed = ({ image, header, text, stars = 0, author = "" }) => {
  const starsArray = Array(stars).fill(0);
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center h-[80%] w-full gap-3">
      <div className="w-full sm:w-1/2">
        <img
          src={image}
          className="h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] object-cover"
        />
      </div>
      <div className="w-full sm:w-1/2 h-[40%] flex flex-col justify-between items-start">
        <h1 className="text-3xl font-bold">{header}</h1>
        {stars !== 0 && (
          <div className="flex">
            {starsArray.map((s, ind) => {
              return <FaStar key={ind} size={30} color="orange" />;
            })}
          </div>
        )}
        <p className="text-normal font-normal">{text}</p>
        {author !== "" && (
          <p className="text-normal font-normal"> - {author}</p>
        )}
      </div>
    </div>
  );
};

export default Feed;
