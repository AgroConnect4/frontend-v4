import React, { useState, useEffect } from 'react';
import styles from './CriarPubli.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';

const CriarPubli = () => {
  const [publicacao, setPublicacao] = useState({
      title: '',
      content: '',
      imageUrl: '',
      categories: ['General'],
  });
  const [categories, setCategories] = useState([
      { value: 'General', label: 'Geral' },
      { value: 'Technology', label: 'Tecnologia' },
      { value: 'Lifestyle', label: 'Estilo de Vida' },
  ]);
  const [token, setToken] = useState(null); // Token state
  const [isLoading, setIsLoading] = useState(false); // Loading indicator
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate(); // For redirection

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token'); // Corrected spelling
    setToken(storedToken);
  }, []);

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setPublicacao({ ...publicacao, [name]: value });
  };

  const handleCategoryChange = (e) => {
      setPublicacao({ ...publicacao, categories: [e.target.value] });
  };

  const handleFileChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
          setPublicacao({ ...publicacao, imageUrl: event.target.result });
      };

      if (file) {
          reader.readAsDataURL(file);
      } else {
          setPublicacao({ ...publicacao, imageUrl: '' });
      }
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      setError(null);

      try {
          if (!token) {
              throw new Error('Você precisa estar logado para criar uma publicação.');
          }

          const response = await fetch('https://localhost:7297/api/Posts/post', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`,
              },
              body: JSON.stringify(publicacao),
          });

          if (!response.ok) {
              const errorData = await response.json();
              let errorMessage = `HTTP error! status: ${response.status}`;
              if (errorData && errorData.message) {
                  errorMessage += ` ${errorData.message}`;
              } else if (errorData && errorData.errors) {
                  errorMessage += `  ${errorData.errors.join(', ')}`;
              } else if (response.status === 401) {
                  errorMessage = "Sessão expirada ou não autenticado. Faça login novamente.";
                  sessionStorage.removeItem('token');
                  navigate('/login');
              }
              throw new Error(errorMessage);
          }

          const data = await response.json();
          console.log('Success:', data);
          alert('Publicação criada com sucesso!');
          //Consider redirecting to a different page after success
          navigate('/posts');
      } catch (error) {
          setError(error.message);
          console.error('Error:', error);
      } finally {
          setIsLoading(false);
      }
  };
  
    return (
      <div className={styles.container}>
        <h2>Criar Nova Publicação</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              name="title"
              value={publicacao.title}
              onChange={handleInputChange}
              required
            />
          </div>
  
          <div className={styles.inputGroup}>
            <label htmlFor="content">Conteúdo</label>
            <textarea
              id="content"
              name="content"
              value={publicacao.content}
              onChange={handleInputChange}
              required
            />
          </div>
  
          <div className={styles.inputGroup}>
            <label htmlFor="categories">Categoria</label>
            <select id="categories" name="categories" value={publicacao.categories[0]} onChange={handleCategoryChange} required>
              {categories.map((category) => (
                <option key={category.value} value={category.value}>{category.label}</option>
              ))}
            </select>
          </div>
  
          <div className={styles.inputGroup}>
            <label htmlFor="imageUrl">Imagem</label>
            <input
              type="file"
              id="imageUrl"
              name="imageUrl"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
  
          <button type="submit" className={styles.submitButton}>
            Criar Publicação
          </button>
        </form>
      </div>
    );
  };
  
  export default CriarPubli;
