import { useDispatch, useSelector } from 'react-redux'
import { removeFromCartAction } from '../actions/cartActions'
import { useEffect } from 'react'
const Logout =()=>{
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cartItems)
    useEffect(() => {
        clearSession()
        removeFromCart(cartItems)
      }, [])
     
      const removeFromCart = (product) => {
        console.log("cartItems"+product)
        dispatch(removeFromCartAction(product))
      }

      let list =localStorage.getItem('list')
      const clearSession = () => {
        localStorage.removeItem('list')
        }
      
    return (
        <div >
        <img src="images/ThankingPage.png"alt="img" className="poster" />
        </div>
    )
    }
export default Logout