"use client";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface YouTubeVideoItem {
  snippet: {
    thumbnails: {
      high: {
        url: string;
      };
    };
    title: string;
  };
}

const CardList = async () => {
  // const res = await import("@/data.json");
  // const data = res.items;

  const api = process.env.YOUTUBE_API;

  const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=disney%20trailer&key=${api}`);
  const data = await response.json();
  const items: YouTubeVideoItem[] = data.items

  // const slideLeft = () => {
  //   var slider = document.getElementById('slider')
  //   slider!.scrollLeft = slider!.scrollLeft - 500
  // }

  // const slideRight = () => {
  //   var slider = document.getElementById('slider')
  //   slider!.scrollLeft = slider!.scrollLeft + 500
  // }

  return (
    <div className="flex items-center ">
      <MdChevronLeft size={40} />
      <div
        id="slider"
        className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scroll scrollbar-hide"
      >
        {items.map((item,index) => (
          <div
            key={index}
            className="card inline-block p-2 bg-base-100 hover:scale-125 ease-in-out duration-300 cursor-pointer"
          >
            <figure>
              <Image
                className=""
                src={item.snippet.thumbnails.high.url}
                alt={item.snippet.title}
                height={300}
                width={300}
              />
            </figure>
          </div>
        ))}
      </div>
      <MdChevronRight size={40} />
    </div>
  );
};

export default CardList;
