import React, { useState } from 'react';
import styles from './CriarEvento.module.css';

const CriarEvento = () => {
  const [evento, setEvento] = useState({
    nome: '',
    descricao: '',
    data: '',
    hora: '',
    foto: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEvento({ ...evento, [name]: value });
  };

  const handleFileChange = (e) => {
    setEvento({ ...evento, foto: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do evento para a API ou banco de dados.
    console.log(evento);
  };

  return (
    <div className={styles.container}>
      <h2>Criar Novo Evento</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="nome">Nome do Evento</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={evento.nome}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            name="descricao"
            value={evento.descricao}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="data">Data</label>
          <input
            type="date"
            id="data"
            name="data"
            value={evento.data}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="hora">Hora</label>
          <input
            type="time"
            id="hora"
            name="hora"
            value={evento.hora}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="foto">Foto do Evento</label>
          <input
            type="file"
            id="foto"
            name="foto"
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Criar Evento
        </button>
      </form>
    </div>
  );
};

export default CriarEvento;
