import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { logPageView } from './GoogleAnalytics/analytics';

import NavBar from "./components/NavBar/NavBar";
import Perfil from "./pages/Perfil/Perfil";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import PostCompleto from "./pages/PostCompleto/PostCompleto";
import CriarPubli from "./pages/CriarPubli/CriarPubli";
import ProtectedRoute from '../src/Firebase/ProtectedRoute';
import EditarPubli from "./pages/EditarPubli/EditarPubli";
import DashBoard from "./pages/DashBoard/DashBoard";
import Blog from "./pages/Blog/Blog";
import EditarPerfil from "./pages/EditarPerfil/EditarPerfil";
import Eventos from "./pages/Eventos/Eventos"; // Importe o componente Eventos
import CriarEvento from "./pages/CriarEvento/CriarEvento"; // Importe a página de Criar Evento
import Sobre from "./pages/Sobre/Sobre";
import Pesquisar from "./pages/Pesquisar/Pesquisar";


import { AuthProvider } from '../src/Firebase/AuthContext';
import Notificacao from "./pages/Notificacao/Notificacao";

function App() {
  const publicacoesRef = useRef(null);
  const [categoria, setCategoria] = useState('gerais');
  const handlePublicacoesClick = (nomeCategoria = 'gerais') => {
    setCategoria(nomeCategoria);
    publicacoesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    logPageView();
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar onPublicacoesClick={handlePublicacoesClick} />
        <div>
          <Routes>
            <Route path="/" element={<Home publicacoesRef={publicacoesRef} categoria={categoria} />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/postcompleto" element={<PostCompleto />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/criar" element={<CriarPubli />} />
            <Route path="/editar" element={<EditarPubli />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/editarperfil" element={<EditarPerfil />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/criarevento" element={<CriarEvento />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/pesquisar" element={<Pesquisar/>} />
            <Route path="/notificacao" element={<Notificacao />} /> {/* Nova rota para notificações */}
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
