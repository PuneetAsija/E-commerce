import React, { useContext } from 'react'
import './Cartitems.css'
import remove_icon from '../Assets/remove_icon.png'
import { ShopContext } from '../../Context/ShopContent'
const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems, removeFromCart}= useContext(ShopContext);

  return (
    <div className='cartitems'>
    <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p> 
        </div>   
        <hr/>
        {all_product.map((e)=>{
             if(cartItems[e.id] > 0 ){
              return  <div>
             
              <div className="cartitems-format-main cartitems-format-main">
                  <img className='carticon-product' src={e.image} alt="" />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className="cartitems-quantity">{cartItems[e.id]}</button>
                      <p>${e.new_price *cartItems[e.id] }</p>
                      <img className='icon'  src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                  
              </div>
              <hr/>
          </div>
             }
             return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart totals</h1>
                <div>
                    <div className="cartitems-total-items">
                        <p>SubTotal</p>
                        <p>${getTotalCartAmount()}</p>
                        <hr/>
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Proceed To CheekOut</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If You Have a promocode, Enter Here</p>
                    <div className="cartitems-promobox">
                      <input type="text" placeholder='Promococe' />
                      <button className='promo'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
  )
}

export default CartItems
