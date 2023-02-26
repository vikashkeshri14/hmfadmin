import React from 'react'
import Footer from "../../component/common/Footer";
import Header from "../../component/common/Header";
import LeftMenu from "../../component/common/LeftMenu";
import ContentUserDetails from "../../component/user/ContentUserDetails";
export default function UserDetails() {
    return (
        <>
            <Header />
            <LeftMenu />
            <ContentUserDetails />
            <Footer />
        </>
    )
}
