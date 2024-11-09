import React, { useRef } from 'react';
import style from './Sobre.module.css';
import Sobre from "../../components/Sobre/Sobre"; // Importando o componente Sobre

// Dados dos desenvolvedores
const developers = [
  {
    name: "Victoria Da Silva",
    role: "Engenheira De Negócios",
    image: "/img/vic.jpeg", // Caminho para a foto do desenvolvedor
  },
  {
    name: "Kamily Simeão",
    role: "Dev Dados",
    image: "/img/kamily.jpg", // Caminho para a foto do desenvolvedor
  },
  {
    name: "Daniel Manoel",
    role: "Dev Back-end",
    image: "/img/daniel.jpg", // Caminho para a foto do desenvolvedor
  },
];

const SobrePage = () => {  // Renomeei o componente para evitar o conflito de nomes
  const sobreRef = useRef(null); // Use o useRef para controlar o foco ou a rolagem se necessário.

  return (
    <div className={style.sobreContainer}>
      {/* Seção de introdução sobre a empresa */}
      <h1 className={style.title}>Sobre Nós</h1>
      <p className={style.description}>
        Bem-vindo à nossa plataforma agro! Aqui, conectamos pessoas do setor agrícola, promovendo colaboração e
        desenvolvimento de soluções inovadoras para o agronegócio.
      </p>
      <p className={style.description}>
        Nossa missão é facilitar o acesso à informação e proporcionar uma rede de apoio para profissionais,
        agricultores e entusiastas da agricultura. Participe e faça parte dessa comunidade!
      </p>

      {/* Chama o componente Sobre, que você já tem criado na pasta components */}
      <div ref={sobreRef}>
        <Sobre />
      </div>

      {/* Seção de desenvolvedores */}
      <h2 className={style.developersTitle}>Desenvolvedores</h2>
      <div className={style.developersContainer}>
        {developers.map((developer, index) => (
          <div key={index} className={style.developerCard}>
            <img src={developer.image} alt={developer.name} className={style.developerImage} />
            <h3 className={style.developerName}>{developer.name}</h3>
            <p className={style.developerRole}>{developer.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SobrePage;  // Não se esqueça de exportar o componente com o novo nome
