import { heroes } from '../data/heroes'

const firsElement = (id = '') => {
  return heroes.find(elem => elem.id === id)
}
export default firsElement
