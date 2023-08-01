import axios from 'axios'
import { useState, useEffect } from 'react'
import { url } from '../common/constants'
import { useHistory } from 'react-router-dom'
import HorizontalSlider from '../components/HorizontalSlider'

import './Men.css'


const Men =()=>{
    const [productByNamekurta, setProductByNamekurta] = useState([])
    const [productByNameshirt, setProductByNameshirt] = useState([])
    const [productByNamejeans, setProductByNamejeans] = useState([])
    const [brand, setBrand] = useState([])
  
    const history = useHistory()

    useEffect(() => {
        getProductsByKurta()
        getProductsByShirt()
        getProductsByJeans()
        getProductsByBrand()
    }, [])

    const getProductsByKurta = () => {
        // send the GET request
        axios.get(url + '/product/prodbyname/Kurta').then((response) => {
          const result = response.data
          if (result.status === 'success') {
            setProductByNamekurta(result.data)
            console.log(result.data)
          } else {
            alert('error occured while getting all products1')
          }
        })
      }


    const getProductsByShirt = () => {
        // send the GET request
        axios.get(url + '/product/prodbyname/Shirt').then((response) => {
          const result = response.data
          if (result.status === 'success') {
            setProductByNameshirt(result.data)
            console.log(result.data)
          } else {
            alert('error occured while getting all products1')
          }
        })
      }
      const getProductsByJeans = () => {
        // send the GET request
        axios.get(url + '/product/prodbyname/Jeans').then((response) => {
          const result = response.data
          if (result.status === 'success') {
            setProductByNamejeans(result.data)
            console.log(result.data)
          } else {
            alert('error occured while getting all products2')
          }
        })
      }
      const getProductsByBrand = () => {
        // send the GET request
        axios.get(url + '/product/prodbybrand/brand').then((response) => {
          const result = response.data
          if (result.status === 'success') {
            setBrand(result.data)
            console.log(result.data)
          } else {
            alert('error occured while getting all brands')
          }
        })
      }
      const getDetailsOfSelectedProduct = (product) => {
        console.log(product)
        // send the GET request
        axios.get(url + '/product/prodbyname/' + product.productname).then((response) => {
          const result = response.data
          if (result.status === 'success') {
            history.push('/details', {
              productlist: result.data,
              productid:product.productid,
              productname: product.productname,
              productnamedesc: product.productdesc,
              price: product.price,
              brand: product.brand,
              image: product.image,
            })
          } else {
            console.log(result.error)
            alert('error occured while getting all album')
          }
        })
      }

      return (
        <div>
            <a className="navbar-brand" href="/men">
           <img src="images/Men1.jpg"alt="img" className="poster" />
           </a>
           <div className="line"></div>
    
          <HorizontalSlider
            onItemSelect={getDetailsOfSelectedProduct}
            items={productByNamekurta}
            title="TRENDING IN INDIAN WEAR"
          />
          <div className="line"></div>
          <a className="navbar-brand" href="/men">
           <img src="images/1629179381_Mens-M.jpg"alt="img" className="poster" />
           </a>
           <div className="line"></div>
          <HorizontalSlider
           onItemSelect={getDetailsOfSelectedProduct}
            items={productByNameshirt}
            title="TRENDING IN SHIRT"
          />
          <div className="line"></div>
          <a className="navbar-brand" href="/men">
           <img src="images/men1.png"alt="img" className="poster" />
           </a>
           <div className="line"></div>
          <HorizontalSlider
            onItemSelect={getDetailsOfSelectedProduct}
            items={productByNamejeans}
            title="TRENDING IN JEANS"
          />
         
        </div>
      )
}

export default Men