import './SpanText.css'
const SpanText = ({text}:{text:string}) => {
  return (
    <p className="text-center fw-light text">
      {text}
    </p>
  )
}

export default SpanText
