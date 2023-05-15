import React, {useState} from 'react'
import axios from 'axios';

const Form = (props) => {


    // state var for the form
    const[title, setTitle] = useState("");
    const[price, setPrice] = useState(0);
    const[description, setDescription] = useState("");


    //form submission
    const createProduct = (e) => {
        e.preventDefault();
        
        // create the object that mimics the MODEL
        const tempObjToSendToServer = {
        title,
        price,
        description
    }

    // send it to the server
    axios.post("http://localhost:8000/api/products", tempObjToSendToServer)
        .then((serverRes) => {
            console.log(serverRes)
        })
        .catch((errRes) => {
            console.log(errRes)
        })
}


  return (
    <div>
        <form onSubmit={createProduct}>
            <label>Title</label>
            <input type="text" onChange = {(e) => setTitle(e.target.value)} value={title} />
            <br />
            <label>Price</label>
            <input type="number" onChange = {(e) => setPrice(e.target.value)} value={price} />
            <br />
            <label>Description</label>
            <input type="text" onChange = {(e) => setDescription(e.target.value)} value={description} />
            <br />
            <button>Create</button>
        </form>
    </div>
  )
}

export default Form