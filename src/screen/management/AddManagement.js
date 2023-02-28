import React from "react";
import Footer from "../../component/common/Footer";
import Header from "../../component/common/Header";
import LeftMenu from "../../component/common/LeftMenu";
import AddTeam from "../../component/management/AddTeam";

export default function AddManagement() {
  return (
    <>
      <Header />
      <LeftMenu />
      <AddTeam />
      <Footer />
    </>
  );
}
