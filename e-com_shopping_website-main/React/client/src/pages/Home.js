import axios from 'axios'
import { useState, useEffect } from 'react'
import { url } from '../common/constants'
import { useHistory } from 'react-router-dom'
import HorizontalSlider from '../components/HorizontalSlider'
import HorizontalSliderBrand from '../components/HorizontalSliderBrand'
import './Home.css'


const Home =()=>{
    const [categoryKurta, setCategoryKurta] = useState([])
    const [categoryShirt, setCategoryShirt] = useState([])
    const [categoryJeans, setCategoryJeans] = useState([])
    const [categorySaree, setCategorySaree] = useState([])
    const [categoryKurti, setCategoryKurti] = useState([])
    const [categoryMaxi, setCategoryMaxi] = useState([])
    const [categoryTop, setCategoryTop] = useState([])
    const [categoryIndian, setCategoryIndian] = useState([])
    const [categoryKidTop, setCategoryKidTop] = useState([])
    const [categoryDress, setCategoryDress] = useState([])
    
    const [brand, setBrand] = useState([])
  
    const history = useHistory()
    let list =localStorage.getItem('list')
    console.log(list)
    useEffect(() => {
      getProductsByKurta()
      getProductsByShirt()
      getProductsByJeans()
      getProductsBySaree()
      getProductsByKurti()
      getProductsByMaxi()
      getProductsByTop()
      getProductsByDress()
      getProductsByIndian()
      getProductsByKidTop()
      getProductsByBrand()
    }, [])
    const getProductsByKurta = () => {
        // send the GET request
        axios.get(url + '/product/prodbyname/Kurta').then((response) => {
          const result = response.data
          if (result.status === 'success') {
            setCategoryKurta(result.data)
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
            setCategoryShirt(result.data)
            console.log(result.data)
          } else {
            alert('error occured while getting all products2')
          }
        })
      }
      const getProductsByJeans = () => {
        // send the GET request
        axios.get(url + '/product/prodbyname/Jeans').then((response) => {
          const result = response.data
          if (result.status === 'success') {
            setCategoryJeans(result.data)
            console.log(result.data)
          } else {
            alert('error occured while getting all products2')
          }
        })
      }


      const getProductsBySaree = () => {
        // send the GET request
        axios.get(url + '/product/prodbyname/Saree').then((response) => {
          const result = response.data
          if (result.status === 'success') {
            setCategorySaree(result.data)
            console.log(result.data)
          } else {
            alert('error occured while getting all products1')
          }
        })
      }
      const getProductsByKurti = () => {
        // send the GET request
        axios.get(url + '/product/prodbyname/Kurti').then((response) => {
          const result = response.data
          if (result.status === 'success') {
            setCategoryKurti(result.data)
            console.log(result.data)
          } else {
            alert('error occured while getting all products2')
          }
        })
      }
      const getProductsByMaxi = () => {
        // send the GET request
        axios.get(url + '/product/prodbyname/Maxi').then((response) => {
          const result = response.data
          if (result.status === 'success') {
            setCategoryMaxi(result.data)
            console.log(result.data)
          } else {
            alert('error occured while getting all products2')
          }
        })
      }

      const getProductsByTop = () => {
        // send the GET request
        axios.get(url + '/product/prodbyname/Top').then((response) => {
          const result = response.data
          if (result.status === 'success') {
            setCategoryTop(result.data)
            console.log(result.data)
          } else {
            alert('error occured while getting all products2')
          }
        })
      }
      const getProductsByBrand = () => {
        // send the GET request
        axios.get(url + '/product/').then((response) => {
          const result = response.data
          if (result.status === 'success') {
            setBrand(result.data)
            console.log(result.data)
          } else {
            alert('error occured while getting all brands')
          }
        })
      }
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
      const getProductsByDress = () => {
        // send the GET request
        axios.get(url + '/product/prodbyname/Dress').then((response) => {
          const result = response.data
          if (result.status === 'success') {
            setCategoryKidTop(result.data)
            console.log(result.data)
          } else {
            alert('error occured while getting all products2')
          }
        })
      }
      const getProductsByKidTop = () => {
        // send the GET request
        axios.get(url + '/product/prodbyname/KidTop').then((response) => {
          const result = response.data
          if (result.status === 'success') {
            setCategoryDress(result.data)
            console.log(result.data)
          } else {
            alert('error occured while getting all products2')
          }
        })
      }

      const getDetailsOfSelectedProduct = (product) => {
        console.log(product)
        // send the GET request
        axios.get(url + '/product/prodbyname/' + product.productname).then((response) => {
          const result = response.data
          if (result.status === 'success') {
            console.log("From Home Page")
            console.log(product.productid)
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
            <img src="images/poster2.png"alt="img" className="poster" />
            <div className="line"></div>


          <div className="title">CATEGORIES TO BAG</div>
    
          <HorizontalSlider
            onItemSelect={getDetailsOfSelectedProduct}
            items={categoryKurta}
            title="Explore Kurtas"
          />
          <div className="line"></div>
          
          <a className="navbar-brand" href="/men">
          <img src="images/men7.jpg"alt="img" className="poster" />
          </a>
          <div className="line"></div>

           <HorizontalSlider
            onItemSelect={getDetailsOfSelectedProduct}
            items={categoryShirt}
            title="Explore Shirts"
          />
          <div className="line"></div>
         
          <a className="navbar-brand" href="/men">
          <img src="images/poster6.png"alt="img" className="poster" />
          </a>
          <div className="line"></div>
          <HorizontalSlider
           onItemSelect={getDetailsOfSelectedProduct}
            items={categoryJeans}
            title="Explore Jeans"
          />
          <div className="line"></div>
          
         <a className="navbar-brand" href="/women">
          <img src="images/women9.jpg"alt="img" className="poster" />
          </a>
          <div className="line"></div>
          <HorizontalSlider
            onItemSelect={getDetailsOfSelectedProduct}
            items={categorySaree}
            title="Explore Sarees"
          />
          <div className="line"></div>

          <HorizontalSlider
            onItemSelect={getDetailsOfSelectedProduct}
            items={categoryKurti}
            title="Explore Kurti"
          />
          <div className="line"></div>
          <a className="navbar-brand" href="/women">
          <img src="images/women4.webp"alt="img" className="poster" />
          </a>
          <div className="line"></div>
          <HorizontalSlider
            onItemSelect={getDetailsOfSelectedProduct}
            items={categoryMaxi}
            title="Explore Maxi"
          />
          <div className="line"></div>
          <HorizontalSlider
            onItemSelect={getDetailsOfSelectedProduct}
            items={categoryTop}
            title="Explore Top"
          />
          <div className="line"></div>
          <a className="navbar-brand" href="/kids">
          <img src="images/kid2.webp"alt="img" className="poster" />
          </a>
          <div className="line"></div>
          <HorizontalSlider
            onItemSelect={getDetailsOfSelectedProduct}
            items={categoryIndian}
            title="Explore Indian Dresses"
          />
          <div className="line"></div>
           <HorizontalSlider
            onItemSelect={getDetailsOfSelectedProduct}
            items={categoryDress}
            title="Explore Dresses"
          />
          <div className="line"></div>
          <a className="navbar-brand" href="/kids">
          <img src="images/kid1.jpg"alt="img" className="poster" />
          </a>
          <div className="line"></div>
          <HorizontalSlider
            onItemSelect={getDetailsOfSelectedProduct}
            items={categoryKidTop}
            title="Explore Top"
          />
         
        </div>
      )
}

export default Home