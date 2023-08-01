import axios from 'axios'
import { url } from '../common/constants'
import { useLocation } from "react-router"
import { Link,} from "react-router-dom"
import { useHistory } from 'react-router-dom'
import { useState } from "react"
const Edit = () => {
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [Productdesc, setProductdesc] = useState('')
    const [Productname, setProductname] = useState('')
    const location = useLocation()
    const history = useHistory()

    
    const EditProduct=()=>{
    
        {
              const data=new FormData()
              data.append('price',price)
              data.append('quantity',quantity)
              data.append('Productdesc',Productdesc)
              data.append('Productname',Productname)
              
              axios.post(url+'/product/updateProduct/'+location.state.productid,data).then((response)=>{
                  const result=response.data
                  if(result.status==='success'){
                      alert('Update product successfully')
                      history.push('/productpage')
                  }
                  else{
                      alert('Update product failed error')
                  }
              })
                        
                         
           }
       }
     
      return (
        <div className="field-title">
          <h1 className="page-title">Update Product</h1>
          <div className="mb-3">
            <label htmlFor="">Productname&nbsp;&nbsp;:&nbsp;&nbsp;{location.state.productname}</label>
          </div>
          <div className="mb-3">
            <label htmlFor="">Price</label>
            <input
              onChange={(e) => {
                setPrice(e.target.value)
              }}
              type="number"
              className="form-control"
              placeholder={location.state.price}
            />
          </div>
         
          <div className="mb-3">
            <label htmlFor="">Quantity</label>
            <input
              onChange={(e) => {
                setQuantity(e.target.value)
              }}
              type="number"
              className="form-control"
              placeholder={location.state.quantity}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="">Productdesc</label>
            <input
              onChange={(e) => {
                setProductdesc(e.target.value)
              }}
              type="text"
              className="form-control"
              placeholder={location.state.productdesc}
            />
          </div>
          <div className="mb-3">
            <button onClick={EditProduct} className="btn btn-success">
              Update
            </button>&nbsp;&nbsp;
    
            <Link to="/productpage">
              <a className="btn btn-warning">Back</a>
            </Link>
          </div>
        </div>
      )
  }
export default Edit
