import React from "react";
// import { Breadcrumb} from "react-bootstrap";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export default function TopBar() {
  const style = {
    topbar: {
      backgroundColor: "#002E47",
      color: "white",
      height: "60px",
    },
    inner:{
      width:'90%',
      
    }
     
   
  };
  return (
    <>
      <div  style={style.topbar}>
       <div className="d-flex justify-content-between m-auto align-items-center" style={style.inner}>
       <div class="d-flex flex-row bd-highlight">
          <div class="p-2 bd-highlight"><h6>Connect With Us</h6></div>
          <div class="p-2 bd-highlight">            
            <h6><BsFacebook /></h6>
          </div>
          <div class="p-2 bd-highlight">
            <h6><BsTwitter /></h6>
          </div>
          <div class="p-2 bd-highlight">
            <h6><BsInstagram /></h6>
          </div>
        </div>
        <div class="d-flex flex-row bd-highlight">
          
          <div class="p-2 bd-highlight">            
            <h6>info@wcabngogrant.online</h6>
            </div>
            <div class="p-2 bd-highlight">
            <h6>Call us now:07069344331</h6>
          </div>
          </div>
       </div>
          
      </div>
    </>
  );
}
