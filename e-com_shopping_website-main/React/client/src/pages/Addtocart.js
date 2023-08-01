import { useLocation } from "react-router" 
import axios from 'axios'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { url } from '../common/constants'

const Addtocart =()=>{
    const location = useLocation()
    const history = useHistory()
    const [quantity, setQuantity] = useState('')
   const p =location.state.product
   const u =location.state.user
    
    const addtocart=()=>{
    
        {
                  if(quantity<=0){
                      alert('quantity should be greater than zero')
                    //   history.push('/profile',{userid:(result.data.userid)})
                  }
                  else{
                    axios.get(url+'/cart/addtocart/'+u.userid+'/'+p.productid+'/'+quantity).then((response)=>{
                        const result=response.data
                      alert('Successfully added into cart')
                    })
                  }
           }
       }

       const showcart = () => {
        history.push('/showcart',{
          user:u  })
      }


    return (
        <div className="field-title">
           
           
          <h2 className="page-title">{u.userfullname} Cart</h2>
          
         <div></div>
          <div className="table-container">
            <table className="table table-hover">
            <thead>
                <tr>
                    <td>ProductImage</td>
                    <td>Productid</td>
                    <td>Productname</td>
                    <td>Categoryid</td>
                    <td>Price</td>
                    {/* <td>Quantity</td> */}
                    <td>Brand</td>
                    <td>Productdesc</td>
                    {/* <td>Add Quantity</td> */}
                   
                </tr>
                </thead>
                      <tbody>
                          <tr>
                            <td><img src={url + '/' + p.image} className="thumbnail-sm" /></td>
                            <td>{p.productid}</td>
                            <td>{p.productname}</td>
                            <td>{p.categoryid}</td>
                            <td>{p.price}</td>
                            {/* <td>{p.quantity}</td> */}
                            <td>{p.brand}</td>
                            <td>{p.productdesc}</td>
                           </tr>
                          </tbody>
            </table>
            <div className="mb-3">
        <label htmlFor="">Quantity</label>
        <input
          onChange={(e) => {
            setQuantity(e.target.value)
          }}
          type="number"
          className="form-control"
        />
      </div>
      <div className="mb-3">
            <button onClick={addtocart} className="btn btn-success">Add to Cart</button> &nbsp;
             &nbsp;
            <Link to="/home"><a className="btn btn-warning">Back</a></Link>&nbsp;&nbsp;&nbsp;&nbsp;
            {/* <Link to="/showcart"><a className="btn btn-info">Show Cart</a></Link> */}
            <button onClick={showcart} className="btn btn-info">Showcart</button> &nbsp;
             &nbsp;
            </div>
            </div>
        </div>
      )
    }
export default Addtocart