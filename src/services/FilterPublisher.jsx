import {heroes} from '../data/heroes'

const Data = (tipo) =>{
return heroes.filter(elem => elem.publisher === tipo)
}

export default Data
