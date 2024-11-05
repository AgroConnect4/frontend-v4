import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Notificacao from '../../components/Notificacao/Notificacao'; // Importe o componente de notificação
import styles from './Cadastro.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'; // Importe os ícones do FontAwesome
import 'bootstrap/dist/css/bootstrap.min.css';
import Botaogeral from '../Botaogeral.module.css'

function SignupForm() {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    email: '',
    cnpjCpf: '',
    senha: '',
    confirmarSenha: ''
  });

  const [notificacao, setNotificacao] = useState(null);
  const [senhaValida, setSenhaValida] = useState(true);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSenhaChange = (e) => {
    const { value } = e.target;
    const confirmarSenha = form.confirmarSenha;
    setForm({ ...form, senha: value });
    setSenhaValida(value === confirmarSenha);
  };

  const handleConfirmarSenhaChange = (e) => {
    const { value } = e.target;
    const senha = form.senha;
    setForm({ ...form, confirmarSenha: value });
    setSenhaValida(value === senha);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    // Simulando uma resposta de sucesso
    setNotificacao({ tipo: 'sucesso', mensagem: 'Solicitação de cadastro enviada com sucesso!' });

    // Simulando uma resposta de erro (descomente para testar):
    // setNotificacao({ tipo: 'erro', mensagem: 'Erro ao enviar a solicitação de cadastro.' });
  };

  return (
    <div className={styles.containerLogin}>
      <div className={styles.container}>
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Criar uma nova conta</h2>
            <hr />

            {notificacao && <Notificacao tipo={notificacao.tipo} mensagem={notificacao.mensagem} />}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  value={form.nome}
                  onChange={handleChange}
                  className={`form-control ${styles.inputField}`}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="telefone"
                  placeholder="Telefone"
                  value={form.telefone}
                  onChange={handleChange}
                  className={`form-control ${styles.inputField}`}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className={`form-control ${styles.inputField} ${form.email && styles['input-valid']} ${!form.email && styles['input-invalid']}`}
                  required
                />
                {form.email && <FontAwesomeIcon icon={faCheckCircle} className={styles["icon-valid"]} />}
                {!form.email && <FontAwesomeIcon icon={faExclamationCircle} className={styles["icon-invalid"]} />}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="cnpjCpf"
                  placeholder="CNPJ/CPF"
                  value={form.cnpjCpf}
                  onChange={handleChange}
                  className={`form-control ${styles.inputField}`}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  value={form.senha}
                  onChange={handleSenhaChange}
                  className={`form-control ${styles.inputField} ${senhaValida && styles['input-valid']} ${!senhaValida && styles['input-invalid']}`}
                  required
                />
                {senhaValida && <FontAwesomeIcon icon={faCheckCircle} className={styles["icon-valid"]} />}
                {!senhaValida && <FontAwesomeIcon icon={faExclamationCircle} className={styles["icon-invalid"]} />}
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="confirmarSenha"
                  placeholder="Confirmar senha"
                  value={form.confirmarSenha}
                  onChange={handleConfirmarSenhaChange}
                  className={`form-control ${styles.inputField} ${senhaValida && styles['input-valid']} ${!senhaValida && styles['input-invalid']}`}
                  required
                />
                {senhaValida && <FontAwesomeIcon icon={faCheckCircle} className={styles["icon-valid"]} />}
                {!senhaValida && <FontAwesomeIcon icon={faExclamationCircle} className={styles["icon-invalid"]} />}
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className={Botaogeral['btn-primary']}>
                  Cadastrar-se
                </button>
              </div>
            </form>
            <div className="mt-3">
              <a href="#" onClick={handleLoginClick}>
                Já possui conta? <span className="text-primary">Faça login</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
