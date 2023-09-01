import {createBrowserRouter} from "react-router-dom";
import {Profile} from "./components/Profile/Profile.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Profile/>,
  },
]);