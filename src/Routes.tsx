import { JSXElementConstructor } from "react";
import { useRoutes, Navigate } from "react-router-dom";

import { DashboardLayout } from "./layouts/DashboardLayout";

import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Listagem } from "./pages/Agremiacao/Listagem";
import { ListagemAtletas } from "./pages/Atletas/listagem-atletas";
import { CadastroAgremiacao } from "./pages/Agremiacao/CadastroAgremiacao";
import { CadastroAtletas } from "./pages/Atletas/cadastro-atletas";


import { useAuthContext } from "./hooks/useAuthProvider";
import { ModalFilterAgremiacao } from "./components/Modal/Agremiacao/modalFilterAgremiacao";

// interface ProtectedRoutePageProps {
//   Page: JSXElementConstructor<any>;
// }

// const ProtectedRoutePage = ({ Page }: ProtectedRoutePageProps) => {
//   const { isAuthenticated } = useAuthContext();
//   console.log('is auth', isAuthenticated)

//   return !isAuthenticated ? <Login /> : <Page />;
// }

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      // element: <ProtectedRoutePage Page={DashboardLayout} />,
      element: <DashboardLayout />,
      children: [
        // change this after
        { element: <Navigate to="/agremiacao" />, index: true },
        { path: "/", element: <Home /> },
        { path: "/agremiacao", element: <Listagem /> },
        { path: "/agremiacao/cadastro", element: <CadastroAgremiacao /> },
        { path: "/agremiacao/editar/:id", element: <CadastroAgremiacao /> },
        { path: "/atletas", element: <ListagemAtletas /> },
        { path: "/atletas/cadastro", element: <CadastroAtletas /> }
      ],
    },
    { path: "/login", element: <Login /> },
    // insert page not found after
    { path: "*", element: <Login /> },

  ]);

  return routes;
}