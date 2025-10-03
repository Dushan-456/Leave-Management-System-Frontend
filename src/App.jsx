import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
   return (
      <div>
         <nav className="topnav">
            <Link to="/">Dashboard</Link>
         </nav>
         <Routes>
            <Route path="/" element={<Dashboard />} />
         </Routes>
      </div>
   );
}

export default App;
