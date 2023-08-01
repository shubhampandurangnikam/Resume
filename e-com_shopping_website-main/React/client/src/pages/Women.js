import axios from 'axios'
import { useState, useEffect } from 'react'
import { url } from '../common/constants'
import { useHistory } from 'react-router-dom'
import HorizontalSlider from '../components/HorizontalSlider'

import './Women.css'


const Women =()=>{
    const [productByNamekurti, setProductByNamekurti] = useState([])
    const [productByNameSaree, setProductByNameSaree] = useState([])
    const [productByNameTop, setProductByNameTop] = useState([])
    const [productByNamemaxi, setProductByNameMaxi] = useState([])

    const [brand, setBrand] = useState([])
  
    const history = useHistory()

    useEffect(() => {
        getProductsByKurti()
        getProductsBySaree()
        getProductsByTop()
        getProductsByMaxi()
        getProductsByBrand()
    }, [])

    const getProductsByKurti = () => {
        // send the GET request
        axios.get(url + '/product/prodbyname/Kurti').then((response) => {
          const result = response.data
          if (result.status === 'success') {
            setProductByNamekurti(result.data)
            console.log(result.data)
          } else {
            alert('error occured while getting all products1')
          }
        })
      }

      const getProductsByMaxi = () => {
        // send the GET request
        axios.get(url + '/product/prodbyname/Maxi').then((response) => {
          const result = response.data
          if (result.status === 'success') {
            setProductByNameMaxi(result.data)
            console.log(result.data)
          } else {
            alert('error occured while getting all products1')
          }
        })
      }



    const getProductsByTop = () => {
        // send the GET request
        axios.get(url + '/product/prodbyname/Top').then((response) => {
          const result = response.data
          if (result.status === 'success') {
            setProductByNameTop(result.data)
            console.log(result.data)
          } else {
            alert('error occured while getting all products1')
          }
        })
      }
      const getProductsBySaree = () => {
        // send the GET request
        axios.get(url + '/product/prodbyname/Saree').then((response) => {
          const result = response.data
          if (result.status === 'success') {
            setProductByNameSaree(result.data)
            console.log(result.data)
          } else {
            alert('error occured while getting all products2')
          }
        })
      }
      const getProductsByBrand = () => {
        // send the GET request
        axios.get(url + '/product/prodbybrand/Darzi Designer').then((response) => {
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
             <a className="navbar-brand" href="/women">
          <img src="images/women5.webp"alt="img" className="poster" />
          </a>
          <div className="line"></div>
          <HorizontalSlider
            onItemSelect={getDetailsOfSelectedProduct}
            items={productByNameSaree}
            title="TRENDING IN INDIAN WEAR"
          />
          <div className="line"></div>
           <a className="navbar-brand" href="/women">
          <img src="images/Ethnic-store-PC._SX3000_QL85_ (2).jpg"alt="img" className="poster" />
          </a>
          <div className="line"></div>
          <HorizontalSlider
            onItemSelect={getDetailsOfSelectedProduct}
            items={productByNamekurti}
            title="TRENDING IN INDIAN WEAR"
          />
          <div className="line"></div>
           <a className="navbar-brand" href="/women">
           <img src="images/women23.jpg"alt="img" className="poster" />
           </a>
           <div className="line"></div>
          <HorizontalSlider
           onItemSelect={getDetailsOfSelectedProduct}
            items={productByNameTop}
            title="TRENDING IN WESTERN WEAR"
          />
          <div className="line"></div>
           <a className="navbar-brand" href="/women">
           <img src="images/Ajio-SS21-BANNERS-1024x672px-03.webp"alt="img" className="poster" />
           </a>
           <div className="line"></div>
          <HorizontalSlider
            onItemSelect={getDetailsOfSelectedProduct}
            items={productByNamemaxi}
            title="TRENDING IN WESTERN WEAR"
          />
         
        </div>
      )
}

export default Women