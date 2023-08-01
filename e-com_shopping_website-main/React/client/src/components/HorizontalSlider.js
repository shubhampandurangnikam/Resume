import './HorizontalSlider.css'

const HorizontalSlider = ({ items, title , onItemSelect}) => {
  const url = 'http://localhost:8080'

  return (
    <div className="slider-container">
      <div className="title">{title}</div>

      {items.map((item) => {
        return (
          
          <div
            className="item-container"
            onClick={() => {
            onItemSelect(item)
            }
        }
        >
          <div className="item-title">{item.brand} </div>
          <div className="line1"></div>
            <img src={url + '/' + item.image} className="image" />
            <div className="item-title">{item.productname} &nbsp; Rs.{item.price}</div>
          </div>
        )
      })}
    </div>
  )
}

export default HorizontalSlider