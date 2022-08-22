import React from 'react'
import S from '../Label/Label.module.css'

const Label = ({ texto }) => {
  return (
    <label className={S.labelPattern}>{texto}</label>
  )
}

export default Label