import { shadowStiglitz } from "../utils/helpers";
import ThemeSelector from "./ThemeSelector";

function Navbar() {
  return (
    <header className={`navbar max-w-full bg-base-300 ${shadowStiglitz}`}>
      <div className="flex-1">
        <p className="ml-2 text-xl font-semibold drop-shadow-sm">Memory Game</p>
      </div>
      <div className="flex-none">
        <ThemeSelector />
      </div>
    </header>
  );
}

export default Navbar;
