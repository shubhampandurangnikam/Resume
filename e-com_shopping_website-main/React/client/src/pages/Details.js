import { useLocation } from 'react-router'
import { url } from '../common/constants'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import RowDetails from './RowDetails'

import { useDispatch } from 'react-redux'
import { addToCartAction } from '../actions/cartActions'
import { Link } from 'react-router-dom'
import './Details.css'

const Details = () => {
    const [productsByName, setProductsByName] = useState([])
    const location = useLocation()
    const [producbytid, setProducbytid] = useState('')
    const productbyid = location.state.productid

    const history = useHistory()
    const dispatch = useDispatch()


    useEffect(() => {
      
        getProductsByProductName()
        getProductsByProductId()
    }, [])

    const addToCart = (producbytid1) => {
      console.log(Details)
      console.log(productbyid)
      console.log("hi")
      console.log(producbytid1)
   
      // call the API to add the product to the cart
      dispatch(addToCartAction(producbytid1))
    }

    const getProductsByProductId = () => {
      axios.get(url + '/product/prodbyproductid/' + productbyid).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          setProducbytid(result.data)
          console.log(result.data)
        } else {
          alert('error occured while getting all products')
        }
      })
    }

    const getProductsByProductName = () => {
        axios.get(url + '/product/prodbyname/' + location.state.productname).then((response) => {
          const result = response.data
          if (result.status === 'success') {
            setProductsByName(result.data)
            console.log(result.data)
          } else {
            alert('error occured while getting all products')
          }
        })
      }

      const getDetailsOfSelectedProduct = (product) => {
        console.log(product)
        // send the GET request
        axios.get(url + '/product/prodbyname/' + product.productname).then((response) => {
          const result = response.data
          if (result.status === 'success') {
            console.log(product.productid)
            history.push('/details', {
              product: result.data,
              productid:product.productid,
              productname: product.productname,
              productnamedesc: product.productdesc,
              price: product.price,
              brand: product.brand,
              image: product.image,
            })
          } else {
            console.log(result.error)
            alert('error occured while getting all album')
          }
        })
      }

  
  return (
    <div >
    <table>
        <tr>
            <td>
            <img
            className="image1"
            src={url + '/' + location.state.image}
            alt=""/> 
            </td>
            <td >
            <div className="details"> <h3 className="title">{location.state.productname}</h3></div>
            <div className="details">PRODUCT DETAILS</div>
            <br></br>
            <div className="details">{location.state.productnamedesc}</div>
            <br></br>
            <div className="details">Rs : {location.state.price}</div>
            <br></br>
            <div className="details">Brand : {location.state.brand}</div>
            <br></br>
            <div className="details"><button className="btn btn-warning"
                    onClick={() => {
                      addToCart(producbytid)
                    }}>
                    Add To Whishlist
                  </button>
                  {/* &nbsp;&nbsp; <Link to="/cart"><a className="btn btn-success">Show Cart</a></Link> */}
                  </div>
            <br></br>
            </td>
        </tr>
    </table>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
        <div className="item-container1">
          <RowDetails
            items={productsByName}
            onItemSelect={getDetailsOfSelectedProduct}
           
          />
           </div>

   </div>
         
  )
}
export default Details