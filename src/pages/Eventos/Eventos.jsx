import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Eventos.module.css';

const Eventos = () => {
  const navigate = useNavigate();
  const [eventos, setEventos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const response = await fetch('https://localhost:7297/api/Events'); // Fetch from your endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEventos(data);
      } catch (error) {
        setError(error);
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEventos();
  }, []);

  const handleCriarEventoClick = () => {
    navigate('/criarevento');
  };

  const handleLembrarMeClick = (evento) => {
    alert(`Lembrete adicionado para o evento: ${evento.nome} em ${evento.data} às ${evento.hora}`);
    // Add your calendar integration here
  };

  const handleCompartilharClick = (evento) => {
    alert(`Evento compartilhado: ${evento.nome}`);
    // Add your sharing functionality here
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.titulo}>Eventos Agro</h1>
        <button onClick={handleCriarEventoClick} className={styles.criarEventoButton}>
          Criar Evento
        </button>
      </div>
      <div className={styles.eventosLista}>
        {loading ? (
          <p>Carregando eventos...</p>
        ) : error ? (
          <p>Erro ao carregar eventos: {error.message}</p>
        ) : eventos.length === 0 ? (
          <p>Nenhum evento encontrado.</p>
        ) : (
          eventos.map((evento) => (
            <div key={evento.id} className={styles.eventoCard}>
              <img src={evento.capa} alt={`Capa do ${evento.nome}`} className={styles.eventoCapa} />
              <h2 className={styles.nome}>{evento.nome}</h2>
              <p className={styles.dataHora}>
                <span className={styles.data}>{evento.data}</span> às <span className={styles.hora}>{evento.hora}</span>
              </p>
              <p className={styles.local}>{evento.local}</p>
              <p className={styles.descricao}>{evento.descricao}</p>
              <div className={styles.botoes}>
                <button onClick={() => handleLembrarMeClick(evento)} className={styles.lembraMeButton}>
                  Lembrar-me
                </button>
                <button onClick={() => handleCompartilharClick(evento)} className={styles.compartilharButton}>
                  <i className="fas fa-share-alt"></i> Compartilhar
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Eventos;