import React from 'react'
import { Link } from 'react-router-dom'

const BgmiCard = ({title,description,imageUrl,id}) => {
  return (
    <>
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      
      <button>
      <Link to={`${id}`}>  Show </Link>
        </button>
       
    </div>
    </>
  )
}

export default BgmiCard