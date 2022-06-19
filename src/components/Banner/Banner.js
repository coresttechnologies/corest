import React from "react";
import "./Banner.css";
import Image from '../../images/Casual-12.jpg';
import Avatar from '../../images/Formal-photoedit223.jpg';
import Rahoof from '../../images/rahoof-edited5-cropped.png';
import RahoofHeli from '../../images/landscape.jpg';
import bgImage from '../../images/background.png';
import jet from '../../images/jet.png';
import computer from '../../images/computer.png';
import alarmcomputer from '../../images/alarmcomputer.png';
import mobile from '../../images/mobile.png';
import search from '../../images/search.png';
import AboutImage from '../../images/about.png';
import Slider from '../slider2/slider2';
function Banner() {
  return (
    <div className="banner">
      <div className="firstBanner" id="home" style={{backgroundImage:`url(${bgImage})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        <div className="bannerContents">
          <div className="bannerDetails">
            <h1>We are a digital agency</h1>
          <button className="firstBannerButton">BOOK NOW</button>
          </div>
          <div className="bannerImage">
            <img src={jet} alt="" />
          </div>
          
        </div>

        <div className="servicesDiv">
          <div className="futursticdesigns tab">
            <i></i>
            <h4>Futurstic Desings</h4>
            <p>
              We design aesthetically pleasing, eccentric websites and
              applications that are future-ready.
            </p>
          </div>
          <div className="innovativeSolutions tab">
            <i></i>
            <h4>Innovative solutions </h4>
            <p>
              We develop solutions that are tailored to fit any industry or
              business so that you can improve efficiency and streamline the
              workflow.
            </p>
          </div>
          <div className="highQuality tab">
            <i></i>
            <h4>High quality</h4>
            <p>
              We have a team of great work ethics, passionate and smart working
              so that we could ensure the quality of your products.
            </p>
          </div>
        </div>
      </div>
      <h1 className="ourServiceTitle">Our Services</h1>
      <div className="services" id="services">
        <div className="uiuxDesigns servicesTabs">
          <img src={computer} alt="" className="uiDesign" />
          <h1>UI/UX Design</h1>
        </div>
        <div className="DigitalMarketing servicesTabs">
          <img src={alarmcomputer} alt="" className="uiDesign" />
          <h1>Web Development</h1>
        </div>
        <div className="uiuxDesigns servicesTabs">
          <img src={mobile} alt="" className="uiDesign" />
          <h1>App Development</h1>
        </div>
        <div className="SeoOptimisation servicesTabs">
          <img src={search} alt="" className="uiDesign" />
          <h1>SEO Optimisation</h1>
        </div>
      </div>
      <h1 className="ourServiceTitle">About Us</h1>
      <div className="about" id="about-us">
        <div className="aboutImage">
          <a href="#home"><img src={AboutImage} alt="" className=""/></a>
        </div>
        <div className="aboutContents">
          <h1>You dream, We Design, Together We Deploy!</h1>
          <h4>
            We build products that are tailor-made to fit your needs. Helping
            people to Design, Build, and Deploy their Dreams in a strategic way.<br></br>
            Our vision is to help people/businesses to build their dreams and to
            bring a technologically advanced ecosystem to every sector. Our team
            is working on various projects to make human life much easier.<br></br> Our
            Mission is to make people aware of how technology is taking place in
            our daily lives and how important is to understand that world is
            being a part of the digital evolution and now its time for you too!<br></br>
            The best time for the transformation is NOW & let's turn digital
            with corest.
          </h4>
          <button>Read More</button>
        </div>
      </div>
      <div className="Counters">
        <div className="CounterTab">
          <h1>850+</h1>
          <p>Happy Clients</p>
        </div>
        <div className="CounterTab">
        <h1>200+</h1>
          <p>Project Complete</p>
        </div>
        <div className="CounterTab">
        <h1>100+</h1>
          <p>Win Awards</p>
        </div>
        <div className="CounterTab">
        <h1>32</h1>
          <p>Team Members</p>
        </div>
      </div>
      <div className="leadership">
        <h1 className="leftContentTitleMb">Leadership</h1>
        <div className="leadershipContents">
          <div className="imageContent">
            <img src={Rahoof} alt="" />
          </div>
          <div className="leftContent">
            <h1 className="leftContentTitle">Leadership</h1>
            <p className="firstParagraph">
              <span>Rahoof Nazer</span>, young founder of Corest hails from
              a remote village in Palakkad district of Kerala, India. As an
              idealist, Corest was founded while he was only 18 years old and
              studying in class 12th!
            </p>
            <p className="secondParagraph">
              Being a self-made and enthusiastic techpreneur, Rahoof always
              loves to take challenges and solve problems to make it an
              opportunity. Having a global vision, Rahoof always keeps his eyes
              high on global IT industry to make human life much easier.
            </p>
          </div>
          
          <div className="rightContent">
            <img src={RahoofHeli} alt="" />
          <p>
              “The future of technology looks 1000x significant than present.
              I'm excited about all the possibilities that creativity has to
              offer with technology - there's really no limit to what can be
              done!”
            </p>
            <div className="credits">
              <img src={Avatar} alt="" />
              <div className="creditsDetails">
                <h1>Rahoof Nazeer</h1>
                <p>Founder & CEO, Corest</p>
              </div>
            </div>
          </div>
        </div>
        <div className="leadershipContents">
          <div className="leftContent">
            <h1 className="leadership2">Leadership</h1>
            <p className="firstParagraph">
              <span>Rahoof Nazer</span>, young founder of Corest hails from
              a remote village in Palakkad district of Kerala, India. As an
              idealist, Corest was founded while he was only 18 years old and
              studying in class 12th!
            </p>
            <p className="secondParagraph">
              Being a self-made and enthusiastic techpreneur, Rahoof always
              loves to take challenges and solve problems to make it an
              opportunity. Having a global vision, Rahoof always keeps his eyes
              high on global IT industry to make human life much easier.
            </p>
          </div>
          <div className="imageContent">
          <img src={Image} alt="" />
          </div>
          <div className="rightContent rightContent1">
          <p>
              “The future of technology looks 1000x significant than present.
              I'm excited about all the possibilities that creativity has to
              offer with technology - there's really no limit to what can be
              done!”
            </p>
            <div className="credits">
              <img src={Avatar} alt="" />
              <div className="creditsDetails">
                <h1>Rahoof Nazeer</h1>
                <p>Founder & CEO, Corest</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="ourWorksTitle">Our Works</h1>
      <div className="projects" id="projects">
        <a href="https://rtacades.com/" className="work works work1"></a>
        <a href="https://bkmart.me/" className="work works work2"></a>
        <a href="https://fourcees.today/" className="work works work3"></a>
        <a href="http://www.finzobusiness.com/" className="work works work4"></a>
      </div>
      
      
      <h1 className="testimonialsttitle">Testimonials</h1>
      <div className="testimonials">
        <Slider></Slider>
      </div>
    </div>
  );
}

export default Banner;
