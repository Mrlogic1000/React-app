import React from "react";
import WebHeader from "../components/WebHeader";
import Footer from './Footer';
import SiteHeader from './SiteHeader';

import { Outlet } from "react-router-dom";
// import { Outlet } from "react-router-dom";



export default function Layout({children}) {
  return (
    <>     
         <SiteHeader/>
      <WebHeader/>   
      {children}
      <Outlet/>
      <Footer/>
    
    </>
  );
}
