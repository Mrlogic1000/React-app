import React from 'react'
import {Link} from 'react-router-dom'
import "../footer.css";
import logo from "../images/logo.png";
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
  return (
    <div className='footer'>
        <Container fluid>
            <Row>
                <Col md={6}>
               
         <div className="site-logo"> 
         
         <h1>
         divinehabitationconsult
         </h1>
         </div>

        
        

                <p>Created by 2 lead architects and 2 project managers, after working in practices together across the UK. We designed 
                    a system of work to revolutionise the way domestic projects are drawn.</p>
                
                </Col>
                <Col>
               <div className="resources">
               <h3>Resources</h3>
               <ul>
                    <li><Link to='/'>Home</Link></li>
                    
            <li><Link  to='about' className=" link">About </Link></li>
              
              
                    <li>Term of Service</li>
                    <li>Privacy Policy</li>
                    <li>Cookies Policy</li>
                </ul>
               </div>
                
                </Col>
                <Col>
                <ul>
                <h3>Contact Us</h3>
                    <li>Address: 20-22 Wenlock Street, London, N1 7GU</li>
                    <li><a href="tel:07062034023">Phon Number:  07062034023, 80864362912, 09031960614 </a></li>
                    <li><a href="mailto:info@divinehabitationconsult.com/">Email:divinehabitationconsult.com/</a> </li>
                    
                    <li>Cookies Policy</li>
                </ul>
                </Col>
                
            </Row>
        </Container>
        

    </div>
  )
}
