import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './NavBar.module.css';
import { useAuth } from '../../Firebase/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase/Firebaseconfig';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const location = useLocation();

  const toggleMenuVisibility = () => {
    setMenuVisible(!menuVisible);
  };

  const handleScrollToSobre = () => {
    // Redirecionar diretamente para a página /sobre
    navigate('/sobre');
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `navbar fixed-top navbar-expand-lg navbar-light bg-light ${scrolled ? styles.scrolled : ''}`;

  return (
    <nav className={navbarClasses}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="/img/logo.png" alt="Logo" className={styles.navbarLogo} />
          Agroconnect
        </a>
        <button className="navbar-toggler" type="button" onClick={toggleMenuVisibility}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${menuVisible ? 'show' : ''}`}>
          <div className="mx-auto d-flex align-items-center justify-content-center">
            <ul className={`navbar-nav ${styles.menu}`}>
              <li className={`nav-item ${styles.navItem}`}>
                <NavLink className={({ isActive }) => isActive ? `${styles.active} nav-link` : 'nav-link'} to="/">
                  <i className={`fas fa-home ${styles.iconLarge}`}></i> Home
                </NavLink>
              </li>
              <li className={`nav-item ${styles.navItem}`}>
                <span className="nav-link" onClick={handleScrollToSobre} style={{ cursor: 'pointer' }}>
                  <i className={`fas fa-info-circle ${styles.iconLarge}`}></i> Sobre
                </span>
              </li>
              <li className={`nav-item ${styles.navItem}`}>
                <NavLink className={({ isActive }) => isActive ? `${styles.active} nav-link` : 'nav-link'} to="/eventos">
                  <i className={`fas fa-calendar-alt ${styles.iconLarge}`}></i> Eventos
                </NavLink>
              </li>
              <li className={`nav-item ${styles.navItem}`}>
                <NavLink className={({ isActive }) => isActive ? `${styles.active} nav-link` : 'nav-link'} to="/blog">
                  <i className={`fas fa-pencil-alt ${styles.iconLarge}`}></i> Blog
                </NavLink>
              </li>
              {!currentUser && (
                <li className={`nav-item ${styles.navItem}`}>
                  <NavLink className={({ isActive }) => isActive ? `${styles.active} nav-link` : 'nav-link'} to="/login">
                    <i className={`fas fa-sign-in-alt ${styles.iconLarge}`}></i> Login
                  </NavLink>
                </li>
              )}
              {currentUser && (
                <>
                  <li className={`nav-item ${styles.navItem}`}>
                    <NavLink className={({ isActive }) => isActive ? `${styles.active} nav-link` : 'nav-link'} to="/perfil">
                      <i className={`fas fa-user ${styles.iconLarge}`}></i> Perfil
                    </NavLink>
                  </li>
                  <li className={`nav-item ${styles.navItem}`}>
                    <button className="nav-link btn" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                      <i className={`fas fa-sign-out-alt ${styles.iconLarge}`}></i> Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
          <form className="d-flex ms-auto">
            <input className="form-control me-2" type="search" placeholder="Pesquisar..." aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              <i className={`fas fa-search ${styles.iconLarge}`}></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
