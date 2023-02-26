import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./screen/dashboard/Dashboard";
import Login from "./screen/login/Login";
import ForgetPassword from "./screen/login/ForgetPassword";
import Users from "./screen/user/Users";
import Store from "./screen/user/Store";
import UserDetails from "./screen/user/UserDetails";
import Order from "./screen/order/Order";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user-details" element={<UserDetails />} />
        <Route path="/store" element={<Store />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  );
}

export default App;
