import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import content from './content';
import '../slider-animations.css';
import '../Slider.css';
import '../label.css'

export default function SiteHeader() {
    
  return (
    <div className='wrapper'>
       <Slider 
       autoplay={3000}       
       className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<button>{item.button}</button>
					</div>
					<section>
						<img src={item.userProfile} alt={item.user} />
						<span>
							supervise by <strong>{item.user}</strong>
						</span>
					</section>
				</div>
			))}
		</Slider>
		{/* <div className="sitelabel">
		<div className="sitelabel-inner">
		<h5>What We Do</h5>
			<h1>We deliver designs that inspire, connect and performs.</h1>
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur tenetur, assumenda dolorum, error laborum maxime suscipit iusto animi quis velit quaerat tempora saepe perspiciatis
				 aperiam? Reiciendis, earum? Laboriosam, recusandae quisquam.</p>
		</div>
		</div> */}
      
       

    </div>
  )
}

