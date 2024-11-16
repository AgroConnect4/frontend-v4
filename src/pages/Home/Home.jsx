import React, { useState, useEffect, useRef } from "react";
import { FaCog, FaShoppingCart, FaTools, FaRegListAlt, FaTractor, FaAppleAlt } from "react-icons/fa";
import style from "./Home.module.css";
import Gerais from "../../components/Publicacoes/Gerais";
import Maquinas from "../../components/Publicacoes/Maquinas";
import Produtos from "../../components/Publicacoes/Produtos";
import Servicos from "../../components/Publicacoes/Servicos";
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

      <div className={style["main-content"]}>
        <div className={style["content-row"]}>
          {/* Seção de Publicações */}
          <div className={style["publicacoes-container"]}>
            <center><h1>Feed de Publicações</h1></center>
            {categoria === 'gerais' && <Gerais />}
            {categoria === 'maquinas' && <Maquinas />}
            {categoria === 'produtos' && <Produtos />}
            {categoria === 'servicos' && <Servicos />}
          </div>

          {/* Seção de Conexões e Eventos (lado direito) */}
          <div className={style["side-container"]}>
            {/* Seção de Conexões */}
            <div className={style["section-connections"]}>
              <h3>Minhas Conexões</h3>
              <div className={style["connection-item"]}>
                <img src="https://avatars.mds.yandex.net/i?id=91f1e6793b6043b2458b1b2824037d00020ea7a093ad6327-10931123-images-thumbs&n=13" alt="João Silva" className={style["connection-img"]} />
                <h4>João Silva</h4>
                
              </div>
              <div className={style["connection-item"]}>
                <img src="https://avatars.mds.yandex.net/i?id=91f1e6793b6043b2458b1b2824037d00020ea7a093ad6327-10931123-images-thumbs&n=13" alt="Ana Souza" className={style["connection-img"]} />
                <h4>Ana Souza</h4>
                
              </div>
              <div className={style["connection-item"]}>
                <img src="https://avatars.mds.yandex.net/i?id=91f1e6793b6043b2458b1b2824037d00020ea7a093ad6327-10931123-images-thumbs&n=13" alt="Carlos Mendes" className={style["connection-img"]} />
                <h4>Carlos Mendes</h4>
             
              </div>
              <hr />
            </div>

            {/* Seção de Eventos */}
            <div className={style["section-events"]}>
              <h3>Próximos Eventos</h3>
              <div className={style["event-item"]}>
                <img src="https://i.pinimg.com/originals/ce/ef/d4/ceefd4edaf32cd654759df91cddebad0.png" alt="Fórum Agro Tech" className={style["event-img"]} />
                <h4>Fórum Agro Tech</h4>
                <p>25/11/2024 - Inovação no agronegócio</p>
                <button className={style["btn-participar"]}>Participar</button>
              </div>
              <div className={style["event-item"]}>
                <img src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/09/1200/675/agriculture-student.jpg?ve=1&tl=1" alt="Feira do Agronegócio" className={style["event-img"]} />
                <h4>Feira do Agronegócio</h4>
                <p>30/11/2024 - Negócios e oportunidades</p>
                <button className={style["btn-participar"]}>Participar</button>
              </div>
              <div className={style["event-item"]}>
                <img src="https://avatars.mds.yandex.net/i?id=f4b7d5d62d80defee281480dc0d7aa64617b9872d02f2cab-10555004-images-thumbs&n=13" alt="Workshop de Inovação" className={style["event-img"]} />
                <h4>Workshop de Inovação</h4>
                <p>05/12/2024 - Técnicas avançadas para o campo</p>
                <button className={style["btn-participar"]}>Participar</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BotaoTopo />
      <Footer />
    </div>
  );
};

export default Home;
