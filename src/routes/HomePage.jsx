import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export async function homeLoader() {
  console.log("homeLoader");
  return null;
}

function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-between text-center">
      <Navbar />

      <main>
        <h1 className="text-3xl font-bold underline">React Starter</h1>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
