import React from "react";
import { Button } from "react-bootstrap";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { FaUserTie} from "react-icons/fa";
import img from "../images/ourplan.jpg";
import "../ourplan.css";

export default function Ourplan() {
  const ourplansContents = [
    {title:'High Quality',icon: <BsHandThumbsUpFill />, text:'Fully qualified architects based in UK'},
    {title:'Happy Client',icon: <BiTask/>, text:'500 + projects collectively completed'},
    {title:'Happy Client',icon: <FaUserTie/>, text:'Best prices in the UK'},
    {title:'Happy Client',icon: <BsHandThumbsUpFill />, text:'30 + years’ experience in residential architecture and construction'},
  ]
  return (
    <div className="ourplan">
      <div className="inner">
        <div className="img-container">
          <div
            style={{ backgroundImage: `url('${img}') ` }}
            className="img"
          ></div>
        </div>
        <div className="content">
          <div className="content-inner">
            <h1>
              Why choose <span className="tip">Go Plans?</span>
            </h1>
            <p>
              We work closely with you to design your project, we advise on
              planning or permitted development restrictions, once you are
              happy, we will submit them for you.{" "}
            </p>
            <div className="container">
              {ourplansContents.map((content, index)=>(
                <div className="items" key={index}>
                <div className="icon">
                 {content.icon}
                </div>
                <div className="text">
                  <h3>{content.title}</h3>
                  <p>{content.text}</p>
                 
                </div>
              </div>
              ))}
            
            </div>

           
          </div>
          <Button>Request My Quote</Button>
        </div>
      </div>
    </div>
  );
}
