import React, { useState } from "react";
import style from "./EditarPerfil.module.css"; 
import { useNavigate } from 'react-router-dom';

const EditarPerfil = () => {
  const navigate = useNavigate();

  // Estados para armazenar as informações do perfil
  const [nome, setNome] = useState("Nome de usuario"); // Valor inicial pode ser do perfil atual
  const [descricao, setDescricao] = useState("Breve descrição");
  const [fotoPerfil, setFotoPerfil] = useState(null);
  const [fotoCapa, setFotoCapa] = useState(null);
  const [redesSociais, setRedesSociais] = useState({
    whatsapp: "",
    instagram: "",
    facebook: "",
    email: "",
    telefone: ""
  });
  const [principaisProdutos, setPrincipaisProdutos] = useState([{ titulo: "", foto: null }]);
  const [produtosDisponiveis, setProdutosDisponiveis] = useState([{ titulo: "", foto: null }]);

  // Função para adicionar novos produtos/serviços até um limite de 5
  const adicionarProduto = (setProdutos, produtos) => {
    if (produtos.length < 5) {
      setProdutos([...produtos, { titulo: "", foto: null }]);
    }
  };

  // Função para manipular o envio do formulário
  const handleSalvar = () => {
    // Aqui você pode implementar a lógica para salvar as informações do perfil, por exemplo, enviando para uma API
    console.log({
      nome,
      descricao,
      fotoPerfil,
      fotoCapa,
      redesSociais,
      principaisProdutos,
      produtosDisponiveis
    });
    navigate("/perfil"); // Navegar de volta para a página de perfil após salvar
  };

  return (
<>
<br></br><br></br><br></br><br></br>
    <div className={style["container"]}>
      <h1>Editar Perfil</h1>
      
      <label>
        Nome:
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      </label>

      <label>
        Descrição:
        <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      </label>

      <label>
        Foto de Perfil:
        <input type="file" onChange={(e) => setFotoPerfil(e.target.files[0])} />
      </label>

      <label>
        Foto de Capa:
        <input type="file" onChange={(e) => setFotoCapa(e.target.files[0])} />
      </label>

      <h3>Redes Sociais e Contato</h3>
      {Object.keys(redesSociais).map((rede) => (
        <label key={rede}>
          {rede.charAt(0).toUpperCase() + rede.slice(1)}:
          <input
            type="text"
            value={redesSociais[rede]}
            onChange={(e) => setRedesSociais({ ...redesSociais, [rede]: e.target.value })}
          />
        </label>
      ))}

      <h3>Principais Produtos</h3>
      {principaisProdutos.map((produto, index) => (
        <div key={index} className={style["produto-item"]}>
          <input
            type="text"
            placeholder="Título do Produto"
            value={produto.titulo}
            onChange={(e) => {
              const novosProdutos = [...principaisProdutos];
              novosProdutos[index].titulo = e.target.value;
              setPrincipaisProdutos(novosProdutos);
            }}
          />
          <input
            type="file"
            onChange={(e) => {
              const novosProdutos = [...principaisProdutos];
              novosProdutos[index].foto = e.target.files[0];
              setPrincipaisProdutos(novosProdutos);
            }}
          />
        </div>
      ))}
      <button onClick={() => adicionarProduto(setPrincipaisProdutos, principaisProdutos)}>
        Adicionar Produto
      </button>

      <h3>Produtos Disponíveis</h3>
      {produtosDisponiveis.map((produto, index) => (
        <div key={index} className={style["produto-item"]}>
          <input
            type="text"
            placeholder="Título do Produto"
            value={produto.titulo}
            onChange={(e) => {
              const novosProdutos = [...produtosDisponiveis];
              novosProdutos[index].titulo = e.target.value;
              setProdutosDisponiveis(novosProdutos);
            }}
          />
          <input
            type="file"
            onChange={(e) => {
              const novosProdutos = [...produtosDisponiveis];
              novosProdutos[index].foto = e.target.files[0];
              setProdutosDisponiveis(novosProdutos);
            }}
          />
        </div>
      ))}
      <button className={style["btn-adicionar"]} onClick={() => adicionarProduto(setProdutosDisponiveis, produtosDisponiveis)}>
        Adicionar Produto
      </button>

      <button onClick={handleSalvar} className={style["btn-salvar"]}>Salvar Alterações</button>
    </div></>
  );
};

export default EditarPerfil;