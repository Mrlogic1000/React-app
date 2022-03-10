import React from 'react'
// import SiteHeader from '../SiteHeader';
import Layout from '../components/Layout';
import Latest from './Latest';
import Plan from './Plan';
import Ourplan from './Ourplan';





export default function Home() {
  return (
    <div>
        <Layout>  
           
             <div className='main'>
             <Latest/>
              <Plan/>
              <Ourplan/>
              
             </div>
         </Layout>
    </div>
  )
}
