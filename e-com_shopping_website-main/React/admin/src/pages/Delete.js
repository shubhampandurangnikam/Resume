import axios from 'axios'
import { url } from '../common/constants'
import { useLocation } from "react-router"
import {useEffect } from "react"
import { useHistory } from 'react-router-dom'
const Delete = () => {
    const location = useLocation()
   
    const history = useHistory()

      useEffect(() => {
     DeleteProduct()
       }, [])

    const DeleteProduct = () => {
        axios.get(url + '/product/delete/'+location.state.productid).then((response) => {
          const result = response.data
          if (result.status === 'success') {
            alert('Successfully deleted')
            history.push('/productpage')
          } else {
            alert('error occured while deleting product')
          }
        })
      }
     
  return (
      <div>
      </div>
      )
  }
export default Delete
