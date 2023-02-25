import React from "react";
import Footer from "../../component/common/Footer";
import Header from "../../component/common/Header";
import LeftMenu from "../../component/common/LeftMenu";
import Content from "../../component/store/Content";
export default function Store() {
  return (
    <>
      <Header />
      <LeftMenu />
      <Content />
      <Footer />
    </>
  );
}
