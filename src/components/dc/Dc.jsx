import HeroList from '../hero/HeroList'
import '../styles/styles.css'

const Dc = () => {
  return (
    <section className='card container section '>
      <h2 className='section__title'>Dc</h2>
      <HeroList tipo='DC Comics' />
    </section>
  )
}

export default Dc
