import { useContext } from "react"
import { Navigate } from "react-router-dom"
import DataContext from "../context/AuthProvider"

const PublicRouter = ({children}) => {
  const{user} = useContext(DataContext)
  return user.logged ? (<Navigate to='/marvel'/>) :children
}


export default PublicRouter
