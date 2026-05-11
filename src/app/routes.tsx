import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import DistrictAnalysis from "./pages/DistrictAnalysis";
import Overview from "./pages/Overview";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/district/:districtId",
    Component: DistrictAnalysis,
  },
  {
    path: "/overview",
    Component: Overview,
  },
]);
