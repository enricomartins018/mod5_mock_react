import React from "react";
import S from "../Header/Header.module.css";
import Menu from "../Menu/Menu";

const Header = () => {
  return (
    <header className={S.header}>
      <div className={S.containerHeader}>
        <h2 className={S.subTitulo}>uma seleção de produtos</h2>
        <h1 className={S.titulo}>especial para você</h1>
        <p className={S.paragrafo}>
          Todos os produtos desta lista foram selecionados a partir da sua
          navegação. Aproveite!
        </p>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
