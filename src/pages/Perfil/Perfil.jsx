
import React, { useState } from "react";
import style from "./Perfil.module.css";
import BotaoTopo from "../../components/BotaoTopo/BotaoTopo";
import { useNavigate } from 'react-router-dom';
import Footer from "../../components/Footer/Footer";
import Botaogeral from '../Botaogeral.module.css'
import SolPoente from "../../components/Publicacoes/SolPoente";

const Perfil = () => {
  const navigate = useNavigate();

  const handleCriarClick = () =>{
    navigate('/criar')
  }
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const fullText = (
    <p>
      A Fazenda Sol Poente é um exemplo de agricultura sustentável e compromisso com a qualidade.
      Produzimos alimentos de alta qualidade, como milho orgânico cultivado com técnicas sustentáveis,
      soja não transgênica para preservar o meio ambiente e frutas regionais frescas e saborosas.
      Valorizamos o respeito ao meio ambiente e a comunidade local em todas as nossas atividades.
    </p>
  );

  const briefText = (
    <p>
 A Fazenda Sol Poente é um exemplo de agricultura sustentável e compromisso com a qualidade.
      Produzimos alimentos de alta qualidade...
    </p>
  );
  return (
    <>
    <div className={style["container"]}>
      <div className={style["banner"]}>
        <div className={style["Fundo-foto"]}>
          <div>
            <img
              className={style["foto"]}
              src="/img/logo-solPoente.jpg"
              alt="logo"
            />
          </div>
        </div>
        <div className={style["icones"]}>
          <img
            className={style["icone"]}
            src="img/whatsapp.png"
            alt="whatsapp"
          />
          <img
            className={style["icone"]}
            src="img/instagram.png"
            alt="instagram"
          />
          <img
            className={style["icone"]}
            src="img/facebook.png"
            alt="facebook"
          />
          <img className={style["icone"]} src="img/email.png" alt="email" />
          <img
            className={style["icone"]}
            src="img/telefone.png"
            alt="telefone"
          />
        </div>
        <img
          className={style["icone-editar"]}
          src="img/editar.png"
          alt="editar-perfil"
        />
        <div className={style["fundo-banner"]}>
          <h1 className={style["nome-parceiroSobre"]}>Sol Poente</h1>
          <div className={style["sobre-parceiro"]}>
          {isExpanded ? fullText : briefText}
          <button onClick={toggleText} className={style["ler-maisSobre"]}>
            {isExpanded ? 'Ler menos' : 'Ler mais'}
          </button>
          </div>
        </div>
      </div>

      <div className={style["container-disponivel"]}>
        <div className={style["two-container"]}>
          <div className={style["titulo-container"]}>
            <h3 className={style["titulo"]}>Principais produtos</h3>
            <div className={style["produto-container"]}>
              <div
                onMouseEnter={() =>
                  (document.getElementById("milho-nome").style.display =
                    "block")
                }
                onMouseLeave={() =>
                  (document.getElementById("milho-nome").style.display = "none")
                }
              >
                <img
                  className={style["produto"]}
                  src="img/milho.png"
                  alt="milho"
                />
                <div id="milho-nome" className={style["produto-nome"]}>
                  Milho
                </div>
              </div>
              <div
                onMouseEnter={() =>
                  (document.getElementById("soja-nome").style.display = "block")
                }
                onMouseLeave={() =>
                  (document.getElementById("soja-nome").style.display = "none")
                }
              >
                <img
                  className={style["produto"]}
                  src="img/soja.webp"
                  alt="soja"
                />
                <div id="soja-nome" className={style["produto-nome"]}>
                  Soja
                </div>
              </div>
              <div
                onMouseEnter={() =>
                  (document.getElementById("laranja-nome").style.display =
                    "block")
                }
                onMouseLeave={() =>
                  (document.getElementById("laranja-nome").style.display =
                    "none")
                }
              >
                <img
                  className={style["produto"]}
                  src="img/laranja.png"
                  alt="laranja"
                />
                <div id="laranja-nome" className={style["produto-nome"]}>
                  Laranja
                </div>
              </div>
            </div>
          </div>
          <div className={style["titulo-container"]}>
            <h3 className={style["titulo"]}>Produtos disponíveis</h3>
            <div className={style["produto-container"]}>
              <div
                onMouseEnter={() =>
                  (document.getElementById(
                    "milho-disponivel-nome"
                  ).style.display = "block")
                }
                onMouseLeave={() =>
                  (document.getElementById(
                    "milho-disponivel-nome"
                  ).style.display = "none")
                }
              >
                <img
                  className={style["produto"]}
                  src="img/milho.png"
                  alt="milho disponível"
                />
                <div
                  id="milho-disponivel-nome"
                  className={style["produto-nome"]}
                >
                  Milho Disponível
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
    <hr/>
    <button onClick={handleCriarClick} className={Botaogeral['btn-primary']}>Criar publicação</button>
 
      <SolPoente/>
      <BotaoTopo />
           <Footer/>
    </>
  );
};

export default Perfil;
 