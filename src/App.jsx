import { RouterProvider, createBrowserRouter } from "react-router-dom";
import useDebugRender from "tilg";
import HomePage, { homeLoader } from "./routes/HomePage";
import ErrorPage from "./routes/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    loader: homeLoader,
  },
]);

function App() {
  useDebugRender();

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
