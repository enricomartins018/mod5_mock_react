import React from 'react'
import S from '../Form/Form.module.css'

const Form = () => {
  return (
    <form className={S.formPattern}> 
        <label className={S.labelForm} htmlFor='name'>Seu nome:</label>
        <input className={S.inputForm} type="text" name='name' id='name' />
        <label className={S.labelForm} htmlFor='email'>E-mail </label>
        <input className={S.inputForm} type="email" name='email' id='email' />
        <label className={S.labelForm} htmlFor='cpf'>CPF:</label>
        <input className={S.inputForm} type="text" name='cpf' id='cpf'/>
        <div className={S.optionsSexual}>
            <input className={S.inputsSexual} type="radio" name='sexualidade' checked/>
            <label>Masculino</label>
            <input type="radio" name='sexualidade' />
            <label>Feminino</label>
        </div> 
        <button className={S.btnForm} type='submit'>Enviar</button>
    </form>
  )
}

export default Form