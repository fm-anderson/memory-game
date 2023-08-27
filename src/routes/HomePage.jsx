import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Game from "../components/Game";

function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-between text-center">
      <Navbar />

      <main className="grid max-w-full lg:max-w-[80%]">
        <Game />
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
