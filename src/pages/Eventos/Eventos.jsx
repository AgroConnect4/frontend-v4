import React, { useState, useEffect } from 'react';
import styles from './Eventos.module.css';
import { useNavigate } from 'react-router-dom';

const Eventos = () => {
  const [eventos, setEventos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const response = await fetch('https://localhost:7297/api/Events');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Convert Base64 images to Data URLs
        const eventosWithImages = data.map((evento) => ({
          ...evento,
          imageUrl: evento.imageUrl ? `data:image/jpeg;base64,${evento.imageUrl}` : '', // Adjust 'image/jpeg' if needed
          productImages: evento.productImages.map(img => img ? `data:image/jpeg;base64,${img}` : '') //Handle multiple images. Change image type as needed.
        }));
        setEventos(eventosWithImages);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEventos();
  }, []);

  const handleCriarEventoClick = () => {
    navigate('/criarevento');
  };

  const handleLembrarMeClick = (evento) => {
    //Implementation for reminder
    alert(`Lembrete adicionado para o evento: ${evento.name} em ${evento.startDateTime}`);
  };

  const handleCompartilharClick = (evento) => {
    //Implementation for sharing
    alert(`Evento compartilhado: ${evento.name}`);
  };

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro ao carregar eventos: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.titulo}>Eventos Agro</h1>
        <button onClick={handleCriarEventoClick} className={styles.criarEventoButton}>
          Criar Evento
        </button>
      </div>
      <div className={styles.eventosLista}>
        {eventos.map((evento) => (
          <div key={evento.id} className={styles.eventoCard}>
            <img src={evento.imageUrl} alt={`Capa do ${evento.name}`} className={styles.eventoCapa} />
            <h2 className={styles.nome}>{evento.name}</h2>
            <p className={styles.dataHora}>
              <span className={styles.data}>{new Date(evento.startDateTime).toLocaleDateString()}</span>{' '}
              às{' '}
              <span className={styles.hora}>{new Date(evento.startDateTime).toLocaleTimeString()}</span>
            </p>
            <p className={styles.local}>{evento.location}</p>
            <p className={styles.descricao}>{evento.description}</p>
            <div className={styles.botoes}>
              <button onClick={() => handleLembrarMeClick(evento)} className={styles.lembraMeButton}>
                Lembrar-me
              </button>
              <button onClick={() => handleCompartilharClick(evento)} className={styles.compartilharButton}>
                <i className="fas fa-share-alt"></i> Compartilhar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eventos;