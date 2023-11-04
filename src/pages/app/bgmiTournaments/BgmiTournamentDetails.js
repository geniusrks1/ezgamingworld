import React from 'react'
import { useParams } from 'react-router-dom';
import { cardData } from './BgmiTournamentList';
const BgmiTournamentDetails = () => {
    const {id} =useParams();
    const card=cardData.find((item)=>item.id===id)

  return (
    <>
    <div>

    </div>
    {/* <img src={card.imageUrl} alt={card.title}/> */}
    
    </>
  )
}

export default BgmiTournamentDetails