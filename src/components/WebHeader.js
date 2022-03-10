import React, { useState } from "react";
import { BsList } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

// import { Container, Navbar } from "react-bootstrap";
import logo from "../images/logo.svg";

// import { BsFillBarChartLineFill } from "react-icons/bs";

export default function WebHeader() {
  const [display, setDisplay] = useState(false)
  
  function disfunct(){
    setDisplay(!display)
    console.log(display)
  }
  const data = [
    {name:'Home', link:'/'},
    {name:'About', link:'/about'},
    {name:'Services', link:'/'},
    {name:'Our Portifolio', link:'/'},
    {name:'Quick Quoute', link:'/'},
   
    {name:'Contact', link:'/'}
   
  ]
  
  return (
    <div className="webheader">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" style={{width:'15em',height:'190px'}} />
        </div>

        
       {(<nav className={display?'nav-wraper mobile':'nav-wraper '}>
        <ul className="list" >

          

        {
          data.map((data,index)=>{
            return( 
              <li key={index} className="item">
              <Link  to={data.link} className=" link">
              {data.name}
              </Link>
            </li>
            )
          })
        }
          </ul>
       
          <div className="closeIcon">
       <AiOutlineClose
       onClick={disfunct}/>
       </div>
        </nav>)} 
       <div className="listIcon">
       <BsList 
       onClick={disfunct}/>
       </div>
       
      </div>
    </div>
  );
}
