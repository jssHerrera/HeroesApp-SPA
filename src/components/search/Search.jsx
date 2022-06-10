import useHook from '../../hook/useHook'
import './search.css'
import FilterName from '../../services/FilterName'
import HeroCard from '../hero/HeroCard'
import { useLocation, useNavigate } from 'react-router-dom'
import querystring from 'query-string'
import { useMemo } from 'react'

const Search = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const {q = ''} = querystring.parse(location.search)

  const { busqueda, handleChange } = useHook({
    name: q
  })
  const data = useMemo(() => FilterName(q), [q])

  const handleSubmit = (e) => {
    e.preventDefault()
    // setBusqueda({name: ''})
    navigate(`?q=${busqueda.name}`)
  }
  return (
    <section className='search container section '>
      <h2 className='section__title'>Search</h2>

      <div className='seach__container'>
        <form onSubmit={handleSubmit}>
          <label  className='search__box'>
            <input
            id='text'
              type="text"
              placeholder='search...'
              autoComplete='off'
              name="name"
              value={busqueda.name}
              onChange={handleChange}
              className='search__text' />

            <button type='submit' className='search__icon-bg'>
              <i className='bx bx-search-alt search__icon'></i>
            </button>
          </label>
        </form>
        <div className='search__card card__container'>
          {q=== ''
            ?(
              <div className='search__hero-ms'>
                <label htmlFor="text" className='search__input'><i className='bx bx-log-out-circle seach__icon-input'></i></label>
                <p> Busque un Hero </p>
               </div>
            )
            :(data.length === 0) && <div className='search__hero-ms'>no se encuentra <small className='search__error'>{q.toUpperCase()}</small></div>}

          {data.map(elem => (
            <HeroCard key={elem.id} elem={elem} />
          ))}
        </div>
      </div>

    </section>
  )
}

export default Search
