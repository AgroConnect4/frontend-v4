import React from 'react';
import Slider from 'react-slick';
import styles from './Blog.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faWater, faSun, faThermometerThreeQuarters } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Blog = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
     
  const agroTips = [
  
    {
      icon: faSeedling,
      title: "Utilize Cobertura do Solo para Reter Umidade",
      description: "A aplicação de mulch ou coberturas orgânicas ajuda a manter a umidade do solo, reduzindo a necessidade de irrigação frequente.",
      image: "https://i.vuzopedia.ru/storage/app/uploads/public/637/b21/17e/637b2117ea556540025679.jpg",
    },
    {
      icon: faWater,
      title: "Adote a Rotação de Culturas",
      description: "A rotação de culturas ajuda a melhorar a saúde do solo, evita o esgotamento de nutrientes e reduz o risco de pragas.",
      image: "https://ugc.futurelearn.com/uploads/images/9f/ba/9fba599d-aa48-46f7-a0b9-7aaeefe45b91.jpg",
    },
    {
      icon: faSun,
      title: "Utilize Cobertura do Solo para Reter Umidade",
      description: "A aplicação de mulch ou coberturas orgânicas ajuda a manter a umidade do solo, reduzindo a necessidade de irrigação frequente.",
      image: "https://avatars.mds.yandex.net/i?id=ed84cccbc079a88438388d6f650c8fee79942627-7013926-images-thumbs&n=13",
    },
  ];

  return (
    <div className={styles.blogContainer}>
      <header className={styles.header}>
        <h1>Blog Agroconnect</h1>
        <div className={styles.weather}>
          <p>🌤️ 20°C</p>
        </div>
      </header>

      <br />
       {/* Seção de Dicas para Altas Temperaturas */}
       <section className={styles.highTempTips}>
        <center><h2>Dicas do clima</h2></center>
        <div className={styles.highTempContainer}>
          <ul className={styles.tipList}>
            <li className={styles.card}>
              <FontAwesomeIcon icon={faThermometerThreeQuarters} className={styles.icon1} />
              <h3>Regue no Início da Manhã</h3>
              <p>Regue as plantas cedo para minimizar a evaporação e permitir que absorvam mais água antes do calor intenso.</p>
            </li>
            <li className={styles.card}>
              <FontAwesomeIcon icon={faWater} className={styles.icon1} />
              <h3>Aumente a Frequência de Irrigação</h3>
              <p>Em dias de muito calor, considere aumentar a frequência de irrigação, especialmente para plantas mais sensíveis.</p>
            </li>
            <li className={styles.card}>
              <FontAwesomeIcon icon={faSun} className={styles.icon1} />
              <h3>Proteção contra Luz Solar Direta</h3>
              <p>Utilize sombrites ou materiais de cobertura para proteger as plantas do excesso de luz solar direta.</p>
            </li>
            <li className={styles.card}>
              <FontAwesomeIcon icon={faSeedling} className={styles.icon1} />
              <h3>Mulching</h3>
              <p>Aplicar cobertura morta ajuda a reter a umidade no solo e reduz a temperatura da superfície.</p>
            </li>
          </ul>
        </div>
      </section>
      <br />
      <br />
      <center><h2>Dicas Agro</h2></center>
      <div className={styles.sliderContainer}>
 <center><Slider {...sliderSettings}>
    {agroTips.map((tip, index) => (
      <div key={index} className={styles.sliderItem}>
        <img src={tip.image} alt={`Imagem da ${tip.title}`} className={styles.tipImage} />
        <br />
        <center>
        <div className={styles.tipContent}>
         <center> <FontAwesomeIcon icon={tip.icon} className={styles.icon} /></center>
         <center><h3>{tip.title}</h3></center> 
         <center> <p>{tip.description}</p></center>
        </div></center>
      </div>
    ))}
  </Slider></center> 
</div>

     

      <section className={styles.news}>
        <center><h2>Notícias</h2></center>
        <div className={styles.newsContainer}>
          <div className={styles.newsCard}>
            <img src="https://josecardenas.com/wp-content/uploads/2020/07/1-26.jpg" alt="Notícia 1" className={styles.newsImage} />
            <h3>Colheita Antecipada de Grãos em 2024</h3>
          <center>  <p>A colheita antecipada traz boas perspectivas para o mercado, com aumento na produção de grãos.

</p></center>
          </div>
          <div className={styles.newsCard}>
            <img src="https://avatars.mds.yandex.net/i?id=0977a97f3fa7c154c16565d768bda52628af7a4a-4755486-images-thumbs&n=13" alt="Notícia 2" className={styles.newsImage} />
            <h3>Novas Tecnologias para Irrigação Sustentável</h3>
            <p>A inovação no setor de irrigação promete otimizar o uso de água e aumentar a produtividade agrícola.</p>
          </div>
          <div className={styles.newsCard}>
            <img src="https://avatars.mds.yandex.net/i?id=f09a4296465741d97974569b57a6ff33_l-8899644-images-thumbs&ref=rim&n=13&w=1024&h=683" alt="Notícia 1" className={styles.newsImage} />
            <h3>Soluções Ecológicas para Controle de Pragas</h3>
            <p>Novas técnicas sustentáveis estão substituindo pesticidas químicos no controle de pragas.</p>
          </div>
          <div className={styles.newsCard}>
            <img src="https://s3.forkagro.com/news/post/eTqVJkqfRVeLCoB_z8PRISZdZQS6h1on.png" alt="Notícia 1" className={styles.newsImage} />
            <h3>Aumento da Produção de Alimentos Orgânicos</h3>
            <p>O crescimento do mercado de alimentos orgânicos tem gerado novas oportunidades para os agricultores.</p>
          </div>
          <div className={styles.newsCard}>
            <img src="https://avatars.mds.yandex.net/i?id=d262a264605f98fd072ee76339c46032a4941f8e-5131517-images-thumbs&n=13" alt="Notícia 1" className={styles.newsImage} />
            <h3>A Importância da Agricultura de Precisão</h3>
            <p>O uso de dados e tecnologias permite otimizar recursos e melhorar a produção agrícola.</p>
          </div>
          <div className={styles.newsCard}>
            <img src="https://avatars.mds.yandex.net/i?id=c978c00086c1252966500999f44c4daa3f5dedbc-9858735-images-thumbs&n=13" alt="Notícia 1" className={styles.newsImage} />
            <h3>Mudanças Climáticas Afetam a Produção de Café</h3>
            <p>As variações climáticas têm impactado diretamente o cultivo e a colheita de café no Brasil.

</p>
          </div>
          <div className={styles.newsCard}>
            <img src="https://avatars.mds.yandex.net/i?id=8383144d98d956339d3b527b67018ffb122aff11-9151019-images-thumbs&n=13" alt="Notícia 1" className={styles.newsImage} />
            <h3>Inovações em Fertilizantes para a Agricultura</h3>
            <p>Novos fertilizantes mais eficientes e menos prejudiciais ao meio ambiente estão sendo desenvolvidos.</p>
          </div>
          <div className={styles.newsCard}>
            <img src="https://avatars.mds.yandex.net/i?id=86f5f683e6101b9c102b27cecab1b56339cb963c-8437558-images-thumbs&n=13" alt="Notícia 1" className={styles.newsImage} />
            <h3>A Crescente Demanda por Alimentos Veganos</h3>
            <p>O aumento da procura por produtos veganos está impactando as escolhas agrícolas e produtivas.</p>
          </div>
        </div>
      </section>
      {/* Seção de Contato */}
      <section className={styles.contactSection}>
        <center>
          <h2>Quer que sua notícia ou empresa apareça aqui?</h2>
          <p>Entre em contato conosco para mais informações e parcerias!</p>
          <a href="mailto:contato@seuemail.com" className={styles.contactButton}>Entre em contato</a>
        </center>
      </section>
    </div>
    
  );
};

export default Blog;
