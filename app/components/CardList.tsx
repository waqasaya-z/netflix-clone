import Image from "next/image";
import Link from "next/link";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface YouTubeVideoItem {
  id: {
    videoId: string
  },
  snippet: {
    thumbnails: {
      high: {
        url: string;
      };
    };
    title: string;
  };
}

interface Props {
  title: string
  params: YouTubeVideoItem[]
}

const CardList = async ({title, params} : Props ) => {
 
  // const slideLeft = () => {
  //   var slider = document.getElementById('slider')
  //   slider!.scrollLeft = slider!.scrollLeft - 500
  // }

  // const slideRight = () => {
  //   var slider = document.getElementById('slider')
  //   slider!.scrollLeft = slider!.scrollLeft + 500
  // }

  return (
    <>
    <h1 className="font font-bold text-xl ml-4 p-4"> {title} </h1>
    <div className="flex items-center ">
      <MdChevronLeft size={40} />
      <div
        id="slider"
        className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scroll scrollbar-hide"
      >
        {params.map((item,index) => ( 
          
          <Link href={`/video/${item.id.videoId}`}
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
          </Link>
        ))}
      </div>
      <MdChevronRight size={40} />
    </div>
    </>
  );
};

export default CardList;
