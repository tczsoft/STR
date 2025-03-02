import React, { useState } from 'react'
import Cart from '../../shared/Components/Cart/Cart'
import Infosection from '../../shared/Components/Home/Infosection'
import useCart from '../../shared/Services/store/useCart';
import { useNavigate } from 'react-router-dom';
import { domain } from '../../shared/Services/apiendpoint/apiendpoint';

export default function CartPage() {

  const navigate = useNavigate()

  const{ cartItems,cartcount,selectedProducts,clearSelectedProducts,removeSelectedItem,deleteAllItems }=useCart();

  const [quantities, setQuantities] = useState(cartItems.map(item => item.Quantity));

  const increaseQuantity = (index) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] += 1;
    setQuantities(updatedQuantities);
    updateLocalStorageQuantity(index, updatedQuantities[index]);
  };
 
  const decreaseQuantity = (index) => {
    const updatedQuantities = [...quantities];
    if (updatedQuantities[index] > 1) {
      updatedQuantities[index] -= 1;
      setQuantities(updatedQuantities);
      updateLocalStorageQuantity(index, updatedQuantities[index]);
    }
  };
 
  const updateLocalStorageQuantity = (index, quantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].Quantity = quantity;
    localStorage.setItem("VENBAcartItems", JSON.stringify(updatedCartItems));
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach((product, index) => {
    //   subtotal += product.Sale_Price * quantities[index];
      subtotal += product?.Discount==0?product.Sale_Price * quantities[index]:(product?.Sale_Price-product?.Discount)* quantities[index];
    });
    return (subtotal).toFixed(2);
  };

  const clearCart=()=>{
    deleteAllItems();
    cartcount()
  }

  const delSelItem=(id)=>{
    removeSelectedItem(id);
    cartcount()
  }

  const gotocheckout = () => {
    let message = 'New Quote Details:\n\n';

    cartItems.forEach((product, index) => {
      message += `${index + 1}. ${product.Product_Name}\n`;
      message += `   Price: Rs.${product.Sale_Price}\n`;
      message += `   QTY: ${product.Quantity}\n`;
      message += `   Product Link: ${domain()}/product-event/${product._id}\n\n`;
    });

    window.open(`https://wa.me/+919361036440?text=${encodeURIComponent(message)}`, "_blank");
  };
  
    
  return (
    <section>
      <Cart gotocheckout={gotocheckout} cartItems={cartItems} quantities={quantities} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity}
       calculateSubtotal={calculateSubtotal} clearCart={clearCart} delSelItem={delSelItem} />
      <Infosection />
    </section>
  )
}
