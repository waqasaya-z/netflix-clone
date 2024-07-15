'use client'
import { getInfo } from "@/hooks/getInfo";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaPlay } from 'react-icons/fa'

interface Props {
  title: string;
  image: StaticImageData;
  id: string
}

const Banner = ({ title, image, id }: Props) => {
  const router = useRouter()
  const data = getInfo({videoId: id})
  console.log(data)
  const handleClick = () => {
    router.push(`/video/${id}`)
}

  return (
    <div
      className="bg-center h-full bg-cover bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${image.src})` }}
    >
     <div className="left-Wrapper flex flex-col justify-center absolute top-56 ml-10 w-3/5">
      <h1 className=" text-6xl mb-2 font-bold text-white text-stroke drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] "> {title} </h1>
      <p className=" text-md mb-9 text-white"> On a doomed luxury liner, first-class passenger Rose finds a love to last a lifetime when she falls for penniless artist Jack just as disaster strikes. </p>
      <button onClick={handleClick} className="btn btn-square w-32" >
        <FaPlay /> Play
      </button>
      </div>   
    </div>
  );
};

export default Banner;
