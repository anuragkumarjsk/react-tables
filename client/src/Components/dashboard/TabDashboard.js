import React, { Component } from 'react'

import './dashboard.css'
import {Hammer,Love,Chat,GeoLocation,Link,Linkdin,Facebook,Youtube} from '../icons/icons' 
import ProductCard from './ProductCard'
import VideoCard from './videocard'
class TabDashboard extends Component {
    render() {
        return (
        <div className="dash">


             <div className="hindi">
              <span>{'         '}</span>                    
                   <img className='hindi_logo' src='./logo.jpg' alt='bkisan logo'/>  
                   <span className="hindi_text">{' '}किसान खर्च आधा, उत्पादन ज्यादा।</span>
              <span>{'         '}</span>                    
              </div>


                  <div className="video_loc">
                          <div className="box" >
                               <VideoCard/>
                           </div>
                           <div className="box1" >
                                <span><GeoLocation/>{'  '}village+post - Taloon, district + Barwani(Madhyapradesh), Pin: 451551, India.</span>
                                <br/>
                                <br/>
                                <div className="row" >
                                <a className="col" data-toggle="tooltip" title="Find on google maps"  href="https://goo.gl/maps/jRn15qT3nipavgiDA" target="_blank"><GeoLocation/>{'  '}Reva Flora</a> 
                                <a className="col" data-toggle="tooltip" title="Find on google maps" href="https://goo.gl/maps/PnUQM1D4Pa9u11AWA" target="_blank"><GeoLocation/>{'  '}B-kisan</a> 
                                </div><br/>

                                <div className="row" ></div>
                                <a className="col" data-toggle="tooltip" title="LinkdIn"  href="https://linkedin.com/in/b-kisan-24a998200" target="_blank"><Linkdin/>{' '}Linkedin</a>
                                <a className="col" data-toggle="tooltip" title="Kisanpathshala Website " href="http://www.kisanpathshala.com/" target="_blank"><Link/>{' '}Kisanpathshala</a>        
                                <a className="col" data-toggle="tooltip" title="Facebook" href="https://www.facebook.com/B-kisan-378294852890092" target="__blank"><Facebook/>{' '}Facebook</a>        
                                <a className="col" data-toggle="tooltip" title="Youtube Channel" href="https://www.youtube.com/channel/UCweQPKBI7cRH-zV70Xwfseg" target="_blank"><Youtube/>{' '}Youtube</a><br/>
                            </div>
              </div>

            

              <div className= "product_div">
              <h1 style={{"color":"rgba(30, 130, 76, 1)" }}>Our Products</h1>
              <h4 style={{"color":"rgba(0, 177, 106, 1)"}}>These products are organic affordable and help our farmers to make farming a profitable venture.</h4>  
              <div className="product_container">
              <ProductCard  img_src={"./products/Potassium Fluvate.jpg"} img_name={"Potassium Fluvate"}/>
              <ProductCard  img_src={"./products/Potassium Humate.jpg"} img_name={"Potassium Humate"}/>
              <ProductCard  img_src={"./products/vaysinometa.jpeg"} img_name={"Vaysinometa"}/> 
              <ProductCard  img_src={"./products/reva+.jpg"} img_name={"reva +"}/>
              <ProductCard  img_src={"./products/revaG9.jpg"} img_name={"reva g9"}/>
              </div>
              </div> 

              <div className="oltu_container">
                <span> <Hammer/>{' with '}<Love/>{' by '}<img className="oltu_img" src="./products/oltu.jpg"/></span>{' | '}
                <span>{'reach out : '}<Chat/> <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=oltu.contact@gmail.com" target="_blank">oltu.contact@gmail.com</a></span>
              </div>
               

        </div>
        )
    }
}
export default TabDashboard