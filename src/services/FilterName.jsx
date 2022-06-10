import { heroes } from '../data/heroes'

const FilterName = (name = '') => {
  console.log('hola');
  if (name.length === 0) {
    return [];
  }
  const nombre = name.toLowerCase()
  return heroes.filter(elem => elem.superhero.toLowerCase().includes(nombre))
}
export default FilterName
