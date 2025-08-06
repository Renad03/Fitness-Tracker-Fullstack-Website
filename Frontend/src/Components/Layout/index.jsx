import React from 'react';
import Header from "../Header";
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import ScrollToTop from '../ScrollToTop';
const Layout = () => {
 return <> 
 <ScrollToTop/>
 <Header/>
 <Outlet/>
 <Footer/>
 </>
}
export default Layout;