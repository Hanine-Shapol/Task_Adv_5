
import type { ReactNode } from "react"
import "./MainSection.css"
interface Hero {
    mainTitle :string;
    description:string;
    content :ReactNode;
    img :string;
    direction :"Left"|"Right";
    isContactButton :boolean;
    isbackground ?: boolean
    isContactUsSec? :boolean
    
}
const MainSection = ({mainTitle ,description ,content , img , direction , isContactButton , isbackground , isContactUsSec}: Hero) => {
    const directionClass = direction === "Left" ? "flex-lg-row-reverse" : "flex-lg-row";
    const ContactBTN = isContactButton ? "button text-light" : "bg-transparent border-0"
    const Background = isbackground ? "background" : ""
    const hiddenImg = isContactUsSec ? "d-none d-lg-block" : ""
  return (
      <div className={`w-75 mx-auto d-flex flex-column ${directionClass} ${Background} flex-lg-row justify-content-between align-items-center MainSection`}>
        <div className="w-50 d-flex flex-column justify-content-between align-items-lg-start align-items-center">
        <h1 className="fw-bold z-3 p-0 text-lg-start text-center text-capitalize title">{mainTitle}</h1>
        <p className="text-lg-start text-center text-capitalize">{description}</p>
        <button className={`border-0 rounded-3 ${ContactBTN} fw-semibold text-uppercase`}>{content}</button>
        </div>
        <img src={img} className={`Image ${hiddenImg}`}/>
      </div>
  )
}

export default MainSection
