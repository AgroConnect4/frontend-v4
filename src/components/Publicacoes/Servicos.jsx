import React, { useState } from "react";
import style from "./Publicacao.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from 'react-router-dom';

const Servicos = () => {
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
      header: { name: "SoloTech", category: "Serviço", date: "09/11/2024, 14:30", avatar: "/img/logo-monitoramento-solo.png" },
      title: " Serviços de Monitoramento de Solo",
      shortDescription: "Oferecemos soluções avançadas para o monitoramento de solo, utilizando sensores...",
      fullDescription: "Oferecemos soluções avançadas para o monitoramento de solo, utilizando sensores e tecnologias precisas para otimizar o manejo de culturas e garantir uma produção sustentável.",
      image: "/img/monitoramento-solo.png",
      contact: {
        email: "contato@solotech.com",
        phone: "(16) 9787-5868",
      },
      state: { ...initialPostState },
    },
    {
      id: 2,
      header: { name: "AgroProtec", category: "Serviço", date: "04/11/2024, 14:30", avatar: "/img/logo-controle-pragas.png" },
      title: "Serviços de Controle de Pragas",
      shortDescription: "Oferecemos soluções eficazes para o controle de pragas em plantações...",
      fullDescription: "Oferecemos soluções eficazes para o controle de pragas em plantações agrícolas. Utilizamos métodos sustentáveis e tecnologias avançadas para proteger suas colheitas.",
      image: "/img/controle-pragas.png",
      contact: {
        email: "contato@agrotech.com",
        phone: "(11) 9787-4462",
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
    
 
    {/*  <section>
         Post 5
        <div className={style.estrutura}>
          <div className={style.post}>
            <div className={style["post-header"]}>
              <img
                src="/img/logo-controle-pragas.png"
                alt="Logo Controle de Pragas"
                className={style["user-avatar"]}
              />
              <div className={style["post-info"]}>
                <h4 className={style["user-name"]}>AgroProtec</h4>
                <p className={style["post-category"]}>Serviço</p>
              </div>
              <p className={style["post-date"]}>Publicado em: 01/11/2024, 12:00</p>
            </div>

            <div className={style["post-content"]}>
              <h3 className={style["post-title"]}>Serviços de Controle de Pragas</h3>
              <p className={style["post-description"]}>
                {isExpanded
                  ? "Oferecemos soluções eficazes para o controle de pragas em plantações agrícolas. Utilizamos métodos sustentáveis e tecnologias avançadas para proteger suas colheitas."
                  : "Oferecemos soluções eficazes para o controle de pragas em plantações agrícolas..."}
                <button onClick={toggleDescription} className={style["toggle-button"]}>
                  {isExpanded ? "Ler Menos" : "Ler Mais"}
                </button>
              </p>
              <img
                src="/img/controle-pragas.png"
                alt="Serviços de Controle de Pragas da AgroProtec"
                className={style["post-image"]}
              />
            </div>

            <div className={style["post-actions"]}>
              <button className={style["action-button"]} onClick={toggleLike}>
                {isLiked ? "👍 Curtido" : "👍 Curtir"}
              </button>
              <button className={style["action-button"]} onClick={() => setIsCommenting(!isCommenting)}>
                💬 Comentar
              </button>
              <button className={style["action-button"]} onClick={handleShare}>
                🔗 Compartilhar
              </button>
            </div>

            {shareMessage && <div className={style["share-message"]}><p>{shareMessage}</p></div>}

            {isCommenting && (
              <div className={style["comment-box"]}>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Digite seu comentário..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <button className="btn btn-primary mt-2" onClick={handleCommentSubmitPost5}>
                  Adicionar Comentário
                </button>
                <button className="btn btn-secondary mt-2 ms-2" onClick={() => setIsCommenting(false)}>
                  Cancelar
                </button>
              </div>
            )}

            <div className={style["comments-section"]}>
              {commentsPost5.length > 0 && (
                <div className={style["comments-list"]}>
                  {commentsPost5.map((comment, index) => (
                    <div key={index} className={style["comment"]}>
                      <div className={style["comment-header"]}>
                        <img src={user.avatar} alt="User Avatar" className={style["user-avatar"]} />
                        <span className={style["user-name"]}>{comment.user}</span>
                      </div>
                      <p>{comment.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* Post 6 
        <div className={style.estrutura}>
          <div className={style.post}>
            <div className={style["post-header"]}>
              <img
                src="/img/logo-monitoramento-solo.png"
                alt="Logo Monitoramento de Solo"
                className={style["user-avatar"]}
              />
              <div className={style["post-info"]}>
                <h4 className={style["user-name"]}>SoloTech</h4>
                <p className={style["post-category"]}>Serviço</p>
              </div>
              <p className={style["post-date"]}>Publicado em: 09/11/2024, 14:30</p>
            </div>

            <div className={style["post-content"]}>
              <h3 className={style["post-title"]}>Serviços de Monitoramento de Solo</h3>
              <p className={style["post-description"]}>
                {isExpanded
                  ? "Oferecemos soluções avançadas para o monitoramento de solo, utilizando sensores e tecnologias precisas para otimizar o manejo de culturas e garantir uma produção sustentável."
                  : "Oferecemos soluções avançadas para o monitoramento de solo..."}
                <button onClick={toggleDescription} className={style["toggle-button"]}>
                  {isExpanded ? "Ler Menos" : "Ler Mais"}
                </button>
              </p>
              <img
                src="/img/monitoramento-solo.png"
                alt="Serviços de Monitoramento de Solo da SoloTech"
                className={style["post-image"]}
              />
            </div>

            <div className={style["post-actions"]}>
              <button className={style["action-button"]} onClick={toggleLike}>
                {isLiked ? "👍 Curtido" : "👍 Curtir"}
              </button>
              <button className={style["action-button"]} onClick={() => setIsCommenting(!isCommenting)}>
                💬 Comentar
              </button>
              <button className={style["action-button"]} onClick={handleShare}>
                🔗 Compartilhar
              </button>
            </div>

            {shareMessage && <div className={style["share-message"]}><p>{shareMessage}</p></div>}

            {isCommenting && (
              <div className={style["comment-box"]}>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Digite seu comentário..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <button className="btn btn-primary mt-2" onClick={handleCommentSubmitPost6}>
                  Adicionar Comentário
                </button>
                <button className="btn btn-secondary mt-2 ms-2" onClick={() => setIsCommenting(false)}>
                  Cancelar
                </button>
              </div>
            )}

            <div className={style["comments-section"]}>
              {commentsPost6.length > 0 && (
                <div className={style["comments-list"]}>
                  {commentsPost6.map((comment, index) => (
                    <div key={index} className={style["comment"]}>
                      <div className={style["comment-header"]}>
                        <img src={user.avatar} alt="User Avatar" className={style["user-avatar"]} />
                        <span className={style["user-name"]}>{comment.user}</span>
                      </div>
                      <p>{comment.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Servicos;
