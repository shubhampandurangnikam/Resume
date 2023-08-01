import axios from 'axios'
import { url } from '../common/constants'
import { useLocation } from "react-router"
import {useEffect } from "react"
import { useHistory } from 'react-router-dom'
const Delete = () => {
    const location = useLocation()
    const p =location.state.productid
    const history = useHistory()

      useEffect(() => {
     DeleteProduct()
       }, [])

    const DeleteProduct = () => {
      console.log("hi"+p.cartid)
        axios.delete(url + '/cart/delete/cartid/'+p.cartid).then((response) => {
          console.log("hii"+p.cartid)
          const result = response.data
          alert('Successfully deleted')
          history.push('/showcart')
         // history.push('/showcart',{user:p.userid})
        //   if (result.status === 'success') {
        //     alert('Successfully deleted')
        //     history.push('/productpage')
        //   } else {
        //     alert('error occured while deleting product')
        // history.push('/addtocart',{product:product,
        //     user:user    })
        // //   }
        })
      }
     
  return (
      <div>
      </div>
      )
  }
export default Delete
