import axios from 'axios'
import { useState, useEffect } from 'react'
import { url } from '../common/constants'
import { useHistory } from 'react-router-dom'
import HorizontalSlider from '../components/HorizontalSlider'

import './Kids.css'


const Kids =()=>{
  const [categoryIndian, setCategoryIndian] = useState([])
  const [categoryKidTop, setCategoryKidTop] = useState([])
  const [categoryDress, setCategoryDress] = useState([])
    const [brand, setBrand] = useState([])
  
    const history = useHistory()

    useEffect(() => {
      getProductsByIndian()
      getProductsByKidTop()
      getProductsByDress()
        getProductsByBrand()
    }, [])

    const getProductsByIndian = () => {
        // send the GET request
        axios.get(url + '/product/prodbyname/Indian').then((response) => {
          const result = response.data
          if (result.status === 'success') {
            setCategoryIndian(result.data)
            console.log(result.data)
          } else {
            alert('error occured while getting all products1')
          }
        })
      }


    const getProductsByKidTop = () => {
        // send the GET request
        axios.get(url + '/product/prodbyname/KidTop').then((response) => {
          const result = response.data
          if (result.status === 'success') {
            setCategoryKidTop(result.data)
            console.log(result.data)
          } else {
            alert('error occured while getting all products1')
          }
        })
      }
      const getProductsByDress = () => {
        // send the GET request
        axios.get(url + '/product/prodbyname/Dress').then((response) => {
          const result = response.data
          if (result.status === 'success') {
            setCategoryDress(result.data)
            console.log(result.data)
          } else {
            alert('error occured while getting all products2')
          }
        })
      }
      const getProductsByBrand = () => {
        // send the GET request
        axios.get(url + '/product/prodbybrand/BIBA').then((response) => {
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
            <a className="navbar-brand" href="/kids">
             <img src="images/kid7.jpg"alt="img" className="poster" />
             </a>
             <div className="line"></div>
    
          <HorizontalSlider
            onItemSelect={getDetailsOfSelectedProduct}
            items={categoryIndian}
            title="TRENDING IN INDIAN WEAR"
          />
          <div className="line"></div>
          <a className="navbar-brand" href="/kids">
             <img src="images/kid5.jpg"alt="img" className="poster" />
             </a>
             <div className="line"></div>
          <HorizontalSlider
           onItemSelect={getDetailsOfSelectedProduct}
            items={categoryKidTop}
            title="TRENDING IN WESTERN WEAR"
          />
          <div className="line"></div>
           <a className="navbar-brand" href="/kids">
          <img src="images/kid3.jpg"alt="img" className="poster" />
          </a>
          <div className="line"></div>
          <HorizontalSlider
            onItemSelect={getDetailsOfSelectedProduct}
            items={categoryDress}
            title="TRENDING IN WESTERN WEAR"
          />
         
        </div>
      )
}

export default Kids