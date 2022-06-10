import { useState } from "react";

const useHook = (ini={}) => {

  const [busqueda, setBusqueda] = useState(ini)

  const handleChange = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  }
  return {busqueda, setBusqueda,handleChange}
}

export default useHook
