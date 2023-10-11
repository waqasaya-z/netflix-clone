import Banner from "./components/Banner";
import titanic from "@/assets/titanic.jpg";
import CardList from "./components/CardList";
import { getPopularVideos, getVideos } from "@/hooks/getVideos";

export default async function Home() {

 const comedy =  await getVideos({searchParams: 'comedy'})
 const adventure =  await getVideos({searchParams: 'adventure'})
 const fantasy =  await getVideos({searchParams: 'fantasy'})
 const popular = await getPopularVideos()

  return (
    <main className="h-screen">
      <div className="h-4/5">
        <Banner title="Titanic" image={titanic} />
      </div>
      <div>
        <CardList title="Popular" params={popular} />
        <CardList title="Adventure" params={adventure} />
        <CardList title="Comedy" params={comedy} />
        <CardList title="Fantasy" params={fantasy} />
      </div>
    </main>
  );
}
