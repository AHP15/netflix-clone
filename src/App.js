import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import Signin from "./components/Signin";
import { useUser } from "./contexts/userContext";

function App() {
  
  const {user} = useUser();
  
  return (
    <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={user.isLoggedIn? <Dashboard />:<Home />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/more" element={<MovieDetails />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
