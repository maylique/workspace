import ProductItem from "../productItem/ProducItem";

const ProductList = ({products}) => {
    return ( <> 
        {products.map((data, index) => {
            return (
                <div key = {index}>
                    <ProductItem 
                    img={data.img}
                    product={data.product}
                    price={data.price}
                    />
                </div>
            )
        })}
    </> );
}
 
export default ProductList;