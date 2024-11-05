import React from "react";
import style from "./Publicacao.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Servicos = () => {
  return (
    <>
        <section>
        <div className={style.estrutura}>
          <div className={style.row}>
            <div className={style.col}>
              <img
                className={style["logo-parceiros"]}
                src="/img/logo-controle-pragas.png"
                alt="Logo Controle de Pragas"
              />
              <div className={style["post-textos"]}>
                <p className={style["nome-parceiro"]}>AgroProtec</p>
                <p className={style["tipo-parceiro"]}>
                  Empresa|Serviço|Controle de Pragas|
                  <img
                    className={style.pontinhos}
                    src="/img/pontos.png"
                    alt="pontinhos"
                  />
                </p>
              </div>
            </div>
            <hr></hr>

            <center>
              <h5>Serviços de Controle de Pragas</h5>
            </center>

            <p className={style["texto-parceiros"]}>
              Oferecemos soluções eficazes para o controle de pragas em plantações agrícolas. Utilizamos métodos sustentáveis e tecnologias avançadas para proteger suas colheitas.
            </p>
            <p className={style["ler-mais"]}>Ler mais</p>

            <div>
              <img
                className={style["imagem-parceiros"]}
                src="/img/controle-pragas.png"
                alt="Serviços de Controle de Pragas da AgroProtec"
              />
            </div>

            <div className={style["botoes-container"]}>
              <img
                className={style["curtirFavoritar"]}
                src="/img/coracao.png"
                alt="Curtir"
              />

              <button className={style["btn-saibamais"]} type="button">
                Entrar na publicação
              </button>
              <img
                className={style["curtirFavoritar"]}
                src="/img/favorito.png"
                alt="Favoritar"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={style.estrutura}>
          <div className={style.row}>
            <div className={style.col}>
              <img
                className={style["logo-parceiros"]}
                src="/img/logo-monitoramento-solo.png"
                alt="Logo Monitoramento de Solo"
              />
              <div className={style["post-textos"]}>
                <p className={style["nome-parceiro"]}>SoloTech</p>
                <p className={style["tipo-parceiro"]}>
                  Empresa|Serviço|Monitoramento de Solo|
                  <img
                    className={style.pontinhos}
                    src="/img/pontos.png"
                    alt="pontinhos"
                  />
                </p>
              </div>
            </div>
            <hr></hr>

            <center>
              <h5>Serviços de Monitoramento de Solo</h5>
            </center>

            <p className={style["texto-parceiros"]}>
              Oferecemos soluções avançadas para o monitoramento de solo, utilizando sensores e tecnologias precisas para otimizar o manejo de culturas e garantir uma produção sustentável.
            </p>
            <p className={style["ler-mais"]}>Ler mais</p>

            <div>
              <img
                className={style["imagem-parceiros"]}
                src="/img/monitoramento-solo.png"
                alt="Serviços de Monitoramento de Solo da SoloTech"
              />
            </div>

            <div className={style["botoes-container"]}>
              <img
                className={style["curtirFavoritar"]}
                src="/img/coracao.png"
                alt="Curtir"
              />

              <button className={style["btn-saibamais"]} type="button">
                Entrar na publicação
              </button>
              <img
                className={style["curtirFavoritar"]}
                src="/img/favorito.png"
                alt="Favoritar"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={style.estrutura}>
          <div className={style.row}>
            <div className={style.col}>
              <img
                className={style["logo-parceiros"]}
                src="/img/logo-pesquisa-agro.png"
                alt="Logo Pesquisa Agro"
              />
              <div className={style["post-textos"]}>
                <p className={style["nome-parceiro"]}>AgroPesquisa</p>
                <p className={style["tipo-parceiro"]}>
                  Empresa|Serviço|Pesquisa Agrícola|
                  <img
                    className={style.pontinhos}
                    src="/img/pontos.png"
                    alt="pontinhos"
                  />
                </p>
              </div>
            </div>
            <hr></hr>

            <center>
              <h5>Serviços de Pesquisa Agrícola</h5>
            </center>

            <p className={style["texto-parceiros"]}>
              Realizamos estudos e pesquisas no setor agrícola para desenvolvimento de novas variedades de culturas, técnicas de plantio inovadoras e soluções para desafios do campo. Conte conosco para impulsionar sua produção.
            </p>
            <p className={style["ler-mais"]}>Ler mais</p>

            <div>
              <img
                className={style["imagem-parceiros"]}
                src="/img/pesquisa-agro.png"
                alt="Serviços de Pesquisa Agrícola da AgroPesquisa"
              />
            </div>

            <div className={style["botoes-container"]}>
              <img
                className={style["curtirFavoritar"]}
                src="/img/coracao.png"
                alt="Curtir"
              />

              <button className={style["btn-saibamais"]} type="button">
                Entrar na publicação
              </button>
              <img
                className={style["curtirFavoritar"]}
                src="/img/favorito.png"
                alt="Favoritar"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Servicos;
