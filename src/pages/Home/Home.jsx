// pages/Home.jsx
import React, { useState, useEffect, useRef } from "react";
import { FaCog, FaShoppingCart, FaTools, FaRegListAlt, FaTractor, FaAppleAlt } from "react-icons/fa";
import style from "./Home.module.css";
import Gerais from "../../components/Publicacoes/Gerais";
import Maquinas from "../../components/Publicacoes/Maquinas";
import Produtos from "../../components/Publicacoes/Produtos";
import Servicos from "../../components/Publicacoes/Servicos";
import Sobre from "../../components/Sobre/Sobre"; 
import BotaoTopo from "../../components/BotaoTopo/BotaoTopo";
import Footer from "../../components/Footer/Footer";
import Slider from "react-slick";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Home = ({ publicacoesRef }) => {
  const [categoria, setCategoria] = useState('gerais');
  const [showNav, setShowNav] = useState(false); 
  const sobreRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowNav(true); 
    } else {
      setShowNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={style["home-container"]}>
      <div className={style["banner-container"]}>
        <Slider {...sliderSettings}>
          <div><img src="/img/Sua Rede Social Agro Favorita!.png" alt="Banner 1" className={style["banner-image"]} /></div>
          <div><img src="/img/Design sem nome (11).png" alt="Banner 2" className={style["banner-image"]} /></div>
          <div><img src="/img/Design sem nome (12).png" alt="Banner 3" className={style["banner-image"]} /></div>
        </Slider>
      </div>

      {showNav && (
        <div className={style["nav-categories"]}>
          <div className={style["category-icon"]} onClick={() => setCategoria('maquinas')}>
            <FaTractor size={24} color="#28a745" /><span>Máquinas</span>
          </div>
          <div className={style["category-icon"]} onClick={() => setCategoria('produtos')}>
            <FaAppleAlt size={24} color="#28a745" /><span>Produtos</span>
          </div>
          <div className={style["category-icon"]} onClick={() => setCategoria('servicos')}>
            <FaTools size={24} color="#28a745" /><span>Serviços</span>
          </div>
          <div className={style["category-icon"]} onClick={() => setCategoria('gerais')}>
            <FaRegListAlt size={24} color="#28a745" /><span>Gerais</span>
          </div>
        </div>
      )}

      <div ref={publicacoesRef}>
        <center><h1>Publicações {categoria}</h1></center>
        {categoria === 'gerais' && <Gerais />}
        {categoria === 'maquinas' && <Maquinas />}
        {categoria === 'produtos' && <Produtos />}
        {categoria === 'servicos' && <Servicos />}
      </div>

     
      
      <BotaoTopo />
      <Footer />
    </div>
  );
};

export default Home;
