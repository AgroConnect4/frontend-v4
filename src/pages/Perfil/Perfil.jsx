import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Perfil.module.css";
import BotaoTopo from "../../components/BotaoTopo/BotaoTopo";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Perfil = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');
  const [profilePhotoFile, setProfilePhotoFile] = useState(null); // Add state for file
  const [coverPhoto, setCoverPhoto] = useState('');
  const [coverPhotoFile, setCoverPhotoFile] = useState(null); // Add state for file
  const [bannerPhoto, setBannerPhoto] = useState('');
  const [bannerPhotoFile, setBannerPhotoFile] = useState(null);


  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const jwtToken = sessionStorage.getItem('token');

        if (!jwtToken) {
          navigate('/login');
          return;
        }

        const base64Url = jwtToken.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        const payload = JSON.parse(jsonPayload);
        const userId = payload.sub; 

        const response = await fetch(`https://localhost:7297/api/UserProfile/${userId}`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });

        if (!response.ok) {
          //Improved error handling
          if (response.status === 401) {
            sessionStorage.removeItem('token'); 
            navigate('/login');
            return;
          } else if (response.status === 404){
            setError("Usuário não encontrado");
            return;
          }
          const errorData = await response.json();
          throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setUserProfile(data);
        setName(data.name || "");
        setDescription(data.description || "");
        setProfilePhoto(data.profilePicture || '/default-profile.jpg');
        setCoverPhoto(data.coverPicture || '/default-cover.jpg');
        setBannerPhoto(data.bannerPicture || '/default-banner.jpg');

      } catch (error) {
        setError(error);
        console.error("Error fetching user profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [navigate]);

  const handleNameChange = (e) => setName(e.target.value);
  
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  
  const handleProfilePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result.split(',')[1]; // Extract the Base64 data
        // Update profile data  (this is important, you are changing the image in the existing object).
        const updatedUserProfile = {...userProfile, profilePicture: base64String};
      }
    }
  }
  
  const handleCoverPhotoUpload = (e) => {
    setCoverPhotoFile(e.target.files[0]);
    const reader = new FileReader();
    reader.onloadend = () => {
      setCoverPhoto(reader.result);
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleBannerPhotoUpload = (e) => {
    setBannerPhotoFile(e.target.files[0]);
    const reader = new FileReader();
    reader.onloadend = () => {
      setBannerPhoto(reader.result);
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSave = async () => {
    try {
      const jwtToken = sessionStorage.getItem('token');
      const base64Url = jwtToken.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      const payload = JSON.parse(jsonPayload);
      const userId = payload.sub;

      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      if (profilePhotoFile) formData.append('profilePicture', profilePhotoFile);
      if (coverPhotoFile) formData.append('coverPicture', coverPhotoFile);
      if (bannerPhotoFile) formData.append('bannerPicture', bannerPhotoFile);


      const response = await fetch(`https://localhost:7297/api/UserProfile/${userId}`, {
        method: 'PUT', // or PATCH
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const updatedData = await response.json();
      setUserProfile(updatedData);
      setIsEditing(false);
      // ... optional success message
    } catch (error) {
      setError(error);
      console.error("Error saving user profile:", error);
      // ... optional error handling, e.g., display an alert
    }
  };



  const toggleEditing = () => setIsEditing(!isEditing);
  const toggleText = () => setIsExpanded(!isExpanded);

  const handleCriarClick = () => {
    // Navigate to create post page or handle create post logic here
    navigate('/criar');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!userProfile) {
    return <div>No user profile found.</div>;
  }

  return (
    <>
      <div className={style.container}> {/* Assuming you have a style object defined */}
        {/* ... rest of your JSX using userProfile data ... */}
        <div className={style.banner}>
          <label htmlFor="banner-upload" className={style.bannerPhotoLabel}>
            <img className={style.bannerPhoto} src={bannerPhoto} alt="Banner do perfil" />
          </label>
          <input type="file" id="banner-upload" style={{ display: "none" }} onChange={handleBannerPhotoUpload} accept="image/*" />
          {/* ...similarly for coverPhoto and profilePhoto */}

          <div className={style.profilePhotoContainer}>
            <label htmlFor="profile-upload">
              <img className={style.profilePhoto} src={profilePhoto} alt="Foto de perfil" />
            </label>
            <input type="file" id="profile-upload" style={{ display: "none" }} onChange={handleProfilePhotoUpload} accept="image/*" />
          </div>
          <img className={style.editIcon} src="/img/edit-icon.png" alt="Editar perfil" onClick={toggleEditing} />
        </div>

        <div className={style.profileInfo}>
          {isEditing ? (
            <>
              <input type="text" value={name} onChange={handleNameChange} className={style.editInput} />
              <textarea value={description} onChange={handleDescriptionChange} className={style.editTextarea} />
              <button onClick={toggleEditing} className={style.saveButton}>Salvar</button>
            </>
          ) : (
            <>
              <h1 className={style.userName}>{name}</h1>
              <button className={style.connectButton}>
                <FontAwesomeIcon icon={faPlus} /> Conectar
              </button>
            </>
          )}
        </div>

        <div className={style.aboutSection}>
          <p>{isExpanded ? description : description.slice(0, 50) + "..."}</p>
          <button onClick={toggleText} className={style.readMoreBtn}>{isExpanded ? "Ler menos" : "Ler mais"}</button>
        </div>

        <div className={style.postsSection}>
          <h2>Postagens</h2>
          <button onClick={handleCriarClick} className={style.criarButton}>Criar publicação</button>
          {/* ... display posts ... */}
        </div>
      </div>

      {/* ... BotaoTopo and Footer components ... */}
    </>
  );
};

export default Perfil;