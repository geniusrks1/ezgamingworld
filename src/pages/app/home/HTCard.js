import React from 'react'

const HTCard = ({title,description,imageUrl}) => {
  return (
    <>
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
    </>
  )
}

export default HTCard






  

