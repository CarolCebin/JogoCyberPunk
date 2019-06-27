
import CadastroDados from "views/CadastroDados.jsx";
import CadastroJogador from "views/CadastroJogador.jsx";

const dashboardRoutes = [

  {
    path: "/cadastroDados",
    name: "Cadastro Dados",
    icon: "pe-7s-science",
    component: CadastroDados,
    layout: "/admin/cadastro"
  },
  {
    path: "/cadastroJogador",
    name: "Cadastro Jogador",
    icon: "pe-7s-map-marker",
    component: CadastroJogador,
    layout: "/admin/cadastro"
  }
];

export default dashboardRoutes;
