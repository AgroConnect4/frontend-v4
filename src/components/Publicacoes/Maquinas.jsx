import React, { useState } from "react";
import style from "./Publicacao.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from 'react-router-dom';

const Maquinas = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const initialPostState = {
    isExpanded: false,
    isLiked: false,
    isCommenting: false,
    comments: [],
    newComment: "", // Estado para armazenar o comentário temporário
  };

  const [posts, setPosts] = useState([
    {
      id: 1,
      header: { name: "AgroTech Solutions", category: "Empresa", date: "09/11/2024, 14:30", avatar: "/img/logo-agrotech.png" },
      title: "Produto: Trator Massey Ferguson 8737",
      shortDescription: "Trator Massey Ferguson 8737, ano 2020...",
      fullDescription: "Trator Massey Ferguson 8737, ano 2020 em excelente estado. Ideal para diversas operações agrícolas. Motor de 370 hp, transmissão Dyna-6, eixo dianteiro com suspensão e cabine com conforto premium.",
      image: "/img/trator-masseyferguson.jpg",
      contact: {
        email: "contato@agrotech.com",
        phone: "(13) 9987-5861",
      },
      state: { ...initialPostState },
    },
    {
      id: 2,
      header: { name: "Máquinas Sol", category: "Empresa", date: "04/11/2024, 14:30", avatar: "/img/maquinas-sol.png" },
      title: "Colheitadeira John Deere 9870 STS",
      shortDescription: " Colheitadeira John Deere 9870 STS, modelo 2015 em ótimo estado de conservação...",
      fullDescription: " Colheitadeira John Deere 9870 STS, modelo 2015 em ótimo estado de conservação. Ideal para grandes áreas de plantio de grãos. Motor de 450 hp, capacidade do tanque de grãos de 10.000 litros e plataforma de corte de 35 pés.",
      image: "/img/colheitadeira-johndeere.jpg",
      contact: {
        email: "contato@maquinasol.com",
        phone: "(11) 9887-5462",
      },
      state: { ...initialPostState },
    },
  
  ]);

  const [shareMessage, setShareMessage] = useState("");

  const toggleLike = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, state: { ...post.state, isLiked: !post.state.isLiked } } : post
    ));
  };

  const toggleDescription = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, state: { ...post.state, isExpanded: !post.state.isExpanded } } : post
    ));
  };

  const toggleCommenting = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, state: { ...post.state, isCommenting: !post.state.isCommenting } } : post
    ));
  };

  const handleCommentChange = (postId, comment) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, state: { ...post.state, newComment: comment } } : post
    ));
  };

  const handleCommentSubmit = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId && post.state.newComment.trim() !== ""
        ? {
            ...post,
            state: {
              ...post.state,
              comments: [...post.state.comments, { user: "User Admin", comment: post.state.newComment }],
              newComment: "",
              isCommenting: false,
            }
          }
        : post
    ));
  };

  const handleShare = (postId) => {
    setShareMessage("Link copiado para a área de transferência!");
    setTimeout(() => {
      setShareMessage("");
    }, 3000);
  };

  return (
    <>
     <div>
      {posts.map(post => (
        <section key={post.id}>
          <div className={style.estrutura}>
            <div className={style.post}>
              <div className={style["post-header"]}>
                <img src={post.header.avatar} alt="Logo Parceiros" className={style["user-avatar"]} />
                <div className={style["post-info"]}>
                  <h4 className={style["user-name"]}>{post.header.name}</h4>
                  <p className={style["post-category"]}>{post.header.category}</p>
                </div>
                <p className={style["post-date"]}>Publicado em: {post.header.date}</p>
              </div>

              <div className={style["post-content"]}>
                <h3 className={style["post-title"]}>{post.title}</h3>
                <p className={style["post-description"]}>
                  {post.state.isExpanded ? post.fullDescription : post.shortDescription}
                  <button onClick={() => toggleDescription(post.id)} className={style["toggle-button"]}>
                    {post.state.isExpanded ? "Ler Menos" : "Ler Mais"}
                  </button>
                </p>
                {post.image && <img src={post.image} alt={post.title} className={style["post-image"]} />}
                {post.contact && (
  <div className={style["contact-info"]}>
    <p><strong>Contato:</strong></p>
    <div className={style["contact-details"]}>
      <p>Email: <a href={`mailto:${post.contact.email}`}>{post.contact.email}</a></p>
      <p>Telefone: <a href={`tel:+${post.contact.phone}`}>{post.contact.phone}</a></p>
    </div>
  </div>
)}

              </div>

              <div className={style["post-actions"]}>
                <button className={style["action-button"]} onClick={() => toggleLike(post.id)}>
                  {post.state.isLiked ? "👍 Curtido" : "👍 Curtir"}
                </button>

                <button className={style["action-button"]} onClick={() => toggleCommenting(post.id)}>
                  💬 Comentar
                </button>

                <button className={style["action-button"]} onClick={() => handleShare(post.id)}>
                  🔗 Compartilhar
                </button>
              </div>

              {post.state.isCommenting && (
                <div className={style["comment-box"]}>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Digite seu comentário..."
                    value={post.state.newComment}
                    onChange={(e) => handleCommentChange(post.id, e.target.value)}
                  />
                  <button className="btn btn-primary mt-2" onClick={() => handleCommentSubmit(post.id)}>
                    Adicionar Comentário
                  </button>
                  <button className="btn btn-secondary mt-2 ms-2" onClick={() => toggleCommenting(post.id)}>
                    Cancelar
                  </button>
                </div>
              )}

              {post.state.comments.length > 0 && (
                <div className={style["comments-section"]}>
                  {post.state.comments.map((comment, index) => (
                    <div key={index} className={style["comment"]}>
                      <div className={style["comment-header"]}>
                        <img src="https://via.placeholder.com/50" alt="User Avatar" className={style["user-avatar"]} />
                        <span className={style["user-name"]}>{comment.user}</span>
                      </div>
                      <p>{comment.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
      {shareMessage && <div className={style["share-message"]}>{shareMessage}</div>}
    </div>
    
    </>
  );
};

export default Maquinas;  