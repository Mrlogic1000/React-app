import React from 'react'
import { Card, CardImg, Col, Container, Row } from 'react-bootstrap'
import planContents from './planContent'

import '../plan.css'

export default function Plan() {
    
    
  return (
    <div className='plan'>
        <h1>How We do <span className='tip'>Our Work</span></h1>
        <span><p>Getting planning drawings & building regulations couldn’t be easier!</p></span>
        <Container fluid>
            <div className='row'>             
                             
                
                    {
                        planContents.map((planContent,index)=>(
                            <Col key={index}> 
                            <Card>
                       <div className="inner">
                       <h4 className='stage'>{planContent.stage}</h4> 
                       <img src={planContent.img} style={{width:'150px',height:'150px',margin:'auto'}}/>
                       <h2>{planContent.heading}</h2>
                        <p>
                          {planContent.text}
                        </p>
                       </div>
                        </Card>
                        </Col>
                        )
                        )
                    }
                

               
               
              
            </div>
        </Container>
    </div>
  )
}
