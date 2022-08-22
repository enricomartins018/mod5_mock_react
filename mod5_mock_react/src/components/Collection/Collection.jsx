import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import S from "../Collection/Collection.module.css";

const Collection = () => {
    const [infos, setInfos] = useState([]);
    const [pagina, setPagina] = useState(1);

    useEffect(() => {
        async function handleReq() {
            const response = await fetch(
                `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${pagina}`
            );
            const json = await response.json();
            setInfos([...infos, ...json.products]);
        }

        handleReq();
        
    }, [pagina]);


    const newPage = () => {
        setPagina(pagina + 1)
    }

    return (
        <div>
            <div className={S.collectionsCards}>
                {infos.length > 0 && infos.map((card, index) => {
                    return (
                        <Card
                            key={index}
                            imagemDoProduto={card.image}
                            nomeDoProduto={card.name}
                            descricaoDoProduto={card.description}
                            precoAntigo={card.oldPrice}
                            precoNovo={card.price}
                            parcelasDoProduto={card.installments.count}
                            precoDasParcelas={card.installments.value}
                        />
                    );
                })}
                <div className={S.containerBtn}>
                    <button onClick={newPage} className={S.btnCollection}>Ainda mais produtos aqui!</button>
                </div>
            </div>
        </div>
    );
};

export default Collection;
