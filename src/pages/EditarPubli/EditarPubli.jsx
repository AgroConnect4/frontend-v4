import React from 'react'
import style from './EditarPubli.module.css'

function EditarPubli() {
    return (
        <div className={style["fundoIMG"]}>
        <div className={style["container-editar-publicacao"]}>
            <div className={style['box-editar-publicacao']}>
                <div className={style["titulo-editar-publicacao"]}>
                    <a href=""> <img src="../../../public/img/voltar.png" alt="" /></a>
                    <h1>Editar postagem</h1>
                </div>
                <form action="" className={style["form-editar-publicacao"]}>
                    <label htmlFor="">Titulo:
                        <input className={style["alterar-input-titulo"]} placeholder='Atualize seu titulo atual' type="text" />
                    </label>
                    <label htmlFor="">Descrição:
                        <input className={style["alterar-input-descricacao"]} placeholder='Atualize sua descrição...' type="text" />
                    </label>
                    <p>Novo upload</p>
                    <button>Escolha o ficheiro</button>
                    <p>Nenhum upload selecionado*</p>
                </form>
                <button className={style["btn-alterar-publi"]}>Atualizar</button>
            </div>
        </div>
        </div>
    )
}

export default EditarPubli