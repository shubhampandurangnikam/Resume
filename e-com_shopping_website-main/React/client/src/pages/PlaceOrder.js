import { useHistory } from 'react-router-dom'
import { useLocation } from "react-router"
import { useState, useEffect } from 'react'
import { url } from '../common/constants'
import axios from 'axios'
import './PlaceOrder.css'

const PlaceOrder  = ()=> {
    const history = useHistory()
    const location = useLocation()
    const userd = location.state.userdata
    useEffect(()=>{
        getuser ()

      },[])

      const [user,setUser]=useState('')
      //let list =localStorage.getItem('list')
      const getuser = () => {
        axios.get(url + '/profile/'+userd.userid).then((response) => {
          const result = response.data
          if (result.status === 'success') {
            setUser(result.data)
          }
        })
      
         }



    return (
        <div>
            <table>
                <tbody>
                    <div className="design">
                    <h3>Hello &nbsp;{user.userfullname}&nbsp; your &nbsp;order &nbsp;is &nbsp;placed</h3> 
                    </div>
                    <div className="design">
                    Please Verify Your Details :-
                    </div>
                    <br></br>
                    <div className="design">
                    Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp; {user.useraddress}
                    </div>
                    <div className="design">
                    City &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;  : &nbsp; {user.city}
                    </div>
                    <div className="design">
                    Postal Code. &nbsp; : &nbsp; {user.postalcode}
                    </div>
                    <div className="design">
                    Phone No. &nbsp;&nbsp;&nbsp;&nbsp; : &nbsp; {user.phoneno}
                    </div>
                    <br></br>

                    <div >
                    <h5>Your order will be delivered soon</h5>
                    </div>
                    <img classname="placeimage" src="images/smile.jpg" />


                </tbody>
            </table>
        </div>
    )
}

export default PlaceOrder