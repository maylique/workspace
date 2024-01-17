
import './App.css'
import products from './assets/data/products'
import ProductList from './assets/components/productList/ProductList'

function App() {


  return (
    <>  
    <ProductList 
    products={products}
    />
      </>
  )
}

export default App
