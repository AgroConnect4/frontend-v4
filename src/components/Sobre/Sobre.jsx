import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Sobre.module.css"; 
import { logEvent } from '../../GoogleAnalytics/analytics'; 

const Sobre = () => {
    return (
        <div className="container text-center"> {/* Centraliza o conteúdo na tela */}
            <div className="row">
                <div className="col-lg-8 offset-lg-2"> {/* Centraliza a coluna dentro da tela */}
                    <h1>Sobre nós</h1>
                    <h3>Conectando o Agronegócio</h3>
                    <ul>
                        <li>
                            <img src="../../../public/img/CONECTAR.png" alt="" className={`${style["sobre-icon"]} ${style.greenIcon}`} />
                            O Agroconnect é seu portal para oportunidades no campo agrícola. 
                            Parceiros podem anunciar ofertas, enquanto usuários exploram soluções para 
                            suas necessidades agrícolas.
                        </li>
                        <li>
                            <img src="../../../public/img/maoplanta.png" alt="" className={`${style["sobre-icon"]} ${style.greenIcon}`} />
                            O que oferecemos: 
                            <ul>
                                <li>Divulgação Eficiente: Parceiros anunciam suas ofertas.</li>
                                <li>Exploração Simplificada: Usuários encontram suas soluções.</li>
                            </ul>
                        </li>
                        <li>
                            <img src="../../../public/img/two-friends.png" alt="" className={`${style["sobre-icon"]} ${style.greenIcon}`} />
                            Nossa abordagem:
                            <ul>
                                <li>Centrada no Usuário: Facilitamos interações e transações.</li>
                                <li>Transparência e Confiança: Garantimos informações confiáveis.</li>
                            </ul>
                        </li>
                        <li>
                            <img src="../../../public/img/PLATAFORMA.png" alt="" className={`${style["sobre-icon"]} ${style.greenIcon}`} />
                            Como funciona:
                            <ul>
                                <li>Publicações dos parceiros: Parceiros criam e compartilham conteúdos.</li>
                                <li>Torne-se um Parceiro: Empresas rurais têm acesso a essas funcionalidades.</li>
                            </ul>
                        </li>
                        <li>
                            <img src="../../../public/img/junte-se.png" alt="" className={`${style["sobre-icon"]} ${style.greenIcon}`} />
                            Junte-se a nós! 
                            <p>
                                Faça parte de uma comunidade vibrante e crescente no 
                                setor agrícola.
                            </p>
                        </li>
                        <p><strong>Para se tornar parceiro <Link to="/login" style={{ color: 'black', textDecoration: 'underline' }} onClick={() => logEvent('Link', 'Clique Aqui')}>Clique aqui!</Link></strong></p>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sobre;
