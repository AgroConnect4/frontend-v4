import React, { useState } from "react";
import style from "./EditarPerfil.module.css";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const EditarPerfil = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [profilePictureBase64, setProfilePictureBase64] = useState(null);
const [coverPictureBase64, setCoverPictureBase64] = useState(null);
  const [productsOffered, setProductsOffered] = useState([{ titulo: "" }]);
  const [certifications, setCertifications] = useState([{ titulo: "" }]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(""); // Added phone number state
  const [website, setWebsite] = useState(""); // Added website state

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePictureBase64(reader.result); // O conteúdo Base64 da imagem
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleCoverPictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverPictureBase64(reader.result); // O conteúdo Base64 da imagem
      };
      reader.readAsDataURL(file);
    }
  };

  const adicionarProduto = () => {
    setProductsOffered([...productsOffered, { titulo: "" }]);
  };

  const adicionarCertificacao = () => {
    setCertifications([...certifications, { titulo: "" }]);
  };

  const handleSalvar = async () => {
    setSaving(true);
    setError(null);
  
    const token = sessionStorage.getItem('token');
  
    if (!token) {
      setError('Você precisa estar logado para editar o seu perfil.');
      setSaving(false);
      return;
    }
  
    try {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
  
      if (!userId) {
        setError('Não foi possível recuperar o ID do usuário.');
        setSaving(false);
        return;
      }
  
      const profileData = {
        name: nome,
        bio: descricao,
        profilePicture: profilePictureBase64 || "", // Se não houver imagem, envia uma string vazia
        coverPicture: coverPictureBase64 || "", // Se não houver imagem, envia uma string vazia
        description: descricao || "", // Se descrição estiver vazia, envia uma string vazia
        phoneNumber: phoneNumber || "", // Se o número de telefone estiver vazio, envia uma string vazia
        website: website || "", // Se o site estiver vazio, envia uma string vazia
        certifications: certifications.length > 0 ? certifications.map(cert => cert.titulo) : [""],
        productsOffered: productsOffered.length > 0 ? productsOffered.map(prod => prod.titulo) : [""]
      };   
  
      // Adicionando um log para verificar os dados antes de enviar
      console.log('Dados enviados:', JSON.stringify(profileData));
  
      const response = await fetch(`https://localhost:7297/api/UserProfile/${userId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.message || 'Erro ao salvar perfil';
        setError(errorMessage);
        throw new Error(errorMessage);
      }
  
      navigate("/perfil");
    } catch (error) {
      setError(error.message);
      console.error("Error saving profile:", error);
    } finally {
      setSaving(false);
    }
  };
  
  

  return (
    <>
      <div className={style["container"]}>
        <h1>Editar Perfil</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        {saving && <div className="alert alert-info">Salvando...</div>}

        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>

        <label>
          Descrição:
          <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} />
        </label>

        <label>
          Número de Telefone:
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>

        <label>
          Website:
          <input type="url" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </label>


        <label>
          Foto de Perfil:
          <input type="file" onChange={handleProfilePictureChange} />
          <img src={profilePictureBase64} alt="Foto de perfil" width="100" />
        </label>

        <label>
          Foto de Capa:
          <input type="file" onChange={handleCoverPictureChange} />
          <img src={coverPictureBase64} alt="Foto de capa" width="100" />
        </label>

        <h3>Produtos Oferecidos</h3>
        {productsOffered.map((produto, index) => (
          <div key={index} className={style["produto-item"]}>
            <input
              type="text"
              placeholder="Título do Produto"
              value={produto.titulo}
              onChange={(e) => {
                const novosProdutos = [...productsOffered];
                novosProdutos[index].titulo = e.target.value;
                setProductsOffered(novosProdutos);
              }}
            />
          </div>
        ))}
        <button onClick={adicionarProduto}>Adicionar Produto</button>

        <h3>Certificações</h3>
        {certifications.map((cert, index) => (
          <div key={index} className={style["produto-item"]}>
            <input
              type="text"
              placeholder="Título da Certificação"
              value={cert.titulo}
              onChange={(e) => {
                const novasCerts = [...certifications];
                novasCerts[index].titulo = e.target.value;
                setCertifications(novasCerts);
              }}
            />
          </div>
        ))}
        <button onClick={adicionarCertificacao}>Adicionar Certificação</button>

        <button onClick={handleSalvar} className={style["btn-salvar"]}>Salvar Alterações</button>
      </div>
    </>
  );
};

export default EditarPerfil;