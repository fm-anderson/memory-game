function Navbar() {
  return (
    <header className="flex w-full justify-between px-2">
      <div className="flex gap-2">
        <img src="/favicon.svg" alt="logo" className="w-5" />
        <a className="text-xl normal-case">Vite + React Starter Template</a>
      </div>
      <div>
        <button>BUTTON</button>
      </div>
    </header>
  );
}

export default Navbar;
