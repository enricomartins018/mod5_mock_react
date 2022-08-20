import React from 'react'
import S from '../Card/Card.module.css'

const Card = () => {
    return (
        <div className={S.containerPattern}>
            <div className={S.cardContainer}>
                <div className={S.card}>
                </div>
                <p>Nome do produto:</p>
                <p className={S.descricaoCard}>Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata.</p>
                <p>De: R$23,99</p>
                <p>Por: R$19,99</p>
                <p>ou 2x de R$9,99</p>
                <button className={S.btnCard}>Comprar</button>
            </div>
        </div>
    )
}

export default Card