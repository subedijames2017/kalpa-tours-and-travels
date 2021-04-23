import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

const Vaichel = React.lazy(() => import("./views/vaichel/Vaichel"));
const TravellRoute = React.lazy(() =>
  import("./views/travell-route/TravellRoute")
);
const HotelResturant = React.lazy(() =>
  import("./views/hotel-resturant/HotelResturant")
);

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/route/list", name: "Route List", component: TravellRoute },
  { path: "/route/add", name: "Add Route", component: TravellRoute },
  { path: "/route/import", name: "Import Routes", component: TravellRoute },
  { path: "/vaichel/list", name: "Vaichels List", component: Vaichel },
  { path: "/vaichel/add", name: "Addd Vaichel", component: Vaichel },
  { path: "/vaichel/import", name: "Import Vaichels", component: Vaichel },
  { path: "/hotel/list", name: "Hotel List", component: HotelResturant },
  { path: "/hotel/add", name: "Add Hotel", component: HotelResturant },
  { path: "/hotel/import", name: "Import Hotels", component: HotelResturant },
];

export default routes;
