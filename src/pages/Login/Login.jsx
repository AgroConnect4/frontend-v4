import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Notificacao from '../../components/Notificacao/Notificacao'; // Importe o componente de notificação
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
  const [form, setForm] = useState({
    email: '',
    senha: '',
    lembrarMe: false // Novo estado para lembrar-me
  });

  const [notificacao, setNotificacao] = useState(null); // Estado de notificação

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setForm({ ...form, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, form.email, form.senha);
      setNotificacao({ tipo: 'sucesso', mensagem: 'Login realizado com sucesso!' });

      // Redireciona para o perfil após 2 segundos (para visualizar a notificação)
      setTimeout(() => {
        navigate('/perfil');
      }, 2000);
    } catch (error) {
      setNotificacao({ tipo: 'erro', mensagem: 'Email ou senha incorretos. Por favor, tente novamente.' });

      // Limpa a notificação após um período de tempo
      setTimeout(() => {
        setNotificacao(null);
      }, 5000); // Tempo em milissegundos (5 segundos neste exemplo)
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
          {notificacao && <Notificacao tipo={notificacao.tipo} mensagem={notificacao.mensagem} />} {/* Exibição da notificação */}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className={`form-control ${styles.inputField} ${form.email ? styles['input-valid'] : styles['input-invalid']}`}
              required
            />
            {form.email && <FontAwesomeIcon icon={faCheckCircle} className={styles["icon-valid"]} />}
            {!form.email && <FontAwesomeIcon icon={faExclamationCircle} className={styles["icon-invalid"]} />}
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              value={form.senha}
              onChange={handleChange}
              className={`form-control ${styles.inputField} ${form.senha ? styles['input-valid'] : styles['input-invalid']}`}
              required
            />
            {form.senha && <FontAwesomeIcon icon={faCheckCircle} className={styles["icon-valid"]} />}
            {!form.senha && <FontAwesomeIcon icon={faExclamationCircle} className={styles["icon-invalid"]} />}
            <div className="form-check mb-3">
              <input
                type="checkbox"
                id="lembrarMe"
                name="lembrarMe"
                checked={form.lembrarMe}
                onChange={handleChange}
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="lembrarMe">
                Lembrar-me
              </label>
            </div>
            <div className={styles.buttonContainer}>
              <button type="submit" className={`btn ${Botaogeral['btn-primary']}`}>
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
