import "./Circle.css"
const Circle = ({ClassPosition} :{ClassPosition : string}) => {
  return (
    <div className={`rounded-circle position-absolute border-0 Circle ${ClassPosition} z-3`}>
    </div>
  )
}

export default Circle
