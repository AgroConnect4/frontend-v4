import React from "react";
import style from "./Publicacao.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';

/*Ideia fazendeiro vendendo uma maquina*/
const Gerais = () => {
  const navigate = useNavigate();

  const handlePostCompletoClick = () =>{
    navigate('/PostCompleto')
  }
  return (
    <>
 <section>
        <div className={style.estrutura}>
          <div className={style.row}>
            <div className={style.col}>
              <img
                className={style["logo-parceiros"]}
                src="/img/logo-agrotech.png"
                alt="Logo Parceiros"
              />
              <div className={style["post-textos"]}>
                <p className={style["nome-parceiro"]}>AgroTech Solutions</p>
                <p className={style["tipo-parceiro"]}>
                  Empresa|Maquina|
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
              <h5>Trator Massey Ferguson 8737</h5>
            </center>

            <p className={style["texto-parceiros"]}>
              Trator Massey Ferguson 8737, ano 2020 em excelente estado. Ideal para diversas operações agrícolas. Motor de 370 hp, transmissão Dyna-6, eixo dianteiro com suspensão e cabine com conforto premium.
            </p>
            <p className={style["ler-mais"]}>Ler mais</p>

            <div>
              <img
                className={style["imagem-parceiros"]}
                src="/img/trator-masseyferguson.jpg"
                alt="Trator Massey Ferguson 8737"
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
                src="/img/bellaVista.jpg"
                alt="Logo Parceiros"
              />

              <div className={style["post-textos"]}>
                <p className={style["nome-parceiro"]}>Bella Vista</p>
                <p className={style["tipo-parceiro"]}>
                  Agricultor|Produto|
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
              <h5>Oferta de Safra de Café Especial</h5>
            </center>

            {}
            <p className={style["texto-parceiros"]}>
              Se você é uma marca de café em busca dos melhores grãos que
              valoriza a qualidade, não perca a chance de adquirir nossos grãos
              especiais. Entre em contato para saber mais sobre nossos produtos.
              - Origem: Nossos grãos de café são... cultivados em nossa própria
              lavoura. - Qualidade Premium: Cada grão é selecionado para
              garantir a mais alta qualidade. - Sacos de 10 kg: Disponibilizamos
              sacos de 10 kg por 250,00 para atender às suas necessidades. Entre
              em contato conosco: - Email: contato@belavistacafe.com ouTelefone:
              (11) 9876-5432
              {}
            </p>
            <p className={style["ler-mais"]}>Ler mais</p>

            <div>
              <img
                className={style["imagem-parceiros"]}
                src="https://agroslim.com.br/wp-content/uploads/2020/10/agroslim_Blog_plantio_cafe-1.jpg"
                alt=""
              />
            </div>

            <div className={style["botoes-container"]}>
              <img
                className={style["curtirFavoritar"]}
                src="/img/coracao.png"
                alt="Curtir"
              />
              <button className={style["btn-saibamais"]} onClick={handlePostCompletoClick} type="button">
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

    </>
  );
};
export default Gerais;
