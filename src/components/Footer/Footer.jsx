// import React from 'react'
import style from './Footer.module.css'



function Footer() {
    return (
        <div className={style["rodape"]}>
            <a href=""> <img src="../../../public/img/logo.png" alt="" /> </a>
                <h1>Copyright © 2024- Agroconnect </h1>     
                <div className={style["rodape-box"]}>
                    <ul>
                        <li> <a href="https://www.linkedin.com/in/kamily-sime%C3%A3o-24b88a20b/"> Kamily, </a></li>
                        <li> <a href="http://www.linkedin.com/in/victoria-oliveira-696a99261"> Victoria, </a></li>
                        <li> <a href="https://www.linkedin.com/in/filipe-fonseca-848061147/"> Filipe. </a></li>
                    </ul>
                </div>
        </div>

    )
}

export default Footer