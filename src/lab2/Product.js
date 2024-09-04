import Quantity from "./Quantity";
import {products} from './ProductData.js'
function Product(){
    return(
        <div className="products">
        {products.map((el)=>{
           return <div key={el.id} className="card">
            <img src={el.img} alt={el.name}/>
            <h2>{el.name}</h2>
            <h4>{el.category}</h4>
            <p> ${el.price}</p>
            <Quantity/>
            </div>
        })}
        </div>
    )
}
export default Product;