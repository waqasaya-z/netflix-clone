import Banner from "./components/Banner";
import titanic from "@/assets/titanic.jpg" 

export default function Home() {
  return (
    <main className="h-screen border border-black">
      <div className="h-4/5 border border-red-900">
      <Banner title="Titanic" image={titanic} />
      </div>
        

      {/* <Card /> */}
    </main>
  )
}
