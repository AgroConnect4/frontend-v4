import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Perfil.module.css";
import BotaoTopo from "../../components/BotaoTopo/BotaoTopo";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons"; // Importação correta
import { jwtDecode } from "jwt-decode";

const Perfil = () => {
  const navigate = useNavigate();
  const [profilePhoto, setProfilePhoto] = useState(""); // Fallback para imagem de perfil
  const [coverPhoto, setCoverPhoto] = useState("");    // Fallback para imagem de capa
  const [name, setName] = useState("Carregando...");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]); // State para os posts
  const [events, setEvents] = useState([]); // State para os eventos
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
  if (!token) {
    navigate('/login');
    return;
  }

  try {
    const decodedToken = jwtDecode(token);
    const userId = decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];

    if (!userId) {
      setError('Não foi possível recuperar o ID do usuário.');
      return;
    }

    const fetchUserProfile = async () => {

      try {
        const response = await fetch('https://localhost:7297/api/UserProfile/myprofile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Erro ao carregar o perfil: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        
        // Exibindo os dados de perfil no console
        console.log("Dados do Perfil:", data);

        setName(data.name || "Preencha seu nome");
        setDescription(data.description || "Adicione uma descrição");

        // Verificando se as imagens estão em Base64 e atualizando o estado
        setProfilePhoto(data.profilePicture ? data.profilePicture : "/img/default-profile.jpg");
        setCoverPhoto(data.coverPicture ? data.coverPicture : "/img/default-cover.jpg");

        // Buscar posts e eventos criados
        await fetchUserPostsAndEvents(data.userId); // Assume que o userId está no objeto data

      } catch (error) {
        setError(error.message);
        console.error("Error fetching user profile:", error);
      } finally {
        setLoading(false);
      }
    };

    // Função para buscar postagens e eventos criados
    const fetchUserPostsAndEvents = async (userId) => {
      try {

        // Fetching posts
        const postsResponse = await fetch(`https://localhost:7297/api/Posts/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        });
        if (postsResponse.ok) {
          const postsData = await postsResponse.json();
          setPosts(postsData);
        } else {
          throw new Error('Erro ao carregar as postagens');
        }

        // Fetching events
        const eventsResponse = await fetch(`https://localhost:7297/api/Events/${userId}/events/created`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        });
        if (eventsResponse.ok) {
          const eventsData = await eventsResponse.json();
          setEvents(eventsData);
        } else {
          throw new Error('Erro ao carregar os eventos');
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchUserProfile();
  } catch (error) {
    setError('Erro ao decodificar o token.');
    console.error(error);
  }
}, [navigate]);

  const handleEditProfileClick = () => {
    navigate("/editarperfil"); // Redireciona para a página de edição de perfil
  };

  const handleCriarClick = () => {
    navigate("/criar");
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.banner}>
          <label htmlFor="banner-upload" className={style.bannerPhotoLabel}>
            <img className={style.bannerPhoto} src={coverPhoto} alt="Capa do perfil" />
          </label>

          <label htmlFor="profile-upload" className={style.profilePhotoContainer}>
            <img className={style.profilePhoto} src={profilePhoto} alt="Foto de perfil" />
          </label>
        </div>

        <div className={style.profileInfo}>
          <h1 className={style.userName}>{name}</h1>
          {/* Botão de Editar Perfil */}
          <button onClick={handleEditProfileClick} className={style.editButton}>
            <FontAwesomeIcon icon={faEdit} /> Editar perfil
          </button>
        </div>

        <div className={style.aboutSection}>
          <p>{description}</p>
        </div>

        {/* Seção de Postagens */}
        <div className={style.postsSection}>
        <button onClick={handleCriarClick} className={style.criarButton}>
            Criar publicação
          </button>
          <h2>Postagens</h2>
          
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id} className={style.post}>
                <div className={style.postHeader}>
                  <img src={profilePhoto} alt="Foto de perfil" />
                  <div>
                    <h3>{name}</h3>
                    <p>{post.date}</p> {/* Assumindo que post.date contém a data */}
                  </div>
                </div>
                <p>{post.content}</p>
                <img src={post.imageUrl} alt="Imagem do post" />
              </div>
            ))
          ) : (
            <p>Você não tem postagens ainda.</p>
          )}
        </div>

        {/* Seção de Eventos Criados */}
        <div className={style.eventsSection}>
          <h2>Eventos Criados</h2>
          {events.length > 0 ? (
            events.map((event) => (
              <div key={event.id} className={style.event}>
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                <p>{event.date}</p> {/* Assumindo que event.date contém a data */}
                <img src={event.imageUrl} alt="Imagem do evento" />
              </div>
            ))
          ) : (
            <p>Você não criou eventos ainda.</p>
          )}
        </div>
      </div>

      <BotaoTopo />
      <Footer />
    </>
  );
};

export default Perfil;
