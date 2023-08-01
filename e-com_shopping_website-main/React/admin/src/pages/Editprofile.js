import axios from "axios"
import { useState } from "react"
import { Link,useHistory } from "react-router-dom"
import { useLocation } from "react-router" 

const Editprofile=()=>{
    const history =useHistory()
    const location = useLocation()
    

const url = 'http://localhost:8080'
const [email,setEmail]=useState('')
const [userfullname,setFullname]=useState('')
const [phoneno,setPhoneno]=useState('')
const [gender,setGender]=useState('')
const [city,setCity]=useState('')
const [postalcode,setPostalcode]=useState('')
const [userrole,setUserrole]=useState('')



const edit=()=>{
    
     {
           const data=new FormData()
           data.append('email',email)
           data.append('userfullname',userfullname)
           data.append('phoneno',phoneno)
           data.append('gender',gender)
           data.append('city',city)
           data.append('postalcode',postalcode)
           data.append('userrole',userrole)
           axios.post(url+'/editprofile/'+location.state.userid,data).then((response)=>{
               const result=response.data
               if(result.status==='success'){
                   alert('EditProfile done successfully')
                   history.push('/profile',{userid:(result.data.userid)})
               }
               else{
                   alert('login failed error')
               }
           })
                     
                      
        }
    }


    return (
        <div className="field-title">
            <h2 className="page-title">EditProfile</h2>
            <div  className="mb-3">
             <label htmlFor="Name">FullName</label>
             <input  onChange={(e)=>{
                 setFullname(e.target.value)
             }} type="text" className="form-control" placeholder={location.state.userfullname} />
            </div>
            <div className="mb-3">
             <label htmlFor="">Email</label>
             <input onChange={(e)=>{
                 setEmail(e.target.value)
             }} type="email" className="form-control" placeholder={location.state.email}/>
            </div>
            <div className="mb-3">
             <label htmlFor="">Phoneno</label>
             <input onChange={(e)=>{
                 setPhoneno(e.target.value)
             }} type="text" className="form-control" placeholder={location.state.phoneno}/>
            </div>
            <div className="mb-3">
             <label htmlFor="">Gender</label>
             <input onChange={(e)=>{
                 setGender(e.target.value)
             }} type="text" className="form-control" placeholder={location.state.gender}/>
            </div>
            <div className="mb-3">
             <label htmlFor="">City</label>
             <input onChange={(e)=>{
                 setCity(e.target.value)
             }} type="text" className="form-control" placeholder={location.state.city}/>
            </div>
            <div className="mb-3">
             <label htmlFor="">Postalcode</label>
             <input onChange={(e)=>{
                 setPostalcode(e.target.value)
             }} type="text" className="form-control" placeholder={location.state.postalcode}/>
            </div>
         {/* <div className="mb-3">
             <label htmlFor="">Userrole</label>
             <input onChange={(e)=>{
                 setUserrole(e.target.value)
             }} type="text" className="form-control" value={location.state.userrole}/>
            </div > */}

            <div className="mb-3">
            <button onClick={edit} className="btn btn-success">Editprofile</button> &nbsp;
             &nbsp;
            <Link to="/signin"><a className="btn btn-warning">Back</a></Link>
            
            </div>
        </div>
        )
}
export default Editprofile
