import React from 'react';

const Notificação = ({ mensagem, onClose }) => {
  if (!mensagem) return null;

  return (
    <div className="notificacao">
      <p>{mensagem}</p>
      <button onClick={onClose}>Fechar</button>
    </div>
  );
};

export default Notificação;
