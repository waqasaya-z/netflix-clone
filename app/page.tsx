import Banner from "./components/Banner";
import titanic from "@/assets/titanic.jpg";
import CardList from "./components/CardList";

export default function Home() {

  return (
    <main className="h-screen">
      <div className="h-4/5">
        <Banner title="Titanic" image={titanic} />
      </div>
      <div>
        <CardList />
      </div>
    </main>
  );
}
