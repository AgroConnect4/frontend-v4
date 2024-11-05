
import React from 'react';

const PostCompleto = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8">
          <article>
            <header className="mb-4">
              <h1 className="fw-bolder mb-1">Oferta de Safra de Café Especial</h1>
              <div className="text-muted fst-italic mb-2">Postado por Bella Vista</div>
              <a className="badge bg-secondary text-decoration-none link-light" href="#!">Agricultor</a>
              <a className="badge bg-secondary text-decoration-none link-light" href="#!">Produto</a>
            </header>
            <figure className="mb-4">
              <img className="img-fluid rounded" src="https://agroslim.com.br/wp-content/uploads/2020/10/agroslim_Blog_plantio_cafe-1.jpg" alt="Plantio de Café" />
            </figure>
            <section className="mb-5">
              <p className="fs-5 mb-4">Se você é uma marca de café em busca dos melhores grãos que valoriza a qualidade, não perca a chance de adquirir nossos grãos especiais. Entre em contato para saber mais sobre nossos produtos.</p>
              <p className="fs-5 mb-4">- Origem: Nossos grãos de café são cultivados em nossa própria lavoura.</p>
              <p className="fs-5 mb-4">- Qualidade Premium: Cada grão é selecionado para garantir a mais alta qualidade.</p>
              <p className="fs-5 mb-4">- Sacos de 10 kg: Disponibilizamos sacos de 10 kg por 250,00 para atender às suas necessidades.</p>
              <p className="fs-5 mb-4">Entre em contato conosco:</p>
              <p className="fs-5 mb-4">- Email: contato@belavistacafe.com</p>
              <p className="fs-5 mb-4">- Telefone: (11) 9876-5432</p>
            </section>
          </article>
          <section className="mb-5">
            <div className="card bg-light">
              <div className="card-body">
                <form className="mb-4">
                  <textarea className="form-control" rows="3" placeholder="Participe da discussão e deixe um comentário!"></textarea>
                </form>
                <div className="d-flex mb-4">
                  <div className="flex-shrink-0">
                    <img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="Comentador" />
                  </div>
                  <div className="ms-3">
                    <div className="fw-bold">Empresa Alimentícia 1</div>
                    Estamos interessados em adquirir um lote de seus grãos de café. Podemos discutir um contrato de fornecimento exclusivo?
                    <div className="d-flex mt-4">
                      <div className="flex-shrink-0">
                        <img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="Comentador" />
                      </div>
                      <div className="ms-3">
                        <div className="fw-bold">Bella Vista</div>
                        Obrigado pelo interesse! Podemos agendar uma reunião para discutir os detalhes do contrato. Por favor, envie um e-mail para contato@belavistacafe.com para combinarmos um horário.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-lg-4">
          <div className="card mb-4">
            <div className="card-header">Buscar</div>
            <div className="card-body">
              <div className="input-group">
                <input className="form-control" type="text" placeholder="Digite o termo de busca..." aria-label="Digite o termo de busca..." aria-describedby="button-search" />
                <button className="btn btn-primary" id="button-search" type="button">Buscar</button>
              </div>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header">Categorias</div>
            <div className="card-body">
              <div className="row">
                <div className="col-sm-6">
                  <ul className="list-unstyled mb-0">
                    <li><a href="#!">Agricultor</a></li>
                    <li><a href="#!">Produto</a></li>
                    <li><a href="#!">Café</a></li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul className="list-unstyled mb-0">
                    <li><a href="#!">Grãos</a></li>
                    <li><a href="#!">Qualidade</a></li>
                    <li><a href="#!">Contato</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header">Widget Lateral</div>
            <div className="card-body">Você pode colocar qualquer coisa que desejar dentro desses widgets laterais. Eles são fáceis de usar e apresentam o componente de cartão do Bootstrap 5!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCompleto;
