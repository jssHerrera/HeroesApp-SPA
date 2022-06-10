import {
  Routes,
  Route,
} from "react-router-dom";
import Marvel from "../components/marvel/Marvel";
import Dc from "../components/dc/DC";
import NavBar from "../components/nav/NavBar";
import Search from "../components/search/Search";
import HeroInfo from "../components/hero/HeroInfo";
const DashRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Marvel />} />
        <Route path="marvel" element={<Marvel />} />
        <Route path="dc" element={<Dc />} />
        <Route path="info/:heroId" element={<HeroInfo />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </>
  )
}

export default DashRouter
