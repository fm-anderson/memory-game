import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAtom } from "jotai";
import { themeAtom } from "./utils/atoms";
import HomePage from "./routes/HomePage";
import ErrorPage from "./routes/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  const [theme] = useAtom(themeAtom);

  return (
    <div data-theme={theme}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
