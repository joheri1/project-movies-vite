
import { BrowserRouter, Routes } from "react-router-dom";
import appRoutes from "./routes/appRoutes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            { appRoutes }
          </Routes>
        </main>
      </BrowserRouter></>
  )
}

export default App;