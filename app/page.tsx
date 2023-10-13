import Banner from "./components/Banner";
import titanic from "@/assets/titanic.jpg";
import CardList from "./components/CardList";
import { getPopularVideos, getVideos } from "@/hooks/getVideos";
import Footer from "./components/Footer";

export default async function Home() {

 const comedy =  await getVideos({searchParams: 'comedy'})
 const adventure =  await getVideos({searchParams: 'adventure'})
 const fantasy =  await getVideos({searchParams: 'fantasy'})
 const popular = await getPopularVideos()
  
  return (
    <main className="h-screen"  >
      <div className="h-3/5 ">
        <Banner title="Titanic" image={titanic} />
      </div>
      <div className="h-5/5">
        <CardList title="Popular" params={popular} />
        <CardList title="Adventure" params={adventure} />
        <CardList title="Comedy" params={comedy} />
        <CardList title="Fantasy" params={fantasy} />
      </div>
      <Footer />
    </main>
  );
}
