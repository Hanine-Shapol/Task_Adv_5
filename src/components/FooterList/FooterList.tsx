
interface item {
    itemTitle :string
}
interface list {
    ListTitle :string
    items :Array<item>
}
const FooterList = ({ListTitle ,items} : list) => {
  return (
      <div>
        <ul className="list-unstyled">
        <h2 className="text-lg-start text-center fw-bold">{ListTitle}</h2>
        {items.map((item , index) =>{
            return(
            <li key={index} className="text-lg-start text-center item">{item.itemTitle} </li>
            )
        })}
      </ul>
    </div>
  )
}

export default FooterList
