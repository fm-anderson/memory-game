import ThemeSelector from "./ThemeSelector";

function Navbar() {
  return (
    <header className="navbar bg-base-300 max-w-full lg:mt-2 lg:max-w-[90%] lg:rounded-lg lg:shadow-md">
      <div className="flex-1">
        <p className="ml-2 text-xl font-semibold">Memory Game</p>
      </div>
      <div className="flex-none">
        <ThemeSelector />
      </div>
    </header>
  );
}

export default Navbar;
