import './item.scss'
import itemsList from '../../../itemImages/imageList'

const Item = ({ name }) => {
  return (
    <div className='item-container'>
      <img src={itemsList[name]} alt='' />
    </div>
  )
}
export default Item
