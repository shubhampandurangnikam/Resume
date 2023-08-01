import './cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCartAction } from '../actions/cartActions'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState ,useEffect} from 'react'
import { url } from '../common/constants'
import { useHistory } from 'react-router-dom'




const Cart = () => {
    const [total, setTotal] = useState('')
  const cartItems = useSelector((state) => state.cartItems)
  const dispatch = useDispatch()
  const history = useHistory()


  const removeFromCart = (product) => {
    console.log("cartItems"+product)
    dispatch(removeFromCartAction(product))
  }

  // const Addtocart = (product) => {
  //   console.log("pd"+product)
  //   console.log("pd"+product.productid)
  //   axios.post(url + '/cart/addtocart'+product).then((response) => {
  //     const result = response.data
  //     if (result.status === 'success') {
  //       alert('success achived occured while getting all products')
  //      // setProductsByName(result.data)
  //       console.log(result.data)
  //     } else {
  //       alert('error occured while getting all products')
  //     }
  //   })
  // }


  const Addtocart = (product,user) => {
    history.push('/addtocart',{product:product,
      user:user    })
  }

  const [user,setUser]=useState('')
  let list =localStorage.getItem('list')
  useEffect(()=>{
    getuser()   
  },[])
  const getuser = () => {
    axios.get(url + '/profile1/'+list).then((response) => {
      const result = response.data
      if (result.status === 'success') {
        setUser(result.data)
      } else {
         //alert('You need to signin first')
         history.push('/signin')
      }
    })
  
     }
  
  return (
    <div>
      <h1 className="page-title">{user.userfullname} Wishlist</h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Image</th>
            <th>Productid</th>
            <th>Productname</th>
            <th>Categoryid</th>
            <th>Productdesc</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Add To Cart</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((product) => {
            return (
              
              <tr>
                <td><img className="imagecart" src={url + '/' + product.image} /></td>
                <td>{product.productid}</td>
                <td>{product.productname}</td>
                <td>{product.categoryid}</td>
                <td>{product.productdesc}</td>
                <td>{product.brand}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <button className="btn btn-success"
                    onClick={() => {
                      Addtocart(product,user)
                    }}>
                    Add to Cart
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <button className="btn btn-danger"
                    onClick={() => {
                      removeFromCart(cartItems)
                    }}>
                   EmptyWishList
                  </button>
      &nbsp;&nbsp; <Link to="/home"><a className="btn btn-warning">Back</a></Link>
      &nbsp;&nbsp; <Link to="/showcart"><a className="btn btn-info">Showcart</a></Link>
    </div>
  )
}



export default Cart