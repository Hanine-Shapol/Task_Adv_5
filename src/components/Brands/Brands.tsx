import spotify from '../../Images/spotify.svg'
import slack from "../../Images/slack.svg"
import dropbox from "../../Images/dropbox.svg"
import zoom from "../../Images/slack.svg"
import './Brands.css'
const Brands = () => {
  return (
    <div className='w-75 mx-auto d-flex justify-content-between align-items-center brands'>
      <img src={spotify} alt="spotify" className='brand'/>
      <img src={slack} alt="slack" className='brand' />
      <img src={dropbox} alt="dropbox" className='brand' />
      <img src={zoom} alt="zoom" className='brand' />
    </div>
  )
}

export default Brands
