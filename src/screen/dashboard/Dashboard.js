import React, { useEffect, useState } from "react";
import Footer from "../../component/common/Footer";
import Header from "../../component/common/Header";
import LeftMenu from "../../component/common/LeftMenu";
import Content from "../../component/dashboard/Content";
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function Dashboard() {
  const [modules, setModules] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("loginUser"));
    if (!auth.hasOwnProperty("modules")) {
      localStorage.clear();
      navigate("/");
    }
    let modules = JSON.parse(auth.modules);
    if (!modules.includes("dashboard")) {
      //console.log(modules);
      navigate("/" + modules[0]);
    }
  }, []);
  return (
    <>
      <Header />
      <LeftMenu />
      <Content />
      <Footer />
    </>
  );
}
