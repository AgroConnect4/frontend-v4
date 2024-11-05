import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Sobre.module.css"; 
import { logEvent } from '../../GoogleAnalytics/analytics'; 

const Sobre = () => {
    return (
        <div className={`container ${style["sobre-background"]}`}>
            <div className="row">
                <div className="col-lg-8">
                    <h1>Sobre nós</h1>
                    <h3>Conectando o Agronegócio</h3>
                    <ul>
                        <li>
                            <img src="../../../public/img/CONECTAR.png" alt="" className={style["sobre-icon"]} />
                            O Agroconnect é seu portal para oportunidades no campo agrícola. 
                            Parceiros podem anunciar ofertas, enquanto usuários exploram soluções para 
                            suas necessidades agrícolas.
                        </li>
                        <li>
                            <img src="../../../public/img/maoplanta.png" alt="" className={style["sobre-icon"]} />
                            O que oferecemos: 
                            <ul>
                                <li>Divulgação Eficiente: Parceiros anunciam suas ofertas.</li>
                                <li>Exploração Simplificada: Usuários encontram suas soluções.</li>
                            </ul>
                        </li>
                        <li>
                            <img src="../../../public/img/two-friends.png" alt="" className={style["sobre-icon"]} />
                            Nossa abordagem:
                            <ul>
                                <li>Centrada no Usuário: Facilitamos interações e transações.</li>
                                <li>Transparência e Confiança: Garantimos informações confiáveis.</li>
                            </ul>
                        </li>
                        <li>
                            <img src="../../../public/img/PLATAFORMA.png" alt="" className={style["sobre-icon"]} />
                            Como funciona:
                            <ul>
                                <li>Publicações dos parceiros: Parceiros criam e compartilham conteúdos.</li>
                                <li>Torne-se um Parceiro: Empresas rurais têm acesso a essas funcionalidades.</li>
                            </ul>
                        </li>
                        <li>
                            <img src="../../../public/img/junte-se.png" alt="" className={style["sobre-icon"]} />
                            Junte-se a nós! 
                            <p>
                                Faça parte de uma comunidade vibrante e crescente no 
                                setor agrícola.
                            </p>
                        </li>
                        <p><strong>Para se tornar parceiro <Link to="/login" style={{ color: 'black', textDecoration: 'underline' }} onClick={() => logEvent('Link', 'Clique Aqui')}>Clique aqui!</Link></strong></p>
                    </ul>
                </div>
                <div className={`col-lg-4 ${style["dev-background"]}`}>
                    <center> <h3>EQUIPE DEV</h3></center>
                    <ul className={style["team-agroconnect-vertical"]}>
                        <li>
                            <h4>SCRUM MASTER</h4>
                            <img src="../../../public/img/vic.jpeg" alt="" className={style["dev-img"]} />
                            <p>Victoria</p>
                        </li>
                        <li>
                            <h4>DEVELOPER</h4>
                            <img src="../../../public/img/kamy (1).jpeg" alt="" className={style["dev-img"]} />
                            <p>Kamily</p>
                        </li>
                        <li>
                            <h4>DEVELOPER</h4>
                            <img src="../../../public/img/felipe.jpg" alt="" className={style["dev-img"]} />
                            <p>Luiz Filipe</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sobre;
