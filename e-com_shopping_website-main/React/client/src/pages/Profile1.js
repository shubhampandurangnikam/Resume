
import { useHistory} from "react-router-dom"
import { useEffect } from "react"
const Profile1 =()=>{
    const history =useHistory()

    useEffect(()=>{
        getProfile()   
     },[])

     let list =localStorage.getItem('list')
     const getProfile = () => {
         console.log("without"+list)
        if(list === null && list === " "){
          alert('You need to signin first')
          history.push('/signin')

        }else{
            history.push('/profile')
        }
     }
    return (
        <div ></div>
    )}
export default Profile1