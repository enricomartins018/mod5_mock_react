import React from "react";
import Button from "../Button/Button";
import S from "../Menu/Menu.module.css";

const Menu = () => {
  return (
    <div className={S.menuContainer}>
      <Button texto="Conheça a Linx" />
      <Button texto="Ajude o algoritmo" />
      <Button texto="Seus produtos" />
      <Button texto="Compartilhe" />
    </div>
  );
};

export default Menu;
