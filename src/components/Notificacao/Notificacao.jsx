import React from 'react';

const Notificacao = ({ tipo, mensagem }) => {
    const notificationClass = tipo === 'sucesso' ? 'alert-success' :
        tipo === 'erro' ? 'alert-danger' :
        'alert-warning';

    return (
        <div className={`alert ${notificationClass}`} role="alert" style={{ color: 'black', maxHeight: '15%' }}>
            {mensagem}
        </div>
    );
};

export default Notificacao;
