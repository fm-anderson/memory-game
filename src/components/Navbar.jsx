import ThemeSelector from "./ThemeSelector";

function Navbar() {
  return (
    <header className="navbar bg-base-300 max-w-full lg:mt-2 lg:max-w-[80%] lg:rounded-lg lg:shadow-md">
      <div className="flex-1">
        <p className="ml-2 text-xl font-semibold">Presidents - Memory Game</p>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
        <ThemeSelector />
      </div>
    </header>
  );
}

export default Navbar;
