import Image from "next/image";

const CardList = async () => {

  const res = await import("@/data.json");
  const data = res.items

  return (
    <div className="overflow-x-auto overflow-y-scroll flex flex-row">
         {data.map((item,index) => (
      <div key={index} className="card bg-base-100 shadow-xl hover:scale-125 mt-32">
        <figure>
          <Image src={item.snippet.thumbnails.default.url} alt={item.snippet.title} height={500} width={500} />
        </figure>
      </div>
    ))}
    </div>
  );
};

export default CardList;
