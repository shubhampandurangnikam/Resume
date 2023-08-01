import axios from 'axios'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { url } from '../common/constants'

const Adminpage = () => {
  const [image, setImage] = useState(undefined)
  const [productname, setProductname] = useState('')
  const [categoryid, setCategoryid] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [productdesc, setProductdesc] = useState('')
  const [brand, setBrand] = useState('')

 
  const history = useHistory()

  
  const onFileSelect = (event) => {
    setImage(event.target.files[0])
  }

  const addProductToDB = () => {
    if (productname.length === 0) {
      alert('select productname')
    } else if (categoryid.length === 0) {
      alert('select categoryid')
    }
    
      else if (price.length === 0) {
        alert('select price')
      }
      else if (quantity.length === 0) {
        alert('select quantity')
      }
      else if (productdesc.length === 0) {
        alert('select productdesc')
      }
      else if (brand.length === 0) {
        alert('select brand')
      } else if (!image) {
      alert('select image')
    } else {
      
      const data = new FormData()

      
      data.append('image', image)
      data.append('brand', brand)
      data.append('productdesc', productdesc)
      data.append('quantity', quantity)
      data.append('price', price)
      data.append('categoryid', categoryid)
      data.append('productname', productname)

      axios.post(url + '/product', data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          alert('successfully added an product')

    
          history.push('/productpage')
        } else {
          alert('error while adding product')
        }
      })
    }
  }

  return (
    <div className="field-title">
      <h1 className="page-title">Add Product</h1>

      <div className="mb-3">
        <label htmlFor="">Productname</label>
        <input
          onChange={(e) => {
            setProductname(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="">Categoryid</label>
        <input
          onChange={(e) => {
            setCategoryid(e.target.value)
          }}
          type="number"
          className="form-control"
        />
      </div>
     
      <div className="mb-3">
        <label htmlFor="">Price</label>
        <input
          onChange={(e) => {
            setPrice(e.target.value)
          }}
          type="number"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="">Quantity</label>
        <input
          onChange={(e) => {
            setQuantity(e.target.value)
          }}
          type="number"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="">Productdesc</label>
        <input
          onChange={(e) => {
            setProductdesc(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="">Brand</label>
        <input
          onChange={(e) => {
            setBrand(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="">Image</label>
        <input
          accept="image/*"
          onChange={onFileSelect}
          type="file"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <button onClick={addProductToDB} className="btn btn-success">
          Add
        </button>&nbsp;&nbsp;

        <Link to="/home">
          <a className="btn btn-warning">Back</a>
        </Link>
      </div>
    </div>
  )
}

export default Adminpage
