import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: (
            <div className="w-full h-full text-main-white-3 bg-main-gray-4">
              HOME
            </div>
          ),
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
