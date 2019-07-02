import Dashboard from "views/Dashboard.jsx";
import Aventura from "views/Aventura.jsx";
import TableList from "views/TableList.jsx";

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


];

export default dashboardRoutes;
