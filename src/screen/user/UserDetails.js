import React, { useEffect, useState } from "react";
import Footer from "../../component/common/Footer";
import Header from "../../component/common/Header";
import LeftMenu from "../../component/common/LeftMenu";
import ContentUserDetails from "../../component/user/ContentUserDetails";
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function UserDetails() {
  const [modules, setModules] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("loginUser"));
    let modules = JSON.parse(auth.modules);
    if (!modules.includes("users")) {
      //console.log(modules);
      navigate("/" + modules[0]);
    }
  }, []);
  return (
    <>
      <Header />
      <LeftMenu />
      <ContentUserDetails />
      <Footer />
    </>
  );
}
