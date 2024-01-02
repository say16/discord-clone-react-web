import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MePage from "./pages/MePage";
import DirectMessagesLayout from "./layouts/DirectMessagesLayout";
import ChannelsLayout from "./layouts/ChannelsLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "store",
          element: <DirectMessagesLayout />,
          children: [
            {
              path: "",
              element: <h1>Store</h1>,
            },
          ],
        },
        {
          path: "channels",
          element: <DirectMessagesLayout />,
          children: [
            {
              path: "@me",
              element: <MePage />,
            },
          ],
        },
        {
          path: "channels/:id",
          element: <ChannelsLayout />,
          children: [
            {
              path: "",
              element: <h1>CH</h1>,
            },
          ],
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
