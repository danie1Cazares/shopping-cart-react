import { NavLink, useNavigate } from 'react-router-dom'
import classes from './ProductCardComponent.module.css'

export default function ProductCardComponent({productId, productImg, productTitle, productPrice}){

 

    return (
        <>

            <NavLink to = {`/product/${productId}`}>
                <div className={classes.wrapper}>

                    <div className={classes.squareBorder}>
                        <div className={classes.saleTag}>SALE</div>
                        <img src={productImg} alt="" className={classes.productImg} />
                        {/* use component to fill in src */}
                    </div>
                    <div className={classes.productInfo}>
                            <h3 className={classes.productTitle}>{productTitle}</h3>
                            <h4 className={classes.productPrice}>${productPrice}</h4>    
                    </div>


                </div>
            </NavLink>
        </>

        //create navlink to routre for product pages


        // onclick of product card, using navlink link and filling in link using id to link to product page
        // need to be able to generate custom webpage using another component and providing ID as prop 

        //create a link to a product page that is passed props with info to generate page
    )
}