import axios from "axios"
import { useState,useEffect } from "react"
import { Link,useHistory} from "react-router-dom"
import { useLocation } from "react-router" 


const Profile=()=>{
  const history =useHistory()
  const location = useLocation()
 // const uid = location.state.userid

    const url = 'http://localhost:8080'
    const [profile,setProfile]=useState('')
     useEffect(()=>{
        getProfile()   
     },[])

     let list =localStorage.getItem('list')
     console.log(list)

    const getProfile = () => {
        axios.get(url + '/profile1/'+list).then((response) => {
          const result = response.data
          if (result.status === 'success') {
            setProfile(result.data)
          } else {
            
             history.push('/signin')
          }
        })
      
         }

         const Edit = () => {
          history.push('/editprofile',{userid:(profile.userid),
                                       userfullname:(profile.userfullname),
                                       email:(profile.email),                                
                                       phoneno:(profile.phoneno),
                                       city:(profile.city),
                                       postalcode:(profile.postalcode),
                                       gender:(profile.gender),
                                      userrole:(profile.userrole) }) 
                                    }

      return (
        <div>
            <h2 className="page-title">Welcome&nbsp;&nbsp;{profile.userfullname}</h2>
            <div className="table-container">
        <table className="table table-hover">
        <tbody>
            {/* <tr>
              {/* <th>UserId</th>
              <th>{profile.userid}</th>
              </tr> */} 

              <tr>
              <th>Name</th>
              <th>{profile.userfullname}</th>
              </tr>

              <tr>
              <th>Email</th>
              <th>{profile.email}</th>
              </tr>

              <tr>
              <th>Phoneno</th>
              <th>{profile.phoneno}</th>
              </tr>

              <tr>
              <th>City</th>
              <th>{profile.city}</th>
              </tr>

              <tr>
              <th>Postalcode</th>
              <th>{profile.postalcode}</th>
              </tr>

              <tr>
              <th>Gender</th>
              <th>{profile.gender}</th>
              </tr>

              {/* <tr>
              <th>Role</th>
              <th>{profile.userrole}</th>
              </tr> */}
          </tbody>
        </table>
      </div>
            <div>
            <button onClick={Edit} className="btn btn-success">Editprofile</button>&nbsp;&nbsp;
            <Link to="/Home"><a className="btn btn-danger">Back</a></Link>
            
            </div>
        </div>
      )}
export default Profile