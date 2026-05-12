import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import DistrictAnalysis from "./pages/DistrictAnalysis";
import Overview from "./pages/Overview";

const basename = import.meta.env.PROD
  ? (import.meta.env.VITE_BASE_PATH?.replace(/\/$/, '') ?? '/seongnam_data.github.io')
  : '/';

export const router = createBrowserRouter(
  [
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
  ],
  { basename }
);