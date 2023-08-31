import ThemeSelector from "./ThemeSelector";

function Navbar() {
  return (
    <header className="nav">
      <div>
        <p className="nav-title">Memory Game</p>
      </div>
      <div>
        <ThemeSelector />
      </div>
    </header>
  );
}

export default Navbar;
