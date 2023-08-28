import axios from "axios";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react"
import Navbar from "./Navbar";


function Home() {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/product/allProducts`)
            .then(res =>{
              console.log(res.data)
              setProducts(res.data)
            } )
            .catch(err => console.log(err));
        }, [])

    return(
        <>
        <div className="container my-4">
        <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
        </>
    )
}

export default Home;