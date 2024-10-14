
import classes from './CartComponent.module.css'
// import {useState} from 'react';


import ProductCardComponent from '../ProductCardComponent/ProductCardComponent'
import SearchPageComponent from '../CatalogPageComponent/CatalogPageComponent';

export default function CardComponent({itemsInCart, removeFromCart, updateItemQuantity}){
    
    // const [subtotal, setSubtotal] = useState(0);
    let subtotal = 0;
    
    itemsInCart.map(item => subtotal += (item.quantity * item.price)); 

    if (itemsInCart.length === 0){
        return(
            <>
                <div className={classes.msgDisplay}>
                   <h2>YOUR CART IS LOOKING EMPTY</h2>
                   <p>SHOP NOW</p> 
                </div>
                
            </>
        ) 

    } 

    return (
        <>
            <div className={classes.cartDisplay}>            
                <h1>YOUR CART</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ITEM</th>
                                        
                            <th>PRICE</th>
                            <th > QUANTITY</th>
                            <th >TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                {
                    itemsInCart.map(item => (

                        <>
                            
                                        <tr>
                                            <td> <img className={classes.cartItemImage} src={item.image} /><p className={classes.cartItemTitle}>{item.title}</p></td>
                                            <td>${item.price}</td>
                                            <td><input type='number' onInput={(e)=>{item.quantity = e.target.value; updateItemQuantity(item)}} className={classes.quantityInput} id='quantity' name='quantity' defaultValue={item.quantity} min={1}/></td> 
                                            {/* add logic to add quantity */}
                                            {/* defaultValue={item.quantity} */}
                                            <td>${parseFloat((item.price * item.quantity).toFixed(2))}</td>
                                            {/* add logic to caculate price */}
                                            <td className={classes.btnContainer} onClick={(e) => {e.preventDefault(); removeFromCart(item)}}><button className={classes.removeDesktopBtn}>REMOVE</button><button className={classes.removeMobileBtn}>X</button></td>
                                        </tr>

                            
            
                        </> 
                    ))
                }
                    </tbody>
                </table>

                <div className={classes.cartTotal}>
                    <p><sup>SUBTOTAL</sup> ${parseFloat(subtotal.toFixed(2))}</p>
                    <p>Shipping and taxes caculated at checkout</p>
                    <button>CHECKOUT</button>
                    <p>Keep Shopping</p>
                </div>

            </div>  

        </>

        
    )
}