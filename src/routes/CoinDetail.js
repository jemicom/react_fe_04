import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const CoinDetail = ({coins}) => {
    const { id } = useParams();
    const navigate = useNavigate();
    let findCoin ;
    useEffect(()=>{
      findCoin = coins.find( coin=> coin.id === id )
    }, [])
  return (
    <div  className='paddingTop'>
      CoinDetail { id }
      { findCoin?.id }
      <button onClick={ ()=>navigate('/coin')}>뒤로가기</button>
      {/* 상대주소 라우트를 사용하지 않으므로 절대주소 사용  */}
    </div>
  )
}

export default CoinDetail
