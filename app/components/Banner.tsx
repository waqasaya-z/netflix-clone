"use client";
import { StaticImageData } from "next/image";
import React from "react";

interface Props {
  title: string;
  image: StaticImageData;
}

const Banner = ({ title, image }: Props) => {
  return (
    <div
      className="bg-center h-full bg-cover bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${image.src})` }}
    >
     <div className="left-Wrapper">
      <h1> {title} </h1>
      <button className="bg-blue-700" onClick={() => console.log("Clicked")}>
        Play
      </button>
      </div>   
    </div>
  );
};

export default Banner;
