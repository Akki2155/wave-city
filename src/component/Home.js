import React, { useState } from "react";



function Home(){

    const [shown, setShown] = useState(false)
    const VideoModal = (props) => {
    return <div style={{ position: "fixed", top: 200, bottom: 0, left: 450, right: 0, backgroundColor: "rgba(0,0,0,0)"}}>
      <iframe
          title={props.src}
          allowFullScreen
          frameBorder="0"
          height="415px"
          src={props.src}
          width="660px"
      />
    </div>
}
    return(
    <div id="home-container">
    <div className="home-holder">
    </div>
    <div className="home-about">
       <div className="home-about-content">
            <h1 className="section-heading">WELCOME TO WAVECITY</h1>
            <p>Wave City is one of Ghaziabad’s most coveted Smart City, nestled adjacent to NH-24. This project is incorporated to accommodate a lifestyle that encapsulates a better experience than living in a city. A life immersed in sheer greenery, the shared compassion of society, and the luxury of time. Wave City offers a wide array of products ranging from independent floors, low and mid-rise apartments, affordable housing units, luxurious villas and apartments, to commercial properties and office spaces. Our every product ensures the pinnacle of fine living with 
            adherence to international standards, and the amalgamation of modern-day luxuries and amenities.</p><br></br>
            <p>Come, discover the smart city that boasts soaring high ceilings, grand bedrooms, superior modular kitchens, stylish angles, and quality fittings for an unrivaled lifestyle. The city also offers a few smart features like Fiber Optic Connectivity, 24X7 CCTV surveillance, Automated Water Management, Street Light Automation, 
            Waste Management, Central Command Centre, and Smart Metering System.</p>
       </div>
       <div className="home-about-image">
           <img src="https://www.wavecity.in/wp-content/uploads/2020/01/home_about_wc.jpg" alt="Wave image"/>
       </div>
    </div>
    <section className="home-projects">
          <h1 className="section-heading">Project Features </h1>
       <div className="home-projects-cards">
          <div className="home-projects-card">
              <div className="home-projects-card-img">
                  <img src="https://s3.eu-west-2.amazonaws.com/esuk-website/images/EU2pCrLTKyynMshNwOyc-730w-entcs-coastal-jpg" />
              </div>
              <div className="home-projects-card-heading">
                  <h1>Central Command Center</h1>
              </div>
          </div>
          <div className="home-projects-card">
              <div className="home-projects-card-img">
                  <img src="https://www.caughtoncamera.net//wp-content/uploads/2017/07/iStock-524578227-1024x542.jpg" />
              </div>
              <div className="home-projects-card-heading">
                  <h1>Homeland Security Management</h1>
              </div>
          </div>
          <div className="home-projects-card">
              <div className="home-projects-card-img">
                  <img src="https://i.gadgets360cdn.com/large/jio_fiber_image_1599035556162.jpg" />
              </div>
              <div className="home-projects-card-heading">
                  <h1>Jio Fiber Connectivity</h1>
              </div>
          </div>
          <div className="home-projects-card">
              <div className="home-projects-card-img">
                  <img src="https://www.constrofacilitator.com/wp-content/uploads/2020/08/water-management-methods.jpg" />
              </div>
              <div className="home-projects-card-heading">
                  <h1>Water Management System</h1>
              </div>
          </div>
          <div className="home-projects-card">
              <div className="home-projects-card-img">
                  <img src="https://cdn.unenvironment.org/s3fs-public/2017-09/slider2-ietc_0.jpg" />
              </div>
              <div className="home-projects-card-heading">
                  <h1>Solid Waste Management</h1>
              </div>
          </div>
          <div className="home-projects-card">
              <div className="home-projects-card-img">
                  <img src="https://airgreeninc.com/wp-content/uploads/air-green-systems-bg-1.jpg " />
              </div>
              <div className="home-projects-card-heading">
                  <h1>Air Quality</h1>
              </div>
          </div>
       </div>
       <button className="Know-More" type="submit">Know More</button>
    </section>
    <section id="home-products">
           <h1 className="section-heading">Our Products</h1>
        <div className="home-product-container">
        <div className="home-product-menu">
                 <h1>Dream Homes</h1>
                 <p>1, 2 & 3 BHK Mid-rise Residential Apartments</p>
                 <p><b>Starting From :</b><span> Rs. 17.02* Lakh + Taxes</span></p>
                 <button className="Know-More">Know More</button>
            <div className="Change-Button">
                 <button className="Change-Prev"><img src="https://img.icons8.com/doodle/48/000000/fast-forward--v3.png" height="20px" width="20px"/></button>
                 <button className="Change-Next"><img src="https://img.icons8.com/doodle/48/000000/fast-forward--v3.png" height="20px" width="20px"/></button>
            </div>
        </div>
        <div className="home-product-slider">
        </div>
        </div>
    </section>
    <section id="intro-video">
    <div className="intro-video-container">
        <h1>The city that thinks for you</h1>
        <div>
        {shown ? <VideoModal src="https://www.youtube.com/embed/Z-ZmD4Q1T4M"/> : null}
        <a onClick={() => setShown(!shown)}><img src="https://img.icons8.com/flat-round/64/000000/play--v1.png"/></a>
        </div>
        <video></video>
    </div>
    </section>
    <section id="location" className="section-design">
       <h1 className="section-heading">location advantage</h1>
       <div className="location-container">
       <div className="location-content">
          <div className="location-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.849542334441!2d77.48640171515865!3d28.664223382405194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1934e30505b%3A0x6bcac3cfd71bc573!2sWave%20City%20Ghaziabad%2C%20NH24!5e0!3m2!1sen!2sin!4v1652070703577!5m2!1sen!2sin" width="600" height="280" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
             <div className="location-content-heading">
             <h1>Strategically located at NH 24 Ghaziabad:-</h1>
             <p>(Approximate Travel Duration)</p>
             </div>
             <div className="location-content-body">
                 <ol>
                     <li >30 minutes from Akshardham Temple</li>
                     <li>15 minutes from Noida (Sector-62)</li>
                     <li>5 minutes from proposed Metro Station</li>
                     <li>10 minutes from 8 lane Delhi - Meerut Expressway</li>
                 </ol>
             </div>
        </div>
        <div className="location-video">
        <iframe width="560" height="415" src="https://www.youtube.com/embed/lm0aK_Nk5sE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>
       </div>
    </section>
    <section id="home-loan">
       <h1 className="section-heading">home loan partners</h1>
       <div className="home-loan-container">
        <div className="home-loan-content">
          <p>For the convenience of clients, Wave City has its own Banking & Financial assistance team, who assists the buyers in planning their loan amount, 
          term and helps them choose the financial institution according to their monetary needs.</p>
        </div>
        <div className="home-loan-scroll">
            <div id="hl-card-1" className="home-loan-card"></div>
            <div id="hl-card-2" className="home-loan-card"></div>
            <div id="hl-card-3" className="home-loan-card"></div>
            <div id="hl-card-4" className="home-loan-card"></div>
          </div>
       </div>
    </section>
    <footer> 
    </footer>
    </div>
    )
}

export default Home; 