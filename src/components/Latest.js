import React from 'react'
import '../latest.css'
import p2 from '../images/img1.jpg'
import { Button } from 'react-bootstrap'
export default function Latest() {
  return (
    <div className='latest'>

        <div 
        className='latest-inner' 
        style={{background:`url('${p2}') no-repeat center center`}}>
            

        </div>
        <div className="latest-description">
            <div className="latest-description-inner">
            <h1>We view design as a process of exploration and discovery fueled by limitless thinking.</h1>
            <p>
            Our design research and development teams have learned that we must test, tinker, build and break things to make them better the next time. That’s why research is key to our design practice. It’s 
            a platform for us to experiment, to improve, and to deliver the extraordinary.</p>
  
<Button>Lean More</Button>
            </div>
        </div>


    </div>
  )
}
