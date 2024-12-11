import React, { useState, useEffect } from "react";
import { FaCog, FaShoppingCart, FaTools, FaRegListAlt, FaTractor, FaAppleAlt } from "react-icons/fa";
import style from "./Home.module.css";
import Publicacao from "../../components/Publicacoes/Publicacao"; // Import the Publicacao component
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

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        /*const token = sessionStorage.getItem('token');
        if (!token) {
          console.error("No token found. User not logged in?");
          return;
        }*/
        const response = await fetch('https://localhost:7297/api/Posts', {
          headers: {
            //'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          const errorMessage = errorData.message || `Erro ao buscar publicações (${response.status})`;
          throw new Error(errorMessage);
        }

        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error);
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

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
          {/* Category navigation (Optional - remove if not needed) */}
          <div className={style["category-icon"]}>
            <FaRegListAlt size={24} color="#28a745" /><span>Gerais</span>
          </div>
          {/* Add other category icons here if needed */}
        </div>
      )}


      <div className={style["main-content"]}>
        <div className={style["content-row"]}>
          <div className={style["publicacoes-container"]}>
            <center><h1>Feed de Publicações</h1></center>
            {loading && <p>Carregando...</p>}
            {error && <p>Erro: {error.message}</p>}
            {!loading && !error && posts.map(post => (
              <Publicacao key={post.id} post={post} />
            ))}
          </div>
          {/* Side Container (Keep this part if you want to show connections and events) */}
          <div className={style["side-container"]}>
              {/* Seção de Conexões */}
            <div className={style["section-connections"]}>
              <h3>Minhas Conexões</h3>
              <div className={style["connection-item"]}>
                <img src="https://avatars.mds.yandex.net/i?id=91f1e6793b6043b2458b1b2824037d00020ea7a093ad6327-10931123-images-thumbs&n=13" alt="João Silva" className={style["connection-img"]} />
                <h4>João Silva</h4>
              </div>
              {/* Add other connection items here */}
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
              {/* Add other event items here */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;