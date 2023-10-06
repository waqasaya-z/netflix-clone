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
        <h2> Adventure </h2>
        <CardList />
        <h2> Comedy </h2>
        <CardList />
        <h2> Fantasy </h2>
        <CardList />
      </div>
    </main>
  );
}
