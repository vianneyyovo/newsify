import HomePage from "./home";
import NavBar from "./NavBar";
import TopHeader from "./TopHeader";


export default function Home() {
  return (
    <div>
      <TopHeader />
      <main className="container mx-auto">
        <NavBar />
      </main>
      <HomePage />




      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>

    </div>
  );
}
