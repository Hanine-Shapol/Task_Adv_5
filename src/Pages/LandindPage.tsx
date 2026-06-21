import Brands from "../components/Brands/Brands"
import NavBar from "../components/NavBar/NavBar"
import SpanText from "../components/SpanText/SpanText"
import About1 from "../Images/designer-team-working-on-creative-design.png"
import About2 from "../Images/businessman-analyzing-data.png"
import Hero from "../Images/hero-img.png"
import customerSupport from "../Images/customer-support.png"
import { FaArrowDown, FaArrowRight } from "react-icons/fa"
import Footer from "../components/Footer/Footer"
import Slider from "../components/Slider/Slider"
import Circle from "../components/Circle/Circle"
import MainSection from "../components/MainSection/MainSection"
const LandindPage = () => {
  return (
    <div className="position-relative overflow-hidden">
      <Circle ClassPosition="top-0 Left-0 translate-middle"/>
      <NavBar/>
      {/* Hero Section */}
      <section id="home">
        <MainSection mainTitle="Building digital products, brands & experience" 
      description="Digital Agency is your online team mangement tool that easy and prompt" 
      content="contact us" 
      img={Hero}
      direction="Right"
      isContactButton={true}
      />
      </section>
      {/* Brands */}
      <SpanText text="Trusted by 4,000+ companies"/>
      <Brands/>
      {/* About Section */}
      <section id="about" className="position-relative">
        <MainSection mainTitle="Branding & Design system" 
      description="Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups" 
      content={<> <FaArrowRight  className="d-none d-lg-block"/> <FaArrowDown className="d-block d-lg-none"/></>} 
      direction="Left" 
      img={About1}
      isContactButton={false} />
      <Circle ClassPosition="top-50 rightCircle"/>
      <MainSection mainTitle="Custome & Plugin Development" 
      description="Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups" 
      content={<><FaArrowRight className="d-none d-lg-block"/><FaArrowDown className="d-block d-lg-none"/></>} 
      direction="Right" 
      img={About2}
      isContactButton={false}/>
      </section>
      {/* TESTIMONIALS */}
      <section id="TESTIMONIALS">
      <SpanText text="TESTIMONIALS"/>
      <Slider/>
      </section>
      {/* Contact us */}
      <section id="contact_us">
        <MainSection mainTitle="Be a part of the next big thing"
      description="We work with Brans, Startups, to SMEs. Colaborate for more impact and growt" 
      content="contact us" 
      img={customerSupport} 
      direction="Left"
      isContactButton={true}
      isbackground={true}
      isContactUsSec={true}
      />
      </section>
      <Footer/>
    </div>
  )
}

export default LandindPage
