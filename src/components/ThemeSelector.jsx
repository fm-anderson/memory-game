import { useAtom } from "jotai";
import { themeAtom } from "../utils/atoms";

function ThemeSelector() {
  const [theme, setTheme] = useAtom(themeAtom);

  const handleThemeChange = (e) => {
    e.target.checked ? setTheme("dark") : setTheme("light");
  };

  return (
    <label className="swap">
      <input
        type="checkbox"
        onChange={handleThemeChange}
        checked={theme === "dark"}
      />
      <svg
        className="swap-on h-7 w-7 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M10.741 17h-1.991c0-.17-.016-.338-.035-.506l1.703-1.548c.197.653.323 1.332.323 2.054zm-.04 6.659c.19.216.465.341.753.341h1.093c.288 0 .562-.125.752-.341l1.451-1.659h-5.5l1.451 1.659zm3.799-3.659h-5c-.276 0-.5.224-.5.5s.224.5.5.5h5c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm0-2h-5c-.276 0-.5.224-.5.5s.224.5.5.5h5c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm1.707-8.315c-1.104 2.28-2.948 4.483-2.949 7.315h1.992c0-3.169 3.479-5.906 3.726-9.832l-2.769 2.517zm6.793-8.201l-20.654 18.75-1.346-1.5 6.333-5.728c-1.062-1.873-2.333-3.843-2.333-6.272 0-4.343 3.498-6.734 6.996-6.734 2.408 0 4.798 1.146 6.064 3.267l3.598-3.267 1.342 1.484zm-14.147 10.142l7.676-6.969c-.833-1.742-2.682-2.657-4.533-2.657-2.483 0-4.996 1.626-4.996 4.734 0 1.713.907 3.246 1.853 4.892z" />
      </svg>
      <svg
        className="swap-off h-7 w-7 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M19 6.734c0 4.164-3.75 6.98-3.75 10.266h-1.992c.001-2.079.996-3.826 1.968-5.513.913-1.585 1.774-3.083 1.774-4.753 0-3.108-2.518-4.734-5.004-4.734-2.482 0-4.996 1.626-4.996 4.734 0 1.67.861 3.168 1.774 4.753.972 1.687 1.966 3.434 1.967 5.513h-1.991c0-3.286-3.75-6.103-3.75-10.266 0-4.343 3.498-6.734 6.996-6.734 3.502 0 7.004 2.394 7.004 6.734zm-4 11.766c0 .276-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5zm0 2c0 .276-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5zm-1.701 3.159c-.19.216-.465.341-.752.341h-1.094c-.287 0-.562-.125-.752-.341l-1.451-1.659h5.5l-1.451 1.659zm-3.629-16.347l-1.188-.153c.259-1.995 1.5-3.473 3.518-3.847l.219 1.177c-1.947.361-2.433 1.924-2.549 2.823z" />
      </svg>
    </label>
  );
}

export default ThemeSelector;