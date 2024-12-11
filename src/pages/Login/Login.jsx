import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { auth } from '../../Firebase/Firebaseconfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'; // Importe os ícones do FontAwesome
import 'bootstrap/dist/css/bootstrap.min.css';
import Botaogeral from '../Botaogeral.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loggingIn, setLoggingIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoggingIn(true);

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
    } finally {
      setLoggingIn(false);
    }
  };

  const handleRegisterClick = () => {
    navigate('/cadastro');
  };

  return (
    <div className={styles.containerLogin}>
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <h2 className={styles.formTitle}>Use uma conta para entrar.</h2>
          <hr className={styles.hrStyle} />
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.inputField}
              autoComplete="off"
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.inputField}
              autoComplete="off"
              required
            />
            <div className={styles.buttonContainer}> {/* Use your existing button container */}
              <button
                type="submit"
                className={`${styles['btn-primary']}`}
                disabled={loggingIn}
              >
                {loggingIn ? 'Logando...' : 'Log in'}
              </button>
            </div>
          </form>
          <div className={styles.loginLinkContainer}>
            <a href="#" className={styles.loginLink}>
              Esqueceu sua senha?
            </a>
            <a href="#" className={styles.loginLink} onClick={handleRegisterClick}>
              Cadastrar-se
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Login;