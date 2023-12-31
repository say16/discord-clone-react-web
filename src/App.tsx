import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MePage from "./pages/MePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <MePage />,
        },
      ],
    },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
  ]);
  return (
    <div className="w-full h-screen overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
