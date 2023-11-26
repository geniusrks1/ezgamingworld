import React from 'react'
import { Link } from 'react-router-dom'
import Style from './styles/card.module.css'

const BgmiCard = ({title,description,imageUrl,id}) => {
  return (
    <>
    <div className="card">
      <img src={imageUrl} className={Style.card_img_top} alt={title} />
      <div className={Style.card_body}>
        <h5 className={Style.card_title}>{title}</h5>
        <p className={Style.card_text}>{description}</p>
      </div>
      
      <button className={Style.button}>
      <Link to={`${id}`}>  Show </Link>
        </button>
       
    </div>
    </>
  )
}

export default BgmiCard