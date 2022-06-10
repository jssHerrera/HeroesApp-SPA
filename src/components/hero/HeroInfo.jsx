import { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import firsElement from '../../services/FindHero'
import './hero.css'
const HeroInfo = () => {

  const { heroId } = useParams()
  const navigate = useNavigate()
// ------------------------------------------
  const elem = useMemo(() => firsElement(heroId), [heroId])
  if (!elem) {
    return <Navigate to='/' />
  }
// ------------------------------------------
  /**
   * The function handleClick() is a function that navigates to the previous page.
   */
  const handleClick = () =>{
    navigate(-1)
  }
// ------------------------------------------
  const { id, superhero, publisher, alter_ego, first_appearance } = elem
  const type = publisher.slice(0, publisher.indexOf(' '));

  const imgPhat = `/src/Img/${id}.jpg`

  return (
    <section className='info'>
      <div className='info__container container '>

        <div className='info__img-bg '>
          <img src={imgPhat} alt={`${id}`} className="info__img animate__animated animate__fadeInLeft" />
        </div>

        <div className="info__social animate__animated animate__fadeIn">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="info__social-link"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            className="info__social-link"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="info__social-link"
          >
            Instagram
          </a>
        </div>

        <div className="info__data animate__animated animate__fadeIn">
          <h1 className="info__title">
            {type} <br />
            {superhero}
          </h1>
          <p className="info__description">
            {alter_ego}
          </p>
          <p className="info__description">
            {first_appearance}
          </p>
          <span className="info__price">$1245</span>

          <div className="info__btns animate__animated animate__bounceInUp">
            <a href='#' className="button button--gray button--small" onClick={handleClick}>
              <i className='bx bx-log-in-circle'></i>
            </a>

            <button className="button info__button">ADD TO CART</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroInfo
