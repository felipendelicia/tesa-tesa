import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import routes from "./config/routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
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
