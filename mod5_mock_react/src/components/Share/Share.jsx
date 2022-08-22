import React from 'react'
import S from '../Share/Share.module.css'

const Share = () => {
    return (
        <section className={S.sectionShare}>
            <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
            <div className={S.containerNameAndEmail}>
                <div className={S.containerNameFriend}>
                    <label htmlFor='nameShare'>Nome do seu amigo:</label>
                    <input className={S.inputNameFriend} type="text" id='nameShare' name='name' />
                </div>
                <div className={S.containerEmailFriend}>
                    <label htmlFor='emailShare'>E-mail:</label>
                    <input className={S.inputEmailFriend} type="email" id='emailShare' name='email' />
                </div>
            </div>
            <button className={S.btnSubmitShare} type="submit">Enviar agora</button>
        </section>
    )
}

export default Share