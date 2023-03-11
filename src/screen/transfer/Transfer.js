import React, { useEffect, useState } from "react";
import Footer from "../../component/common/Footer";
import Header from "../../component/common/Header";
import LeftMenu from "../../component/common/LeftMenu";
import Content from "../../component/transfer/Content";
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function Transfer() {
  const [modules, setModules] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("loginUser"));
    let modules = JSON.parse(auth.modules);
    if (!modules.includes("transfer")) {
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
