import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import CadastroDados from "views/CadastroDados.jsx";
import CadastroJogador from "views/CadastroJogador";
import Notifications from "views/Notifications.jsx";

const dashboardRoutes = [
  {
    path: "/telaInicial",
    name: "Página Inicial",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/agendamento",
    name: "Agendamento",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },

  {
    path: "/cadastroDados",
    name: "Cadastro Dados",
    icon: "pe-7s-science",
    component: CadastroDados,
    layout: "/admin"
  },
  {
    path: "/cadastroJogador",
    name: "Cadastro Jogador",
    icon: "pe-7s-map-marker",
    component: CadastroJogador,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/admin"
  },
];

export default dashboardRoutes;
