import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./screen/dashboard/Dashboard";
import Login from "./screen/login/Login";
import ForgetPassword from "./screen/login/ForgetPassword";
import Users from "./screen/user/Users";
import Store from "./screen/user/Store";
import UserDetails from "./screen/user/UserDetails";
import Order from "./screen/order/Order";
import Report from "./screen/report/Report";
import Sms from "./screen/sms/Sms";
import TechSupport from "./screen/techsupport/TechSupport";
import Notification from "./screen/notification/Notification";
import Commitment from "./screen/commitment/Commitment";
import Profit from "./screen/profit/Profit";
import Management from "./screen/management/Management";
import AddManagement from "./screen/management/AddManagement";
import BlackList from "./screen/blacklist/BlackList";

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
        <Route path="/report" element={<Report />} />
        <Route path="/sms" element={<Sms />} />
        <Route path="/tech-support" element={<TechSupport />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/commitment" element={<Commitment />} />
        <Route path="/profit" element={<Profit />} />
        <Route path="/management" element={<Management />} />
        <Route path="/add-management" element={<AddManagement />} />
        <Route path="/blacklist" element={<BlackList />} />
      </Routes>
    </Router>
  );
}

export default App;
