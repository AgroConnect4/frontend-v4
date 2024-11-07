import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
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

// Importa as dependências do slick-carousel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = ({ publicacoesRef }) => {
  const sobreRef = useRef(null);
  const center = [-21.61065329792685, -48.36115475704479];

  const handleScrollToSobre = () => {
    sobreRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const [categoria, setCategoria] = useState('gerais');
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const storedFeedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    setFeedbacks(storedFeedbacks);
  }, []);

  const addFeedback = (newFeedback) => {
    const updatedFeedbacks = [...feedbacks, newFeedback];
    setFeedbacks(updatedFeedbacks);
    localStorage.setItem('feedbacks', JSON.stringify(updatedFeedbacks));
  };

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

  return (
    <>
      <div className={style["home-container"]}>
        {/* Slider */}
        <div className={style["banner-container"]}>
          <Slider {...sliderSettings}>
            <div>
              <img src="/img/Sua Rede Social Agro Favorita! (1).png" alt="Banner 1" className={style["banner-image"]} />
              <div className={style["banner-text"]}>
              
              </div>
            </div>
            <div>
              <img src="/img/Design sem nome (11).png" alt="Banner 2" className={style["banner-image"]} />
              <div className={style["banner-text"]}>
                
              </div>
            </div>
            
            <div>
              <img src="/img/Design sem nome (12).png" alt="Banner 1" className={style["banner-image"]} />
              <div className={style["banner-text"]}>
              
              </div>
            </div>
            {/* Adicione mais slides conforme necessário */}
          </Slider>
          
        </div>
        
        {/* Cards de categoria */}
        <div className={style.cards}>
          <center><h5 className={style["divulgacao-titulo"]}>Divulgações</h5></center>
          <div className={style["card-container"]}>
            <div className={style["card"]} onClick={() => setCategoria('maquinas')}>
              <img src="/img/maquinas-icone.jpg" alt="Card 3" />
              <h3 className={style["categorias-titulo"]}>Máquinas</h3>
            </div>
            <div className={style["card"]} onClick={() => setCategoria('produtos')}>
              <img src="https://avatars.mds.yandex.net/i?id=addc79487aa87371d1915b3b1e137c6d2a99fb68-9677438-images-thumbs&n=13" alt="Card 1" />
              <h3 className={style["categorias-titulo"]}>Produtos</h3>
            </div>
            <div className={style["card"]} onClick={() => setCategoria('servicos')}>
              <img src="https://content.assets.pressassociation.io/2017/11/09154445/0ab261b1-5654-4473-9d3c-49f667b74860.jpg" alt="Card 2" />
              <h3 className={style["categorias-titulo"]}>Serviços</h3>
            </div>
            <div className={style["card"]} onClick={() => setCategoria('gerais')}>
              <img src="https://lista.md/public/uploads/articles/268/tinymce_images_d7375d19bc2d1642270320055dc50807.jpg?1649411551" alt="Card 4" />
              <h3 className={style["categorias-titulo"]}>Gerais</h3>
            </div>
          </div>
        </div>

        {/* Exibe a categoria de publicações */}
        <div ref={publicacoesRef}>
          <center><h1>Publicações {categoria}</h1></center>
        </div>
        {categoria === 'gerais' && <Gerais />}
        {categoria === 'maquinas' && <Maquinas />}
        {categoria === 'produtos' && <Produtos />}
        {categoria === 'servicos' && <Servicos />}

        {/* Sobre */}
        <div ref={sobreRef}>
          <Sobre />
        </div>
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
    </>
  );
};

export default Home;
