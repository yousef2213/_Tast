import React from 'react'
import CartColums from './CartColums'
import CartTotal from './CartTotal'
import CartList from './cartList'

export default function CartComponent() {
    
    return (
        <div className="">
        <CartColums />
        <CartList />
        <CartTotal />
        </div>
    )
}
