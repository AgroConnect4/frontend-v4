import React, { useEffect, useState } from "react";
import style from "./Publicacao.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';


const Produtos = () => {
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
                src="/img/logo-solPoente.jpg"
                alt="Logo Parceiros"
              />

              <div className={style["post-textos"]}>
                <p className={style["nome-parceiro"]}>Sol Poente</p>
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
              <h5>Oferta de Safra de Milho</h5>
            </center>

            {}
            <p className={style["texto-parceiros"]}>
              É com grande satisfação que anunciamos a disponibilidade de nossa
              safra de milho de alta qualidade, diretamente da Fazenda
              Florescer. Nosso milho é cultivado com cuidado e dedicação,
              garantindo grãos de excelência. Cada tonelada... está disponível por
              um preço competitivo de R$ 450. Disponível: 3 tonelada (1000 kg)
              Preço: R$ 450 por tonelada Contato: Se você deseja adquirir nosso
              milho, entre em contato conosco através do e-mail:
              fazendaflorescer@email.com ou pelo telefone: (11) 9876-5432.
              {}
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

      <section>
        <div className={style.estrutura}>
          <div className={style.row}>
            <div className={style.col}>
              <img
                className={style["logo-parceiros"]}
                src="https://blog4.mfrural.com.br/wp-content/uploads/2020/08/fazenda-venda3.jpg"
                alt="Logo Parceiros"
              />

              <div className={style["post-textos"]}>
                <p className={style["nome-parceiro"]}>fazenda Florescer</p>
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
              <h5>Mel Puro e Natural</h5>
            </center>

            {}
            <p className={style["texto-parceiros"]}>
              Se você deseja adquirir nosso mel em barris de 100 kg para sua
              marca, entre em contato conosco para discutir detalhes, preços e
              prazos de entrega. Escolha nosso mel para elevar o sabor de seus
              produtos! 100% puro e natural - Sem aditivos... ou conservantes -
              Colhido e processado com carinho - Sabor excepcional e versátil
              {}
            </p>
            <p className={style["ler-mais"]}>Ler mais</p>

            <div>
              <img
                className={style["imagem-parceiros"]}
                src="https://th.bing.com/th/id/R.58daae556f7d140c3cbe3e2e843b28cf?rik=wcX2pClLsE8%2fyA&pid=ImgRaw&r=0"
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

      <section>
        <div className={style.estrutura}>
          <div className={style.row}>
            <div className={style.col}>
              <img
                className={style["logo-parceiros"]}
                src=" https://revistarpanews.com.br/wp-content/uploads/2020/09/colhedora-de-cana.jpg"
                alt="Logo Parceiros"
              />

              <div className={style["post-textos"]}>
                <p className={style["nome-parceiro"]}>Fazenda Doce Açúcar</p>
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
              <h5>Oferta de Safra de Cana-de-Açúcar</h5>
            </center>

            {}
            <p className={style["texto-parceiros"]}>
              Temos o prazer de oferecer nossa safra de cana-de-açúcar de alta
              qualidade diretamente da nossa Fazenda. Nossa plantação é
              cultivada com cuidado e garantindo qualidade. Cada tonelada é
              vendida a um preço justo de R$ 350... Contato: Entre em contato
              conosco pelo e-mail: fazendadoceacucar@gmail.com ou pelo telefone:
              (11) 1234-5678.
              {}
            </p>
            <p className={style["ler-mais"]}>Ler mais</p>

            <div>
              <img
                className={style["imagem-parceiros"]}
                src="https://blog4.mfrural.com.br/wp-content/uploads/2022/09/shutterstock_81418672-1090x660.jpg"
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
export default Produtos;
