import React from "react";
import S from "../Card/Card.module.css";

const Card = ({
  imagemDoProduto,
  nomeDoProduto,
  descricaoDoProduto,
  precoAntigo,
  precoNovo,
  parcelasDoProduto,
  precoDasParcelas,
}) => {
  return (
    <div className={S.containerPattern}>
      <div className={S.cardContainer}>
        <div className={S.card}>
          {" "}
          <img src={imagemDoProduto} alt="Imagem do produto" />{" "}
        </div>
        <p className={S.nameCard}>{nomeDoProduto}</p>
        <p className={S.descricaoCard}>{descricaoDoProduto}</p>
        <p className={S.priceOldCard}>De: R${precoAntigo}</p>
        <p className={S.pricePresentCard}>Por: {precoNovo}</p>
        <p className={S.priceInstallmentsCards}>
          ou {parcelasDoProduto}x de R${precoDasParcelas}
        </p>
        <button className={S.btnCard}>Comprar</button>
      </div>
    </div>
  );
};

export default Card;
