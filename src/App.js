import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
import Form from './components/Form';

function App() {


  // state var for the database
  const [products, setProducts] = useState ([])


  useEffect (() => {
    // make the call to the server
    axios.get("http://localhost:8000/api/products")
      .then((serverRes) => {
        console.log("SERVER SUCCESS", serverRes.data.Products)
        setProducts(serverRes.data.Products)
      })
      .catch(err => {
        console.log("SERVER ERROR", err)
      })
  }, [])


  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Form/>
      {/* {
        products.map((product) => {
          return <div key={product._id}>
            {JSON.stringify(products)}
          </div>
        })
      } */}
    </div>
  );
}

export default App;