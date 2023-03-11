import React, { useEffect, useState } from "react";
import Footer from "../../component/common/Footer";
import Header from "../../component/common/Header";
import LeftMenu from "../../component/common/LeftMenu";
import { useLocation, useNavigate, Link } from "react-router-dom";
import EditTeam from "../../component/management/EditTeam";
export default function EditManagement() {
  const [modules, setModules] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("loginUser"));
    let modules = JSON.parse(auth.modules);
    if (!modules.includes("management")) {
      //console.log(modules);
      navigate("/" + modules[0]);
    }
  }, []);
  return (
    <>
      <Header />
      <LeftMenu />
      <EditTeam />
      <Footer />
    </>
  );
}
