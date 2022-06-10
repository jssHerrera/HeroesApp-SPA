import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'
import DataContext from '../../context/AuthProvider'
import useHook from '../../hook/useHook'
import types from '../../types/types'

const Login = () => {

  const navigate = useNavigate()
  const { dispatch } = useContext(DataContext)
  const [error, setError] = useState(false);
  const { busqueda, handleChange } = useHook({
    name: '',
    email: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if(busqueda.name.trim() === '' || busqueda.email.trim() === ''){
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 4000);
      return
    }
    setError(false)
    const action = {
      type: types.login,
      payload: busqueda
    }
    dispatch(action)

    navigate('/marvel', { replace: true })
  }

  return (
    <section className='section container login'>
      <h2 className='section__tile'>Login</h2>

      <div className='section__container'>
        <form className='section__cart' onSubmit={handleSubmit}>
          <span className="section__tag">Sale</span>

          <input type="text" placeholder='Name...' name='name' className='section__name' autoComplete='off' onChange={handleChange} />
          <input type="email" placeholder='Email..' name='email' className='section__email' onChange={handleChange} />

          <input type="submit" value='Login' />
        </form>
      </div>
      <div className='section__messages'>
        {error && <small className='section__messages-error'>Complete el formulario</small>}
      </div>
    </section>
  )
}

export default Login
