import React, { useState } from 'react';
import styles from './Pesquisar.module.css';

const Pesquisar = () => {
  const [activeCategory, setActiveCategory] = useState("usuarios");
  const [searchQuery, setSearchQuery] = useState("");

  // Simulando uma lista de usuários, posts, eventos e notícias para exibição
  const usuarios = [
    { id: 1, nome: 'João Silva', foto: 'https://avatars.mds.yandex.net/i?id=46446f80227bad7e32e669170251c9d776e5b176-9181226-images-thumbs&n=13' },
    { id: 2, nome: 'Maria Oliveira', foto: 'https://miro.medium.com/v2/resize:fit:1400/1*z7BzbAhwwfMgfRFAvL0EqQ.png' },
    { id: 3, nome: 'Carlos Souza', foto: 'https://avatars.mds.yandex.net/i?id=7dc2bbc480093ce4ddf20dc278cbe84e74fb861d820a503f-10119783-images-thumbs&n=13' },
    { id: 4, nome: 'Ana Pereira', foto: 'https://avatars.mds.yandex.net/i?id=042aa1f1f9adedd8cc63a549cb9f7bb6f84a0c78-4401150-images-thumbs&n=13' },
  ];

  const posts = [
    { id: 1, titulo: 'Novo Produto Chegando!', imagem: 'https://avatars.mds.yandex.net/i?id=08c35e43cba36a25043751a2428319c813da5ddb-10332876-images-thumbs&n=13', descricao: 'Confira as novidades que chegam em breve à nossa loja.' },
    { id: 2, titulo: 'Evento de Networking', imagem: 'https://80.img.avito.st/image/1/1.qaKhsrasly4VkRPJGPnKkfGpBkkX.VUtapcKRxhXqXPSX67mmwoMHdElgYiscY50djULTdkY', descricao: 'Participe do nosso evento de networking para profissionais da área.' },
    { id: 3, titulo: 'Promoção Imperdível', imagem: 'https://avatars.mds.yandex.net/i?id=096ecdf41c547eb46126da5bc9a75a05251bacdb-8497818-images-thumbs&n=13', descricao: 'Aproveite nossa promoção exclusiva de final de ano com descontos incríveis.' },
    { id: 4, titulo: 'Dicas de Marketing Digital', imagem: 'https://www.thespruce.com/thmb/s9PWYLNLKMUlFqfqlj9RJQhdSxg=/3865x2576/filters:fill(auto,1)/farmer-and-banker-looking-at-crops-107185924-5782ff745f9b5831b504773a.jpg', descricao: 'Confira as melhores estratégias de marketing para 2024.' },
  ];

  const eventos = [
    { id: 1, nome: 'Conferência de Tecnologia', data: '2024-12-10', descricao: 'Participe da maior conferência sobre inovação tecnológica do ano.', imagem: 'https://avatars.mds.yandex.net/i?id=ec0ac3f9b1bf0930131585817ae085c09e4157fd-10780730-images-thumbs&n=13' },
    { id: 2, nome: 'Workshop de Marketing Digital', data: '2024-11-25', descricao: 'Aprimore suas habilidades em marketing digital com este workshop exclusivo.', imagem: 'https://avatars.mds.yandex.net/i?id=49405bfef8d6c9df0b0a2ac8fc1693a627094776-10928869-images-thumbs&n=13' },
    { id: 3, nome: 'Festa de Networking', data: '2024-11-15', descricao: 'Uma noite para se conectar com outros profissionais da área.', imagem: 'https://avatars.mds.yandex.net/i?id=20355d620efbce526262977794f5f2ba48f8abaa-9068689-images-thumbs&n=13' },
    { id: 4, nome: 'Seminário sobre Sustentabilidade', data: '2024-12-05', descricao: 'Discutindo práticas sustentáveis e o futuro do meio ambiente.', imagem: 'https://avatars.mds.yandex.net/i?id=752c78191756e81115b4cd10c967853fd9158dbb-5469231-images-thumbs&n=13' },
  ];

  const noticias = [
    { id: 1, titulo: 'Nova Tecnologia de Energias Renováveis', descricao: 'Saiba mais sobre os avanços na área de energias renováveis.', imagem: 'https://avatars.mds.yandex.net/i?id=7f083cdbc4f4694d3729ed7b25ff7b87-4450142-images-thumbs&n=13' },
    { id: 2, titulo: 'Mudanças Climáticas e Suas Consequências', descricao: 'Entenda como as mudanças climáticas afetam nosso planeta.', imagem: 'https://avatars.mds.yandex.net/i?id=ed84cccbc079a88438388d6f650c8fee79942627-7013926-images-thumbs&n=13' },
    { id: 3, titulo: 'Inovações no Mercado Automotivo Elétrico', descricao: 'Descubra as inovações que estão transformando o mercado automotivo.', imagem: 'https://avatars.mds.yandex.net/i?id=8383144d98d956339d3b527b67018ffb122aff11-9151019-images-thumbs&n=13' },
    { id: 4, titulo: 'Sustentabilidade e o Futuro das Cidades', descricao: 'Como as cidades estão se adaptando às práticas sustentáveis.', imagem: 'https://avatars.mds.yandex.net/i?id=262567e668389368180b53704bfd11989ed2028b3e7b2dd7-12760159-images-thumbs&n=13' },
  ];

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLembrarMe = (eventoId) => {
    // Aqui você pode implementar a lógica para adicionar o evento ao calendário ou como lembrete
    alert(`Lembrete configurado para o evento ${eventoId}!`);
  };

  return (
    <div className={styles.container}>
      {/* Barra de pesquisa */}
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchQuery}
          onChange={handleInputChange}
          className={styles.input}
        />
      </div>

      {/* Filtros por categoria */}
      <div className={styles.categories}>
        <button
          className={`${styles.categoryButton} ${activeCategory === 'usuarios' ? styles.active : ''}`}
          onClick={() => handleCategoryChange('usuarios')}
        >
          Usuários
        </button>
        <button
          className={`${styles.categoryButton} ${activeCategory === 'posts' ? styles.active : ''}`}
          onClick={() => handleCategoryChange('posts')}
        >
          Posts
        </button>
        <button
          className={`${styles.categoryButton} ${activeCategory === 'eventos' ? styles.active : ''}`}
          onClick={() => handleCategoryChange('eventos')}
        >
          Eventos
        </button>
        <button
          className={`${styles.categoryButton} ${activeCategory === 'noticias' ? styles.active : ''}`}
          onClick={() => handleCategoryChange('noticias')}
        >
          Notícias
        </button>
      </div>

      {/* Exibição dos resultados */}
      <div className={styles.results}>
        <h3>{`Resultados para "${searchQuery}" em ${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}`}</h3>

        {/* Exibindo os usuários */}
        {activeCategory === "usuarios" && (
          <div className={styles.cardsList}>
            {usuarios.filter(usuario => usuario.nome.toLowerCase().includes(searchQuery.toLowerCase())).map(usuario => (
              <div key={usuario.id} className={styles.userCard}>
                <img src={usuario.foto} alt={usuario.nome} className={styles.userPhoto} />
                <p className={styles.userName}>{usuario.nome}</p>
              </div>
            ))}
          </div>
        )}

        {/* Exibindo os posts */}
        {activeCategory === "posts" && (
          <div className={styles.cardsList}>
            {posts.filter(post => post.titulo.toLowerCase().includes(searchQuery.toLowerCase())).map(post => (
              <div key={post.id} className={styles.postCard}>
                <img src={post.imagem} alt={post.titulo} className={styles.postImage} />
                <div className={styles.postContent}>
                  <h4 className={styles.postTitle}>{post.titulo}</h4>
                  <p className={styles.postDescription}>{post.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Exibindo os eventos */}
        {activeCategory === "eventos" && (
          <div className={styles.cardsList}>
            {eventos.filter(evento => evento.nome.toLowerCase().includes(searchQuery.toLowerCase())).map(evento => (
              <div key={evento.id} className={styles.eventCard}>
                <img src={evento.imagem} alt={evento.nome} className={styles.eventImage} />
                <div className={styles.eventInfo}>
                  <h4 className={styles.eventTitle}>{evento.nome}</h4>
                  <p className={styles.eventDate}>{evento.data}</p>
                  <p className={styles.eventDescription}>{evento.descricao}</p>
                  <button
                    className={styles.rememberButton}
                    onClick={() => handleLembrarMe(evento.id)}
                  >
                    Lembrar-me
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Exibindo as notícias */}
        {activeCategory === "noticias" && (
          <div className={styles.cardsList}>
            {noticias.filter(noticia => noticia.titulo.toLowerCase().includes(searchQuery.toLowerCase())).map(noticia => (
              <div key={noticia.id} className={styles.newsCard}>
                <img src={noticia.imagem} alt={noticia.titulo} className={styles.newsImage} />
                <div className={styles.newsContent}>
                  <h4 className={styles.newsTitle}>{noticia.titulo}</h4>
                  <p className={styles.newsDescription}>{noticia.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Pesquisar;
