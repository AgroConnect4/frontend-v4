import React, { useState, useEffect } from "react";
import style from "./Publicacao.module.css";

const Publicacao = ({ post, onCommentSubmit }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [likeError, setLikeError] = useState(null); // Estado para erros de like
  const [liked, setLiked] = useState(false);
  const [user, setUser] = useState(null); // State to hold user information
  const [userLoading, setUserLoading] = useState(true); // Loading state for user data
  const [userError, setUserError] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isCommenting, setIsCommenting] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [submittingComment, setSubmittingComment] = useState(false); //for loading indicator
  const [commentError, setCommentError] = useState(null); // for error display
  const [loadingComments, setLoadingComments] = useState(true);
  const [likeSubmitting, setLikeSubmitting] = useState(false);
  
  useEffect(() => {
    console.log("Received post object:", post); // Log the entire post object
  }, [post]);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    // You might want to add an API call here to update the like count on the server
  };

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleCommenting = () => {
    setIsCommenting(!isCommenting);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
    setCommentError(null); // Clear error when user types
  };

  const handleCommentSubmit = async () => {
    setSubmittingComment(true);
    setCommentError(null); // Clear previous error

    if (newComment.trim() !== "") {
      try {
        const token = sessionStorage.getItem('token');
        if (!token) {
          throw new Error('Você precisa estar logado para comentar.');
        }

        const requestBody = JSON.stringify({ content: newComment });
        console.log("Request Body:", requestBody);

        const response = await fetch(`https://localhost:7297/api/Posts/${post.id}comment`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: requestBody,
        });

        if (!response.ok) {
          const errorText = await response.text(); // Get the raw error text
          console.error("Error response:", response.status, response.statusText, errorText); // Log for debugging
          const errorMessage = errorText || `Erro ao enviar comentário (${response.status})`;
          throw new Error(errorMessage);
        }

        const newCommentData = await response.json();
        setComments([...comments, newCommentData]);
        setNewComment("");
        setIsCommenting(false);
      } catch (error) {
        setCommentError(error.message); // Set error message for display
        console.error("Error submitting comment:", error);
      } finally {
        setSubmittingComment(false); // Always reset loading state
      }
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      setLoadingComments(true);
      try {
        if (!post || !post.id) return;

        const response = await fetch(`https://localhost:7297/api/Posts/${post.id}/comments`);
        if (!response.ok) {
          throw new Error(`Erro ao buscar comentários: ${response.status} - ${await response.text()}`);
        }
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Erro ao buscar comentários:", error);
        setCommentError(error.message);
      } finally {
        setLoadingComments(false);
      }
    };

    fetchComments();
  }, [post.id]);

  const handleLike = async () => {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) {
        throw new Error('Você precisa estar logado para curtir.');
      }

      const response = await fetch(`https://localhost:7297/api/Posts/${post.id}/react`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reactionType: 0 }), // 0 representa Like
      });

      if (!response.ok) {
        const errorText = await response.text();
        const errorMessage = errorText || `Erro ao curtir: ${response.status}`;
        throw new Error(errorMessage);
      }

      setLiked(true); // Atualiza o estado após curtir com sucesso
      setLikeError(null); // Limpa qualquer erro anterior

    } catch (error) {
      setLikeError(error.message); // Define a mensagem de erro para exibição
      console.error("Erro ao curtir:", error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      setUserLoading(true);
      setUserError(null);
  
      try {
        if (post && post.userId) {
          const response = await fetch(`https://localhost:7297/api/UserProfile/${post.userId}`);
          if (!response.ok) {
            const errorData = await response.json(); // Try to get more detailed error info
            const errorMessage = errorData.message || `Error fetching user: ${response.status}`;
            throw new Error(errorMessage);
          }
  
          const userData = await response.json();
          const imageUrl = userData.imageUrl ? `data:image/jpeg;base64,${userData.imageUrl}` : "/img/default-avatar.png"; // Adjust MIME type if needed
  
          setUser({ ...userData, imageUrl });
  
        } else {
          setUserError("Post or userId is missing."); //Handle missing data cases.
        }
      } catch (error) {
        setUserError(`Error fetching user: ${error.message}`);
        console.error("Error fetching user:", error);
      } finally {
        setUserLoading(false);
      }
    };
    fetchUser();
  }, [post.userId]);

  return (
    <section className={style.post_container}>
      <div className={style.post}>
        <div className={style["post-header"]}>
          {userLoading ? (
            <p>Carregando informações do usuário...</p>
          ) : userError ? (
            <p>Erro ao carregar informações do usuário: {userError}</p>
          ) : user ? (
            <>
              <img src={user.imageUrl} alt="User Avatar" className={style["user-avatar"]} /> 
              <div className={style["post-info"]}>
                <h4 className={style["user-name"]}>{user.name || "Usuário desconhecido"}</h4>
                <p className={style["post-category"]}>{post.categories?.[0] || "Sem categoria"}</p>
              </div>
            </>
          ) : (
            <p>Informações do usuário indisponíveis.</p>
          )}
          <p className={style["post-date"]}>Publicado em: {new Date(post.createdAt).toLocaleDateString()}</p>
        </div>

        <div className={style["post-content"]}>
          <h3 className={style["post-title"]}>{post.title}</h3>
          <p className={style["post-description"]}>
            {isExpanded ? post.content : post.content.substring(0, 100) + "..."}
            <button onClick={toggleDescription} className={style["toggle-button"]}>
              {isExpanded ? "Ler Menos" : "Ler Mais"}
            </button>
          </p>
          {post.imageUrl && <img src={post.imageUrl} alt={post.title} className={style["post-image"]} />}
        </div>

        <div className={style["post-actions"]}>
          <button className={style["action-button"]} onClick={handleLike} disabled={submittingComment}> {/* Adicione disabled para evitar cliques duplos */}
            {liked ? "👍 Curtido" : "👍 Curtir"}
          </button>
          <button className={style["action-button"]} onClick={toggleCommenting}>
            💬 Comentar
          </button>
        </div>

        {isCommenting && (
          <div className={style["comment-box"]}>
            {commentError && <p className={style.error}>{commentError}</p>}
            <textarea
              className="form-control"
              rows="3"
              placeholder="Digite seu comentário..."
              value={newComment}
              onChange={handleCommentChange}
            />
            <button className="btn btn-primary mt-2" onClick={handleCommentSubmit} disabled={submittingComment}>
              {submittingComment ? 'Enviando...' : 'Adicionar Comentário'}
            </button>
            <button className="btn btn-secondary mt-2 ms-2" onClick={toggleCommenting}>
              Cancelar
            </button>
          </div>
        )}

        {loadingComments ? (
          <p>Carregando comentários...</p>
        ) : comments.length > 0 ? (
          <div className={style["comments-section"]}>
            {comments.map((comment, index) => (
              <div key={index} className={style["comment"]}>
                <div className={style["comment-header"]}>
                  <img src={comment.user?.imageUrl || "https://via.placeholder.com/50"} alt="User Avatar" className={style["user-avatar"]} />
                  <span className={style["user-name"]}>{comment.user?.name || "Usuário desconhecido"}</span>
                </div>
                <p>{comment.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Nenhum comentário ainda.</p>
        )}
      </div>
    </section>
  );
};

export default Publicacao;