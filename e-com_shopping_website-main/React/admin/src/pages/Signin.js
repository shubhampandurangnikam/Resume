import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { url } from '../common/constants'
import { useHistory } from 'react-router-dom'



const Signin  = ()=> {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()
    
    const authenticate =()  => {
        if(email.length == 0) {
            alert('enter title')
        }else if(password.length == 0){
            alert('enter password')
        }else {
            const data = new FormData()
            data.append('email', email)
            data.append('password', password)

            axios.post(url + '/signin', data).then((response) => {
                const result = response.data
                if(result.status=="success"){
                if(result.data.userrole === 'admin'){
                    alert('you are sigined in successfully')
                    history.push('/profile',{userid:(result.data.userid)})}
                }else{
                    console.log(result.error)
                    alert('Error incorrect email or you are not admin')
                }
            })
        }
    }
    return (<div className="field-title"> 
         <div ><h1 className="page-title"  > Sign in </h1></div>
         <div className="mb-3">
             <label htmlFor="email"> Email </label>
             <input placeholder="Enter email" onChange={(e) => {
                 setEmail(e.target.value)
             }} type="email" className="form-control"/>
         </div>
         <div className="mb-3">
             <label htmlFor="password"> Password </label>
             <input placeholder="Enter password" onChange={(e) => {
                 setPassword(e.target.value)
             }} type="password" className="form-control"/>
         </div>
         <div className="mb-3">
             <button onClick= {authenticate} className="btn btn-success">Sign in</button>
             <Link to="/Home">
             </Link>
             &nbsp;
             &nbsp;

         <Link to="/signup">
            <a className="btn btn-warning">Sign up</a>
        </Link>
        &nbsp;
             &nbsp;
              <Link to="/forgetpassword"><a >Forget Password</a></Link>
         </div>
        </div>)
}

export default Signin; 