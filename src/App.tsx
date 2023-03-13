import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navegation from "./components/Navegation";
import routes from "./config/routes";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navegation/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {routes.map((route, i) => {
            return (
              <Route path={route.path} element={route.component} key={i} />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
