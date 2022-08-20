import React from 'react'
import Card from '../Card/Card'
import S from '../Collection/Collection.module.css'

const Collection = () => {
    return (
        <div className={S.collectionsPattern}>
            <div className={S.collectionsCards}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className={S.collectionsCards}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <button className={S.btnCollection}>Ainda mais produtos aqui!</button>
        </div>
    )
}

export default Collection