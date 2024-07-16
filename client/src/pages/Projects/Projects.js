import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          My PROJECT 
        </h2>
        <hr />
  
        
        <div className="row " id="ads">
          <Spin>
           
                   
            <div className="col-md-4 align-center" >
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Food Delivery Website</span>
                  <img
                    src="https://colorlib.com/wp/wp-content/uploads/sites/2/foodpicky-food-delivery-wordpress-theme-768x602.jpg"
                    alt="project"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React Js</span>

                  <span className="card-detail-badge">Node Js</span>
                  <span className="card-detail-badge">Express Js</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Food Delivery App</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            
              
                
              
            
          </Spin>
          <Spin>
           
                   
           <div className="col-md-4 align-center" >
             <div className="card rounded">
               <div className="card-image">
                 <span className="card-notify-badge">Blog Application</span>
                 <img
                   src="https://cdn.searchenginejournal.com/wp-content/uploads/2012/12/blogging.jpg"
                   alt="project"
                 />
               </div>
               <div className="card-image-overly m-auto mt-3">
                 <span className="card-detail-badge">React Js</span>

                 <span className="card-detail-badge">Node Js</span>
                 <span className="card-detail-badge">Express Js</span>
                 <span className="card-detail-badge">Mongodb</span>
               </div>
               <div className="card-body text-center">
                 <div className="ad-title m-auto">
                   <h5 className="text-uppercase">Blog Application</h5>
                 </div>
                 <a
                   className="ad-btn"
                  //  href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                 >
                   View
                 </a>
               </div>
             </div>
           </div>
           
             
               
             
           
         </Spin>
         <Spin>
           
                   
           <div className="col-md-4 align-center" >
             <div className="card rounded">
               <div className="card-image">
                 <span className="card-notify-badge">Myntra Clone</span>
                 <img
                   src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2020-12/myn_final_image.jpg"
                   alt="project"
                 />
               </div>
               <div className="card-image-overly m-auto mt-3">
              

                 <span className="card-detail-badge">HTML</span>
                 <span className="card-detail-badge">CSS</span>
                 <span className="card-detail-badge">JavaScript</span>
               </div>
               <div className="card-body text-center">
                 <div className="ad-title m-auto">
                   <h5 className="text-uppercase">Myntra Clone</h5>
                 </div>
                 <a
                   className="ad-btn"
                   href="https://github.com/Katiyarswati23/myntra"
                 >
                   View
                 </a>
               </div>
             </div>
           </div>
           
             
               
             
           
         </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;