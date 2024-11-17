
import { BrowserRouter, Routes, Link } from "react-router-dom";
import appRoutes from "./routes/appRoutes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul className="app-ul">
            <li className="app-li">
              <Link to="/">Home</Link>
            </li>
            <li className="app-li">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Routes>
            { appRoutes }
          </Routes>
        </main>
      </BrowserRouter></>
  )
}

export default App;