import axios from "axios"
import { useState } from "react"
import { Link,useHistory } from "react-router-dom"


const Forgetpassword=()=>{
const url = 'http://localhost:8080'
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const history =useHistory()

const Setpassword=()=>{
    if (email.length===0){
        alert('enter email')
    }else if(password.length===0){
       alert('enter password')
    }else {
           const data=new FormData()
           data.append('email',email)
           data.append('password',password)
           axios.post(url+'/forgetpassword',data).then((response)=>{
               const result=response.data
               if(result.status==='success'){
                alert('Reset Password done successfully')
              history.push('/signin')
               }else{
                   alert('login failed error')
               }
           })
                     
                      
        }
    }
    

    return (
    <div>
        <h2 className="page-title">Forgetpassword</h2>
        <div className="mb-3">
         <label htmlFor="">Email</label>
         <input onChange={(e)=>{
             setEmail(e.target.value)
         }} type="email" className="form-control"/>
        </div>

        <div className="mb-3">
         <label htmlFor="">NewPassword</label>
         <input onChange={(e)=>{
             setPassword(e.target.value)
         }} type="password" className="form-control"/>
        </div>

        <div className="mb-3">
        <button onClick={Setpassword} className="btn btn-success">Setpassword</button> &nbsp;
             &nbsp;
        <Link to="/signin"><a className="btn btn-warning">Back</a></Link>
        </div>
    </div>
    )
}
export default Forgetpassword