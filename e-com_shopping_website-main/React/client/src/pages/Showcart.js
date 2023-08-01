import axios from 'axios'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router"
import { useState ,useEffect} from 'react'
import { url } from '../common/constants'
import { useHistory } from 'react-router-dom'


const Showcart = ()=> {
    const history = useHistory()
   // const location = useLocation()
   // const u =location.state.user
   // const [user,setUser]=useState('')
    const [total,setTotal]=useState(0)
    const [productlists,setProductlist]=useState([])
   // const [products,setProducts]=useState([])
    //let list =localStorage.getItem('list')
    useEffect(()=>{
        //showcart ()
        getuser ()
        //totalamt()
       // productidlist() 
        // productdetail()

      },[])

    //   const showcart = () => {
    //       console.log("hi"+user.userid)
    //     axios.get(url + '/cart/'+user.userid).then((response) => {
    //         console.log("hw"+user.userid)
    //       const result = response
    //       console.log("result"+result)
    //       setProducts(result)
    //       console.log("set"+products)
    //     //   if (user.userid == user.userid) {
    //     //     setProducts(result.data)
    //     //   } else {
    //     //      //alert('You need to signin first')
    //     //      alert('Error while showing cart')
    //     //   }
    //     })
      
    //      }
        //  const getuser = () => {
        //     axios.get(url + '/profile1/'+list).then((response) => {
        //       const result = response.data
        //       if (result.status === 'success') {
        //         setUser(result.data)
        //       } else {
        //          //alert('You need to signin first')
        //          history.push('/signin')
        //       }
        //     })
          
        //      }
      //   const Deletefromcart = (product) => {
      //     console.log("hi"+product)
      //    axios.delete(url + '/cart/delete/cartid/'+product.cartid).then((response) => {
      //     console.log("hiii"+product.cartid)
      //      alert('succefully deleted ')
      //     // history.push('/showcart')
      //     //  history.push('/showcart',{
      //     //   user:u    })
      //     //  if (result.status === 'success') { 
      //     //    setProductlist(result.data)
      //     //    console.log("pl"+productlists)
      //     //  } else {
      //     //     alert('error in showing cart')
      //     //     history.push('/signin')
      //     //  }
      //    })
       
      // }

      const [user,setUser]=useState('')
  let list =localStorage.getItem('list')
  const getuser = () => {
    axios.get(url + '/profile1/'+list).then((response) => {
      const result = response.data
      if (result.status === 'success') {
        setUser(result.data)
      } else {
         //alert('You need to signin first')
         history.push('/signin')
      }
    })
  
     }


      const Deleteproduct = (product) => {
        history.push('/delete',{productid:product
                               }) 
                                  }

             const showcart = () => {
                 console.log("hi"+user.userid)
                axios.get(url + '/cart/showCart/'+user.userid).then((response) => {
                  const result = response.data
                  if (result.status === 'success') { 
                    setProductlist(result.data)
                    console.log("pl"+productlists)
                  } else {
                     alert('error in showing cart')
                     history.push('/signin')
                  }
                })
              
             }

             const totalamt = () => {
                axios.get(url + '/cart/totalamt/'+user.userid).then((response) => {
                  const result = response.data
                  setTotal(result)
                
                 // history.push('/showcart',{user:p.userid})
                //   if (result.status === 'success') {
                //     alert('Successfully deleted')
                //     history.push('/productpage')
                //   } else {
                //     alert('error occured while deleting product')
                // history.push('/addtocart',{product:product,
                //     user:user    })
                // //   }
                })
              }

              const placeorder = () => {
                history.push('/placeorder',{userdata:user})
                
                 
                }
              



            //  const productdetail = (productid) => {
            //      console.log('hey amir')
            //      console.log('hey soham 6')
            //    axios.get(url + '/product/prodbyproductid/'+productid).then((response) => {
            //     console.log('hey pratiksha')
            //      const result = response.data
            //      if (result.status === 'success') { 
            //          console.log('hey pratiksha')
            //         console.log("dl"+result.data)
            //         setDetail(result.data)
                  
            //      } else {
            //         //alert('You need to signin first')
            //         history.push('/signin')
            //      }
            //    })
             
            // }

          //   const  productdetail = () => {
          //     console.log('hey pratiksha')
          //    axios.get(url + '/product/prodbyproductid/6').then((response) => {
          //     console.log('hey pratiksha')
          //      const result = response.data
          //      if (result.status === 'success') { 
          //       setDetail(result.data)
          //      } else {
          //         //alert('You need to signin first')
          //         history.push('/signin')
          //      }
          //    })
           
          // }




             return (
                <div>
                  <h1 className="page-title">{user.userfullname}'s &nbsp;Cart</h1>
                  <button onClick={showcart} className="btn btn-success">Showcart</button> &nbsp;
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Productname</th>
                        <th>Productdesc</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productlists.map((product) => {
                        //  {productdetail(product.productid)}
                        return (
                          <tr>
                            <td><img className="image" src={url + '/' + product.image} /></td>
                            <td>{product.productname}</td>
                            <td>{product.productdesc}</td>
                            <td>{product.brand}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>
                            {/* <a  href="/home">
            <img src="images/deleteicon.jpg" onClick={() => {
                                  Deleteproduct(product)
                                }}alt="img" className="logo" />
             
            </a> */}
                       <a onClick={() => {
                                  Deleteproduct(product)
                                }}>
                                <img className="delete" src="images/garbage.jpg" />

                              </a>

                              {/* <a href="images/garbage.jpg">
                              <button
                                onClick={() => {
                                  Deleteproduct(product)
                                }}>
                               Remove
                              </button>
                              </a> */}
                            </td>
                          </tr>
                        )
                      })}
                     
                    </tbody>
                  </table>
                   <h5>{"Total Cart Value Rs-"+total}</h5><br></br>
                  <button className="btn btn-warning"
                                onClick={() => {
                                  totalamt()
                                }}>
                              Total
                              </button> &nbsp; &nbsp;
                
                  &nbsp;&nbsp; <Link to="/home"><a className="btn btn-danger">Back</a></Link> &nbsp; &nbsp;

                  {/* <br></br> */}
                  &nbsp;&nbsp;

                  {/* <br></br> */}
                  <button className="btn btn-success"
                                onClick={() => {
                                  placeorder()
                                }}>
                             Place Order
                              </button>
                </div>
              )
                }
        
 export default Showcart; 