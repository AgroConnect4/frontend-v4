import React from 'react';
import styles from './Blog.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faWater, faSun } from '@fortawesome/free-solid-svg-icons'; // Importando ícones

const Blog = () => {
  return (
    <div className={styles.blogContainer}>
      <header className={styles.header}>
        <h1>Blog Agroconnect</h1>
        <div className={styles.weather}>
          <p>🌤️ 20°C</p> {/* Exemplo de exibição de clima */}
        </div>
      </header>


      <br />
      <center><h2>Dicas Agro</h2></center>
      <div className={styles.content}>
        <div className={styles.banner}>
          <img src="https://avatars.mds.yandex.net/i?id=096ecdf41c547eb46126da5bc9a75a05251bacdb-8497818-images-thumbs&n=13" alt="Banner" className={styles.bannerImage} />
        </div>

        <section className={styles.tips}>
          <ul className={styles.tipList}>
            <li className={styles.card}>
              <FontAwesomeIcon icon={faSeedling} className={styles.icon} />
              <h3>Dica 1</h3>
              <p>Informação útil sobre cultivo.</p>
            </li>
            <li className={styles.card}>
              <FontAwesomeIcon icon={faWater} className={styles.icon} />
              <h3>Dica 2</h3>
              <p>Mais informações sobre cuidados com plantas.</p>
            </li>
            <li className={styles.card}>
              <FontAwesomeIcon icon={faSun} className={styles.icon} />
              <h3>Dica 3</h3>
              <p>Dicas para aproveitamento da luz solar.</p>
            </li>
            {/* Adicione mais dicas conforme necessário */}
          </ul>
        </section>
      </div>

      <section className={styles.news}>
        <center><h2>Notícias</h2></center>
        <div className={styles.newsContainer}>
          <div className={styles.newsCard}>
            <img src="https://josecardenas.com/wp-content/uploads/2020/07/1-26.jpg" alt="Notícia 1" className={styles.newsImage} />
            <h3>Notícia 1</h3>
            <p>Resumo da notícia relevante. Esta é uma breve descrição que explica o conteúdo da notícia.</p>
          </div>
          <div className={styles.newsCard}>
            <img src="https://avatars.mds.yandex.net/i?id=0977a97f3fa7c154c16565d768bda52628af7a4a-4755486-images-thumbs&n=13" alt="Notícia 2" className={styles.newsImage} />
            <h3>Notícia 2</h3>
            <p>Outra notícia importante. Esta descrição pode oferecer um resumo adicional.</p>
          </div>
          {/* Adicione mais cards de notícias conforme necessário */}
        </div>
      </section>
    </div>
  );
};

export default Blog;
