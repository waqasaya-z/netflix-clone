'use client'
import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const CardList = async () => {
 const res = await import("@/data.json");
  const data = res.items;


  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider!.scrollLeft = slider!.scrollLeft - 500
  }

  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider!.scrollLeft = slider!.scrollLeft + 500
  }

  return (
    <div className="flex items-center ">
      <MdChevronLeft onClick={slideLeft} size={40} />
      <div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scroll scrollbar-hide">
        {data.map((item, index) => (
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
      <MdChevronRight onClick={slideRight} size={40} />
    </div>
  );
};

export default CardList;
