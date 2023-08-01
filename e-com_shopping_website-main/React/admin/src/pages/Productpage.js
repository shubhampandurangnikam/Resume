import axios from 'axios'
import { useState, useEffect } from 'react'
import { url } from '../common/constants'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
const  Productpage = () => {
  const [products, setProduct] = useState([])
  const history = useHistory()

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = () => {
    axios.get(url + '/product/').then((response) => {
      const result = response.data
      if (result.status === 'success') {
        setProduct(result.data)
      } else {
        alert('error occured while getting all albums')
      }
    })
  }
  const Deleteproduct = (product) => {
    history.push('/delete',{productid:product.productid}) 
                              }
 const Editproduct = (product) => {
    history.push('/edit',{productid:(product.productid),
                           price:(product.price),
                           productdesc:(product.productdesc),
                           productname:(product.productname),
                           quantity:(product.quantity) }) 
                              }
  
  return (
    <div className="field-title">
       
       
      <h2 className="page-title">Products Detail</h2>
      <Link to="/adminpage"><a className="btn btn-success">Add Product</a></Link>
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
                <td>Quantity</td>
                <td>Brand</td>
                <td>Productdesc</td>
                <td>Update</td>
                <td>Delete</td>
            </tr>
            </thead>
            {products.map((product)=>{
              return (
                  <tbody>
                      <tr>
                        <td><img src={url + '/' + product.image} className="thumbnail-sm" /></td>
                        <td>{product.productid}</td>
                        <td>{product.productname}</td>
                        <td>{product.categoryid}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td>{product.brand}</td>
                        <td>{product.productdesc}</td>
                        <td><button onClick={() => {
             Editproduct(product)
            }} className="btn btn-warning">Update</button><br/>
                         </td>  
                         <td>
                         <button onClick={() => {
              Deleteproduct(product)
            }} className="btn btn-danger">Delete</button></td> 
                       </tr>
                      </tbody>
              )
            
            
            
            })}
                

           
       
        </table>
        </div>
    </div>
  )
}

export default Productpage
