import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "../components/login/Login";
import DashRouter from "./DashRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
      <Route path="/login"
          element={
            <PublicRouter>
              <Login />
            </PublicRouter>
          }
        />

        <Route path="/*"
          element={
            <PrivateRouter>
              <DashRouter />
            </PrivateRouter>
          }
        />
        {/* <Route path="/*" element={<DashRouter />} /> */}
      </Routes>
    </Router>
  )
}

export default AppRouter
