import React, { useEffect, useState } from "react";
import style from "./Publicacao.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const SolPoente = () => {
  return (
    <>
      <section>
        <div className={style.estrutura}>
          <div className={style.row}>
            <div className={style.col}>
              <img
                className={style["logo-parceiros"]}
                src="/img/logo-solPoente.jpg"
                alt="Logo Parceiros"
              />

              <div className={style["post-textos"]}>
                <p className={style["nome-parceiro"]}>Sol Poente</p>
                <p className={style["tipo-parceiro"]}>
                  Agricultor|Produto|
                  <Link to="/editar">
                    <img
                      className={style["icone-editar"]}
                      src="img/editar.png"
                      alt="editar-perfil"
                    />
                  </Link>
                </p>
              </div>
            </div>
            <hr></hr>
            <center>
              <h5>Oferta de Safra de Milho</h5>
            </center>

            <p className={style["texto-parceiros"]}>
              É com grande satisfação que anunciamos a disponibilidade de nossa
              safra de milho de alta qualidade, diretamente da Fazenda
              Florescer. Nosso milho é cultivado com cuidado e dedicação,
              garantindo grãos de excelência. Cada tonelada... está disponível por
              um preço competitivo de R$ 450. Disponível: 3 tonelada (1000 kg)
              Preço: R$ 450 por tonelada Contato: Se você deseja adquirir nosso
              milho, entre em contato conosco através do e-mail:
              fazendaflorescer@email.com ou pelo telefone: (11) 9876-5432.
            </p>
            <p className={style["ler-mais"]}>Ler mais</p>

            <div>
              <img
                className={style["imagem-parceiros"]}
                src="https://blog.syngentadigital.ag/wp-content/uploads/2021/07/19-07_colheita-milho_3.jpg"
                alt=""
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

export default SolPoente;
