import Button from '../button/Button';
import './productitem.css'

const ProductItem = ({img, product, price}) => {
    return ( 
    <>
    <figure>
        <img src={img} alt="" />
        <p> {product} </p>
        <p> {price} </p>
        <Button />
    </figure>
    </> );
}
 
export default ProductItem;