import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { url } from '../common/constants'
import { useHistory } from 'react-router-dom'

const Signup  = ()=> {
    const [userfullname, setUserfullname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [useraddress, setUseraddress] = useState('')
    const [phoneno, setPhoneno] = useState('')
    const [gender, setGender] = useState('')
    const [city, setCity] = useState('')
    const [postalcode, setPostalcode] = useState('')
    const [userrole, setUserrole] = useState('admin')

    const history = useHistory()
    
    const authenticate =()  => {
        if(userfullname.length == 0){
            alert('enter name')
        }else if(email.length == 0){
            alert('enter email')
        }
        else if(password.length == 0) {
            alert('enter password')
        }else if(useraddress.length == 0){
            alert('enter address')
        }
        else if(phoneno.length == 0) {
            alert('enter phoneno')
        }else if(gender.length == 0){
            alert('enter gender')
        }
        else if(city.length == 0) {
            alert('enter city')
        }else if(postalcode.length == 0){
            alert('enter postalcode')
        }else {
            const data = new FormData()
            data.append('userfullname', userfullname)
            data.append('email', email)
            data.append('password', password)
            data.append('useraddress', useraddress)
            data.append('phoneno', phoneno)
            data.append('gender', gender)
            data.append('city', city)
            data.append('postalcode', postalcode)
            data.append('userrole', userrole)

            axios.post(url + '/signup', data).then((response) => {
                const result = response.data
                if(result.status === 'success'){
                    alert('you are siginup in successfully')
                    history.push('/signin',{userid:(result.data.userid)})
                }else{
                    console.log(result.error)
                    alert('user not found please signup first')
                }
            })
        }
    }
    return (<div  className="field-title"> 
         <div ><h1 className="page-title"  > Sign up </h1></div>
         <div className="mb-3">
             <label htmlFor="userfullname"> Name </label>
             <input placeholder="Enter name" onChange={(e) => {
                 setUserfullname(e.target.value)
             }} type="text" className="form-control"/>
         </div>
         <div className="mb-3">
             <label htmlFor="email"> Email </label>
             <input placeholder="enter email" onChange={(e) => {
                 setEmail(e.target.value)
             }} type="email" className="form-control"/>
         </div>
         <div className="mb-3">
             <label htmlFor="password"> Password </label>
             <input placeholder="enter password" onChange={(e) => {
                 setPassword(e.target.value)
             }} type="password" className="form-control"/>
         </div>
         <div className="mb-3">
             <label htmlFor="useraddress"> Address </label>
             <input placeholder="enter address" onChange={(e) => {
                 setUseraddress(e.target.value)
             }} type="text" className="form-control"/>
         </div>
         <div className="mb-3">
             <label > Phone no </label>
             <input placeholder="enter phone no" onChange={(e) => {
                 setPhoneno(e.target.value)
             }} type="text" className="form-control"/>
         </div>

        <div className="mb-3">  
       
            <label> Gender </label> &nbsp;
            &nbsp;
            <input name="gender" type="radio" value="male" id="male"
                    onChange={(e) => {
                    setGender(e.target.value)}}/>
            <label for="male">Male</label>
            
            &nbsp;    
            &nbsp;
            <input name="gender" type="radio" value="female" id="female"
                onChange={(e) => {
                setGender(e.target.value)}} />
            <label for="female">Female</label>
               
        </div>  
         <div className="mb-3">
             <label> City </label>
             <input placeholder="enter city"  onChange={(e) => {
                 setCity(e.target.value)
             }} type="text" className="form-control"/>
         </div>
         <div className="mb-3">
             <label> Postalcode </label>
             <input placeholder="enter postal code" onChange={(e) => {
                 setPostalcode(e.target.value)
             }} type="text" className="form-control"/>
         </div>
         <div className="mb-3">
             <input onChange={(e) => {
                 setUserrole(e.target.value)
             }} type="hidden" value="admin" className="form-control"/>
         </div>
         <div className="mb-3">
             <button onClick= {authenticate} className="btn btn-success">Sign up</button>
             
         </div>
        </div>)
}

export default Signup;