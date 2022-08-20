import React from 'react'
import S from '../Title/Title.module.css'

const Titulo = ({ texto }) => {
  return (
    <h1 className={S.titleIndex}>
      <span>{texto}</span>
    </h1>
  );
};

export default Titulo;