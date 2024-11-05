import React, { useState } from 'react';
import style from './CriarPubli.module.css';
import Notificacao from '../../components/Notificacao/Notificacao';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

function CriarPubli() {
    const [notificacao, setNotificacao] = useState(null);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState(null); // Estado para armazenar a imagem

    const handleChangeTitulo = (e) => {
        setTitulo(e.target.value);
    };

    const handleChangeDescricao = (e) => {
        setDescricao(e.target.value);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        // Verifica se o arquivo é .png ou .jpg
        if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
            setImagem(file);
            setNotificacao(null); // Limpa a notificação de erro, se houver
        } else {
            setImagem(null);
            setNotificacao({ tipo: 'erro', mensagem: 'Apenas arquivos PNG ou JPG são permitidos.' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verifica se o formulário é válido antes de prosseguir
        if (e.target.checkValidity() && imagem) {
            // Lógica para criar a postagem
            setNotificacao({ tipo: 'sucesso', mensagem: 'Postagem criada com sucesso!' });
        } else {
            setNotificacao({ tipo: 'erro', mensagem: 'Por favor, preencha todos os campos corretamente e selecione uma imagem.' });
        }
    };

    return (
        <div className={style["fundoIMG"]}>
            <div className={style["container-publicacao"]}>
                <div className={style["box-publicacao"]}>
                    <div className={style["titulo-publicacao"]}>
                        <a href=""><img src="../../../public/img/voltar.png" alt="" /></a>
                        <h1>Criar postagem</h1>
                    </div>
                    <form className={style["form-publicacao"]} onSubmit={handleSubmit}>
                        <label className={style["nomesCampos"]} htmlFor="">Título:
                            <input
                                className={`${style['publicacao-input-titulo']} ${titulo ? style['input-valid'] : style['input-invalid']}`}
                                type="text"
                                placeholder="Título da sua postagem"
                                value={titulo}
                                onChange={handleChangeTitulo}
                                required
                            />
                            {titulo && <FontAwesomeIcon icon={faCheckCircle} className={style["icon-valid"]} />}
                            {!titulo && <FontAwesomeIcon icon={faExclamationCircle} className={style["icon-invalid"]} />}
                        </label>
                        <label className={style["nomesCampos"]} htmlFor="">Descrição:
                            <input
                                className={`${style['publicacao-input-descricacao']} ${descricao ? style['input-valid'] : style['input-invalid']}`}
                                type="text"
                                placeholder="Conte-nos sobre sua postagem"
                                value={descricao}
                                onChange={handleChangeDescricao}
                                required
                            />
                            {descricao && <FontAwesomeIcon icon={faCheckCircle} className={style["icon-valid"]} />}
                            {!descricao && <FontAwesomeIcon icon={faExclamationCircle} className={style["icon-invalid"]} />}
                        </label>
                      
                            <input
                                type="file"
                                accept="image/png, image/jpeg"
                                onChange={handleImageUpload}
                                required
                                className={style["input-upload"]}
                            />
                      
                        <button type="submit" className={style["btn-criacao-publi"]}>Criar publicação</button>
                    </form>
                </div>
                {notificacao && <Notificacao tipo={notificacao.tipo} mensagem={notificacao.mensagem} />}
            </div>
        </div>
    );
}

export default CriarPubli;

