import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Botaogeral from '../Botaogeral.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('https://localhost:7297/api/Auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Email ou senha incorretos. Por favor, tente novamente.");
        } else {
          const errorData = await response.json();
          const errorMessage = errorData.errors ? errorData.errors.join(', ') : (errorData.message || "Um erro ocorreu. Tente novamente mais tarde.");
          throw new Error(errorMessage);
        }
      }

      const data = await response.json();
      const token = data.token;
      sessionStorage.setItem('token', token);
      navigate('/perfil');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegisterClick = () => {
    navigate('/cadastro');
  };

  return (
    <div className={styles.containerLogin}>
      <div className={`card ${styles.card}`}>
        <div className={`card-body ${styles.cardBody}`}>
          <h2 className={styles.formTitle}>Use uma conta para entrar.</h2>
          <hr className={styles.hrStyle} />
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${styles.inputField}`}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`${styles.inputField}`}
              required
            />
            <div className={styles.buttonContainer}>
              <button type="submit" className={`${styles['btn-primary']}`}>
                Log in
              </button>
            </div>
          </form>
          <div className={styles.loginLinkContainer}>
            <a href="#" className={styles.loginLink}>
              <span>Esqueceu sua senha?</span>
            </a>
            <a href="#" className={styles.loginLink} onClick={handleRegisterClick}>
              <span>Cadastrar-se</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;