import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import Movie from "./Movie";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  //console.log(movies);
  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <div className="text-white ">
        <h2 className="font-bold md:text-xl p-4">{title}</h2>
        <div className="relative flex group items-center">
          <MdChevronLeft
            onClick={slideLeft}
            size={40}
            className="bg-white text-black font-bold cursor-pointer z-10 rounded-full hidden group-hover:block opacity-40 hover:opacity-100"
          />
          <div
            id={"slider" + rowID}
            className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
          >
            {movies.map((item, id) => (
              <Movie key={id} item={item} />
            ))}
          </div>
          <MdChevronRight
            onClick={slideRight}
            size={40}
            className="bg-white text-black font-bold cursor-pointer z-10 rounded-full hidden group-hover:block opacity-40 hover:opacity-100"
          />
        </div>
      </div>
    </>
  );
};

export default Row;
