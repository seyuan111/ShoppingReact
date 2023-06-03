import React from 'react'

export const Item = (props) => {
    const {id, name, price, image} = props.data
  return (
    <div className="itemName">
      <img src={image}></img>
      <div className="description">
        <p>{name}</p>
        <p>${price}</p>
      </div>
      <button className="addToCart">Add to Cart</button>
    </div>
  )
}

export default Item