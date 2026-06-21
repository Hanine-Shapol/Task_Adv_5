import "./Card.css"
interface CardProps {
    img:string
    name:string
    description:string
}
const Card = ({img , name , description}: CardProps) => {
  return (
    <div className="card border-0 rounded-3 d-flex flex-column justify-content-center align-items-center">
      <img src={img} className="mx-auto img rounded-circle" />
      <h2 className="textColor ">{name}</h2>
      <p className=" textColor text-center">{description}</p>
    </div>
  )
}

export default Card