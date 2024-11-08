import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Eventos.module.css';

const eventosData = [
  {
    id: 1,
    nome: 'Feira Agrícola Nacional',
    data: '2024-11-20',
    hora: '08:00',
    local: 'Parque de Exposições de São Paulo',
    descricao: 'Evento que reúne produtores, técnicos e empresas do setor agrícola. Fique por dentro das inovações e melhores práticas.',
    capa: 'https://i.ytimg.com/vi/XYR_ePGySP4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGE4gVShlMA8=&amp;rs=AOn4CLAvNba01nMdK5CEtVrX0OdgdOvGbA',
  },
  {
    id: 2,
    nome: 'Workshop de Agricultura Sustentável',
    data: '2024-12-05',
    hora: '10:00',
    local: 'Centro de Convenções Agrícola',
    descricao: 'Workshop prático sobre métodos de cultivo sustentáveis e tecnologias de conservação de solo e água.',
    capa: 'https://i.ytimg.com/vi/ZXWQ2agG83g/maxresdefault.jpg',
  },
  {
    id: 3,
    nome: 'Encontro de Pecuária Inteligente',
    data: '2025-01-18',
    hora: '09:30',
    local: 'Espaço Agro Pecuária',
    descricao: 'Conferência focada em novas tecnologias para pecuária, com discussões sobre manejo e bem-estar animal.',
    capa: 'https://avatars.mds.yandex.net/i?id=c1896f1b63b46940daabe14eba396a4d-4079534-images-thumbs&n=13',
  },
];

const Eventos = () => {
  const navigate = useNavigate();

  const handleCriarEventoClick = () => {
    navigate('/criarevento');
  };

  const handleLembrarMeClick = (evento) => {
    alert(`Lembrete adicionado para o evento: ${evento.nome} em ${evento.data} às ${evento.hora}`);
    // Aqui, você poderia integrar uma funcionalidade para adicionar o evento ao calendário
  };

  const handleCompartilharClick = (evento) => {
    alert(`Evento compartilhado: ${evento.nome}`);
    // Aqui, você poderia integrar uma funcionalidade para compartilhar o evento
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
        {eventosData.map((evento) => (
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
        ))}
      </div>
    </div>
  );
};

export default Eventos;
