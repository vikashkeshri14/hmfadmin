import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./screen/dashboard/Dashboard";
import Login from "./screen/login/Login";
import ForgetPassword from "./screen/login/ForgetPassword";
import Users from "./screen/user/Users";
import Store from "./screen/user/Store";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Router>
  );
}

export default App;
