import './HorizontalSliderBrand.css'

const HorizontalSliderBrand = ({ items, title , onItemSelect}) => {
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
            <img src={url + '/' + item.image} className="image" />
            <div className="item-title">{item.brand}</div>
          </div>
        )
      })}
    </div>
  )
}

export default HorizontalSliderBrand