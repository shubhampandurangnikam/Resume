import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { url } from '../common/constants'
import { useHistory } from 'react-router-dom'
import './Signin.css'




const Signin  = ()=> {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    useEffect(() => {
        localStorage.setItem('list',email)
    }, [email]);


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
                if(result.status === 'success'){
                    alert('you are sigined in successfully')
                   
                    history.push('/home')
                }else{
                    console.log(result.error)
                    alert('user not found please signup first')
                }
            })
        }
    }
    return (
    <div className="field-title"> 
     <a className="navbar-brand" href="/home">
     <img src="images/poster5.jpg"alt="img" className="signin" />
     </a>
         <div ><h1 className="page-title"  > Signin </h1></div>
         <div className="mb-3">
             <label className="field-title" htmlFor="email"> Email </label>
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
         <div className="page-title">
         <div  className="mb-3">
             <button onClick= {authenticate} className="btn btn-success">Signin</button>
             <Link to="/Home">
             </Link>
             &nbsp;
             &nbsp;

         <Link to="/signup">
            <a className="btn btn-warning">Signup</a>
        </Link>
        &nbsp;
             &nbsp;
              <Link to="/forgetpassword"><a >Forgetpassword</a></Link>
         </div>
         </div>
        </div>)
}

export default Signin; 