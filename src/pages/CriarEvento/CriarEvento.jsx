import React, { useState, useEffect } from 'react';
import styles from './CriarEvento.module.css'; // Changed file name
import { useNavigate } from 'react-router-dom';

const CriarEvento = () => {
  const [evento, setEvento] = useState({
    name: '',
    imageUrl: '',
    startDateTime: '',
    endDateTime: '',
    location: '',
    description: '',
    productImages: [],
  });
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    setToken(storedToken);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEvento({ ...evento, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => resolve(event.target.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });
      Promise.all(imageUrls).then((urls) => {
          setEvento((prevEvento) => ({...prevEvento, productImages: urls}));
      });
  };

  const handleDateChange = (e, type) => {
    setEvento({ ...evento, [type]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      if (!token) {
        throw new Error('Você precisa estar logado para criar um evento.');
      }

      const response = await fetch('https://localhost:7297/api/Events/event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(evento),
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
      alert('Evento criado com sucesso!');
      navigate('/eventos'); // Adjust the navigation path as needed
    } catch (error) {
      setError(error.message);
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Criar Novo Evento</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Input fields for name, imageUrl, startDateTime, endDateTime, location, description */}
        <div className={styles.inputGroup}>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" value={evento.name} onChange={handleInputChange} required />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="imageUrl">Imagem Principal</label>
          <input type="file" id="imageUrl" name="imageUrl" onChange={handleImageChange} accept="image/*" />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="startDateTime">Data/Hora de Início</label>
          <input type="datetime-local" id="startDateTime" name="startDateTime" value={evento.startDateTime} onChange={(e) => handleDateChange(e, 'startDateTime')} required />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="endDateTime">Data/Hora de Término</label>
          <input type="datetime-local" id="endDateTime" name="endDateTime" value={evento.endDateTime} onChange={(e) => handleDateChange(e, 'endDateTime')} required />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="location">Localização</label>
          <input type="text" id="location" name="location" value={evento.location} onChange={handleInputChange} required />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="description">Descrição</label>
          <textarea id="description" name="description" value={evento.description} onChange={handleInputChange} required />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="productImages">Imagens do Produto (multiples)</label>
          <input type="file" id="productImages" name="productImages" onChange={handleImageChange} multiple accept="image/*" />
        </div>

        <button type="submit" className={styles.submitButton}>Criar Evento</button>
      </form>
    </div>
  );
};

export default CriarEvento;