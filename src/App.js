import { RouterProvider } from "react-router-dom";
import { router } from "./util/routes/router";
import "./App.css";
import "aos/dist/aos.css";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
