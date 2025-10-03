// Tailwind styles are in src/index.css
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import MyLeaves from "./pages/MyLeaves.jsx";
import ApplyLeave from "./pages/ApplyLeave.jsx";
import ActingRequests from "./pages/ActingRequests.jsx";
import Settings from "./pages/Settings.jsx";
import Profile from "./pages/Profile.jsx";

function App() {
   return (
      <Routes>
         <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="my-leaves" element={<MyLeaves />} />
            <Route path="apply-leave" element={<ApplyLeave />} />
            <Route path="acting-requests" element={<ActingRequests />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
         </Route>
      </Routes>
   );
}

export default App;
