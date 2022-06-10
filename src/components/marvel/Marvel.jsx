import HeroList from '../hero/HeroList'
import '../styles/styles.css'

const Marvel = () => {
  return (
    <section className='card container section '>
      <h2 className='section__title'>Marvel</h2>
      <HeroList tipo='Marvel Comics' />
    </section>
  )
}

export default Marvel
