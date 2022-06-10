import { useContext } from "react"
import { Navigate } from "react-router-dom"
import DataContext from "../context/AuthProvider"

const PrivateRouter = ({children}) => {
  const{user} = useContext(DataContext)
  return user.logged ? children : (<Navigate to='/login'/>)
}


export default PrivateRouter
