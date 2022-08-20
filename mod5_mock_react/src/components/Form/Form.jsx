import React from 'react'
import S from '../Form/Form.module.css'

const Form = () => {
  return (
    <form className={S.formPattern}> 
        <label className={S.labelForm}>Seu nome:</label>
        <input className={S.inputForm} type="text" name='name' />
        <label className={S.labelForm}>E-mail</label>
        <input className={S.inputForm} type="email" name='email' />
        <label className={S.labelForm}>CPF:</label>
        <input className={S.inputForm} type="cpf" name='cpf' />
        <div className={S.optionsSexual}>
            <input className={S.inputsSexual} type="radio" />
            <label>Masculino:</label>
            <input type="radio" />
            <label>Feminino:</label>
        </div> 
        <button className={S.btnForm} type='submit'>Enviar</button>
    </form>
  )
}

export default Form