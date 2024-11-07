import React, { useState, useEffect, useRef } from "react";
import { FaCog, FaShoppingCart, FaTools, FaRegListAlt, FaTractor, FaAppleAlt } from "react-icons/fa"; // Ícones do react-icons
import style from "./Home.module.css";
import Gerais from "../../components/Publicacoes/Gerais";
import Maquinas from "../../components/Publicacoes/Maquinas";
import Produtos from "../../components/Publicacoes/Produtos";
import Servicos from "../../components/Publicacoes/Servicos";
import Sobre from "../../components/Sobre/Sobre"; 
import BotaoTopo from "../../components/BotaoTopo/BotaoTopo";
import Avaform from "../../components/Avaliacaouser/Avaform";
import Avalist from "../../components/Avaliacaouser/Avalist";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Footer from "../../components/Footer/Footer";
import Slider from "react-slick"; // Certifique-se de que o Slick Slider está instalado

// Configurações do slider
const sliderSettings = {
  dots: true, // Ativa os pontos de navegação
  infinite: true, // Loop infinito
  speed: 500, // Velocidade da transição
  slidesToShow: 1, // Exibe um slide por vez
  slidesToScroll: 1, // Move um slide por vez
  autoplay: true, // Ativa o autoplay
  autoplaySpeed: 3000, // Intervalo de 3 segundos entre os slides
};

const Home = ({ publicacoesRef }) => {
  const [categoria, setCategoria] = useState('gerais');
  const [feedbacks, setFeedbacks] = useState([]);
  const [showNav, setShowNav] = useState(false); // Estado para controlar a visibilidade da navegação
  const sobreRef = useRef(null);
  const center = [-21.61065329792685, -48.36115475704479];

  // Função para detectar o scroll da página
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowNav(true); // Exibe a barra de navegação quando rolar 200px para baixo
    } else {
      setShowNav(false); // Esconde a barra de navegação quando voltar para o topo
    }
  };

  // UseEffect para adicionar o listener de scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Limpeza do evento de scroll ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToSobre = () => {
    sobreRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const storedFeedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    setFeedbacks(storedFeedbacks);
  }, []);

  const addFeedback = (newFeedback) => {
    const updatedFeedbacks = [...feedbacks, newFeedback];
    setFeedbacks(updatedFeedbacks);
    localStorage.setItem('feedbacks', JSON.stringify(updatedFeedbacks));
  };

  return (
    <>
      <div className={style["home-container"]}>
        {/* Slider com banner menor */}
        <div className={style["banner-container"]}>
          <Slider {...sliderSettings}>
            <div>
              <img src="/img/Sua Rede Social Agro Favorita!.png" alt="Banner 1" className={style["banner-image"]} />
            </div>
            <div>
              <img src="/img/Design sem nome (11).png" alt="Banner 2" className={style["banner-image"]} />
            </div>
            <div>
              <img src="/img/Design sem nome (12).png" alt="Banner 3" className={style["banner-image"]} />
            </div>
          </Slider>
        </div>

        {/* Barra de navegação que aparece quando rolar a página */}
        {showNav && (
          <div className={style["nav-categories"]}>
            <div className={style["category-icon"]} onClick={() => setCategoria('maquinas')}>
              <FaTractor size={24} color="#28a745" /> {/* Ícone de Trator em Máquinas */}
              <span>Máquinas</span>
            </div>
            <div className={style["category-icon"]} onClick={() => setCategoria('produtos')}>
              <FaAppleAlt size={24} color="#28a745" /> {/* Ícone de Frutas em Produtos */}
              <span>Produtos</span>
            </div>
            <div className={style["category-icon"]} onClick={() => setCategoria('servicos')}>
              <FaTools size={24} color="#28a745" /> {/* Ícone para Serviços */}
              <span>Serviços</span>
            </div>
            <div className={style["category-icon"]} onClick={() => setCategoria('gerais')}>
              <FaRegListAlt size={24} color="#28a745" /> {/* Ícone para Gerais */}
              <span>Gerais</span>
            </div>
          </div>
        )}

        {/* Conteúdo das publicações */}
        <div ref={publicacoesRef}>
          <center><h1>Publicações {categoria}</h1></center>
          {categoria === 'gerais' && <Gerais />}
          {categoria === 'maquinas' && <Maquinas />}
          {categoria === 'produtos' && <Produtos />}
          {categoria === 'servicos' && <Servicos />}
        </div>

        {/* Restante do conteúdo */}
        <div ref={sobreRef}>
          <Sobre />
        </div>
        
        {/* Avaliação e Feedback */}
        <div>
          <div className="container">
            <h1 className="my-4">Avaliação e Feedbacks</h1>
            <Avaform addFeedback={addFeedback} />
            <Avalist feedbacks={feedbacks} />
          </div>
        </div>

        {/* Localização */}
        <center><h1>Localização</h1></center>
        <MapContainer center={center} zoom={13} style={{ height: '400px' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={center}>
            <Popup>
              Estou aqui!
            </Popup>
          </Marker>
        </MapContainer>

        {/* Botão para voltar ao topo */}
        <BotaoTopo />
        
        {/* Rodapé */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
