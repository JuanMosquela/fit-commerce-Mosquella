import ItemList from '../itemList/ItemList'
import './itemListContainer.css';
import Background from "../../img/slide.jpg"


const ItemListContainer = () => {
  return (
    <div className="item-container">
      <img className='background' src={Background} alt="" />
      <ItemList />

    </div>
  )
}
export default ItemListContainer