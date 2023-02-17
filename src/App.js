import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
    }
  ])
  return (
    <div>
      <RouterProvider router= {router}></RouterProvider>
    </div>
  );
}

export default App;
