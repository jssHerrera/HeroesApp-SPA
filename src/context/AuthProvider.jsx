import { createContext, useEffect, useReducer } from "react"
import AuthReducer from "../auth/AutReducer";
const DataContext = createContext()

const ini = () => {
  return JSON.parse(localStorage.getItem('user')) || { logget: false }
}
const AuthProvider = ({ children }) => {

  const [user, dispatch] = useReducer(AuthReducer, {}, ini);

  useEffect(() => {
    if (!user) {
      return
    }
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  return (
    <DataContext.Provider
      value={{ user, dispatch }}>
      {children}
    </DataContext.Provider>
  )
}
export {
  AuthProvider
}
export default DataContext
