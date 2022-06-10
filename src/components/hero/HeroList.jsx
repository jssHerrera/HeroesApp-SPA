import React, { useMemo } from 'react'
import Data from '../../services/FilterPublisher'
import HeroCard from './HeroCard'
const HeroList = ({ tipo }) => {
  const hero = useMemo(() => Data(tipo), [tipo])
  return (
    <div className='card__container animate__animated animate__fadeIn'>
      {hero.map(elem => (
        <HeroCard
          key={elem.id}
          elem={elem}
        />
      ))}
    </div>
  )
}

export default HeroList
