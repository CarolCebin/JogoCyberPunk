import Dashboard from "views/Dashboard.jsx";
import Aventura from "views/Aventura.jsx";
import Dungeon from "views/Dungeon.jsx";

const dashboardRoutes = [
  {
    path: "/telaInicial",
    name: "Página Inicial",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/aventura",
    name: "Aventura",
    icon: "pe-7s-user",
    component: Aventura,
    layout: "/admin"
  },
  {
    path: "/dungeon",
    name: "Dungeon",
    icon: "pe-7s-note2",
    component: Dungeon,
    layout: "/admin/aventura"
  },

];

export default dashboardRoutes;
