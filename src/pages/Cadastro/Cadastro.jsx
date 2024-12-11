import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Cadastro.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Botaogeral from '../Botaogeral.module.css';

function SignupForm() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [notificacao, setNotificacao] = useState(null);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setPasswordsMatch(name !== 'confirmPassword' || form.password === value);
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormErrors({});

    // Client-side password validation
    if (!passwordsMatch) {
      setFormErrors({ confirmPassword: 'Senhas não conferem.' });
      setIsLoading(false);
      return;
    }

    // Basic empty field validation
    if (form.username.trim() === '' || form.email.trim() === '' || form.password.trim() === '') {
      setFormErrors({
        username: form.username.trim() === '' ? 'Nome de Usuário obrigatório' : '',
        email: form.email.trim() === '' ? 'Email obrigatório' : '',
        password: form.password.trim() === '' ? 'Senha obrigatória' : ''
      });
      setIsLoading(false);
      return;
    }


    try {
      const response = await fetch('https://localhost:7297/api/Auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: form.username, email: form.email, password: form.password }),
      });

      if (response.ok) {
        const data = await response.json();
        setNotificacao({ tipo: 'sucesso', mensagem: data.message || 'Cadastro realizado com sucesso!' });
        navigate('/login');
      } else if (response.status === 400) {
        const errorData = await response.json();
        let errorMessage = '';
        if (errorData.errors && Array.isArray(errorData.errors)) {
          errorMessage = errorData.errors.join('\n');
        } else if (errorData.message) {
          errorMessage = errorData.message;
        } else {
          errorMessage = 'Erro no cadastro.';
        }
        setFormErrors({ general: errorMessage });
      } else if (response.status === 409) {
        setFormErrors({ general: "Email já cadastrado." });
      } else {
        setFormErrors({ general: `Erro no servidor. Código de status: ${response.status}` });
      }
    } catch (error) {
      setFormErrors({ general: 'Erro inesperado. Por favor, tente novamente.' });
      console.error("Error during registration:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.containerLogin}>
      <div className={`card ${styles.card}`}>
        <div className={`card-body ${styles.cardBody}`}>
          <h2 className={styles.formTitle}>Criar uma nova conta</h2>
          <hr className={styles.hrStyle} />
          {notificacao && (
            <div className={`alert alert-${notificacao.tipo}`}>
              {notificacao.mensagem}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3"> {/* Bootstrap spacing */}
              <label htmlFor="username" className="form-label">Nome de Usuário</label> {/* Added label */}
              <input
                type="text"
                id="username" 
                name="username"
                placeholder="Nome de Usuário"
                value={form.username}
                onChange={handleChange}
                className={`form-control ${styles.inputField} ${formErrors.username && styles['input-invalid']}`}
                required
              />
              {formErrors.username && <span className={styles['error-message']}>{formErrors.username}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label> {/* Added label */}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className={`form-control ${styles.inputField} ${formErrors.email && styles['input-invalid']}`}
                required
              />
              {formErrors.email && <span className={styles['error-message']}>{formErrors.email}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Senha</label> {/* Added label */}
              <input
                type="password"
                id="password" 
                name="password"
                placeholder="Senha"
                value={form.password}
                onChange={handleChange}
                className={`form-control ${styles.inputField} ${formErrors.password && styles['input-invalid']}`}
                required
              />
              {formErrors.password && <span className={styles['error-message']}>{formErrors.password}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirmar Senha</label> {/* Added label */}
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirmar Senha"
                value={form.confirmPassword}
                onChange={handleChange}
                className={`form-control ${styles.inputField} ${!passwordsMatch && styles['input-invalid']}`}
                required
              />
              {!passwordsMatch && <span className={styles['error-message']}>Senhas não conferem.</span>}
            </div>
            <div className={styles.buttonContainer}>
              <button type="submit" className={`${styles['btn-primary']} ${isLoading ? styles['loading-button'] : ''}`} disabled={isLoading}>
                {isLoading ? 'Cadastrando...' : 'Cadastrar-se'}
              </button>
            </div>
          </form>
          <div className={styles.loginLinkContainer}>
            <a href="#" onClick={handleLoginClick}>Já possui conta? <span className="text-primary">Faça login</span></a>
          </div>
          {formErrors.general && <div className="alert alert-danger mt-3">{formErrors.general}</div>}
        </div>
      </div>
    </div>
  );
}

export default SignupForm;