import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Perfil.module.css";
import BotaoTopo from "../../components/BotaoTopo/BotaoTopo";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Perfil = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("/img/profile-photo.jpg");
  const [coverPhoto, setCoverPhoto] = useState("/img/cover-photo.jpg");
  const [bannerPhoto, setBannerPhoto] = useState("/img/banner.jpg");
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("kamily simeao");
  const [description, setDescription] = useState("ooooi kskshhrhrhrhieiduydud");

  const handleProfilePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePhoto(URL.createObjectURL(file));
    }
  };

  const handleCoverPhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCoverPhoto(URL.createObjectURL(file));
    }
  };

  const handleBannerPhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBannerPhoto(URL.createObjectURL(file));
    }
  };

  const handleCriarClick = () => {
    navigate("/criar");
  };

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.banner}>
          <label htmlFor="banner-upload" className={style.bannerPhotoLabel}>
            <img className={style.bannerPhoto} src={bannerPhoto} alt="Banner do perfil" />
          </label>
          <input
            type="file"
            id="banner-upload"
            style={{ display: "none" }}
            onChange={handleBannerPhotoUpload}
            accept="image/*"
          />
          <label htmlFor="cover-upload" className={style.coverPhotoLabel}>
            <img className={style.coverPhoto} src={coverPhoto} alt="Capa do perfil" />
          </label>
          <input
            type="file"
            id="cover-upload"
            style={{ display: "none" }}
            onChange={handleCoverPhotoUpload}
            accept="image/*"
          />
          <div className={style.profilePhotoContainer}>
            <label htmlFor="profile-upload">
              <img className={style.profilePhoto} src={profilePhoto} alt="Foto de perfil" />
            </label>
            <input
              type="file"
              id="profile-upload"
              style={{ display: "none" }}
              onChange={handleProfilePhotoUpload}
              accept="image/*"
            />
          </div>
          <img
            className={style.editIcon}
            src="/img/edit-icon.png"
            alt="Editar perfil"
            onClick={toggleEditing}
          />
        </div>

        <div className={style.profileInfo}>
          {isEditing ? (
            <>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className={style.editInput}
              />
              <textarea
                value={description}
                onChange={handleDescriptionChange}
                className={style.editTextarea}
              />
              <button onClick={toggleEditing} className={style.saveButton}>
                Salvar
              </button>
            </>
          ) : (
            <>
              <h1 className={style.userName}>{name}</h1>
              {/* Botão de Conectar */}
              <button className={style.connectButton}>
                <FontAwesomeIcon icon={faPlus} /> Conectar
              </button>
            </>
          )}
        </div>

        <div className={style.aboutSection}>
          <p>
            {isExpanded ? description : description.slice(0, 50) + "..."}
          </p>
          <button onClick={toggleText} className={style.readMoreBtn}>
            {isExpanded ? "Ler menos" : "Ler mais"}
          </button>
        </div>

        <div className={style.postsSection}>
          <h2>Postagens</h2>
          {/* Botão "Criar publicação" dentro da seção de postagens */}
          <button onClick={handleCriarClick} className={style.criarButton}>
            Criar publicação
          </button>
          <div className={style.post}>
            <div className={style.postHeader}>
              <img src={profilePhoto} alt="Foto de perfil" />
              <div>
                <h3>{name}</h3>
                <p>09/09/09</p>
              </div>
            </div>
            <p>Conteúdo da postagem...</p>
            <img src="https://avatars.mds.yandex.net/i?id=8ddad3eb1a86cab8fcf8fef40262d064cb252527-7716570-images-thumbs&n=13" alt="" />
          </div>
        </div>
      </div>

      <BotaoTopo />
      <Footer />
    </>
  );
};

export default Perfil;
