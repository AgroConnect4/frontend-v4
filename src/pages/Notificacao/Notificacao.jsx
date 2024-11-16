import React, { useState, useEffect } from 'react';
import styles from './Notificacao.module.css';

const Notificacao = () => {
  const [notificacoes, setNotificacoes] = useState([
    { id: 1, mensagem: 'Nova atualização disponível!', lida: false },
    { id: 2, mensagem: 'Seu pedido foi enviado.', lida: false },
    { id: 3, mensagem: 'Lembrete: Reunião amanhã às 10h.', lida: true },
  ]);

  // Função para marcar notificação como lida
  const marcarComoLida = (id) => {
    setNotificacoes(notificacoes.map(notificacao =>
      notificacao.id === id ? { ...notificacao, lida: true } : notificacao
    ));
  };

  return (
    <div className={styles.container}>
      <h2>Notificações</h2>
      <ul className={styles.listaNotificacoes}>
        {notificacoes.map((notificacao) => (
          <li
            key={notificacao.id}
            className={`${styles.notificacao} ${notificacao.lida ? styles.lida : ''}`}
            onClick={() => marcarComoLida(notificacao.id)}
          >
            {notificacao.mensagem}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notificacao;
