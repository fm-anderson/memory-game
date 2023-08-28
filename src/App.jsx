import { RouterProvider, createBrowserRouter } from "react-router-dom";
import useDebugRender from "tilg";
import HomePage from "./routes/HomePage";
import ErrorPage from "./routes/ErrorPage";
import { atom } from "jotai";

export const flippedAtom = atom({ flippedOne: "", flippedTwo: "" });

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  // useDebugRender();

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
