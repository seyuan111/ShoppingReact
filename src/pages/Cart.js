import React from 'react'
import {Items} from '../Items'
import Item from './Item'

export const Cart = () => {
  return (
    <div className="cart">
      <div className="title">
        <h1>Welcome to MotorZ</h1>
      </div>

      <div className="items">
        {Items.map((product) => <Item data={product} />)}
      </div>
    </div>
  )
}

export default Cart