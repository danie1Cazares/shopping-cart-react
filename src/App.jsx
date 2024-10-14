
import './App.css'
import CartComponent from './CartComponent/CartComponent';
import HomePageComponent from './HomePageComponent/HomePageComponent';
import NavbarComponent from './NavbarComponent/NavbarComponent'

import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import CatalogPageComponent from './CatalogPageComponent/CatalogPageComponent';
import ProductPageComponent from './ProductPageComponent/ProductPageComponent';

import {useState} from 'react';
import AboutPageComponent from './AboutPageComponent/AboutPageComponent';


// Mens clothing - t h e C A Z A D O R collection


// app includes 2 pages - home page and shopping page 

// nav bar includes shopping cart icon which links to cart
// shopping cart icon  in navbar will indicate number of items in cart
// on shopping cart page include 'checkout button', no functionality needed
//Once a user has submitted their order, the amount on the cart itself should adjust accordingly.

// Build individual card elements for each of your products.
//    --fetch your shop items from FakeStore API 
//    --Display an input field on it, which lets a user manually type in how many items they want to buy. 
//    --Also, add an increment and decrement button next to it for fine-tuning. 
//    --You can also display a title for each product 
//    --as well as an “Add To Cart” button.

//Make sure to test your app thoroughly using the React Testing Library.

      // -remove bloat code
      // -add 2 or 3 tests
      // final step DEPLOY






function App() {

  const [productImg, setProductImg] = useState([]);
  const [productPrice, setProductPrice] = useState([]);
  const [productTitle, setProductTitle] = useState([]);

  const [itemsInCart, setItemsInCart] = useState([]);
  const [search, setSearch] = useState('');

  function getCardClicked (selectedImg, selectedPrice, selectedTitle){
      setProductImg(selectedImg);
      setProductPrice(selectedPrice);
      setProductTitle(selectedTitle);
      console.log(selectedTitle);
  }

  function addToCart (item){
      let index = itemsInCart.findIndex(cartItem => cartItem.title === item.title);


      if(index !== -1){
        itemsInCart[index].quantity += parseInt(item.quantity);
        setItemsInCart([...itemsInCart]);
      } else {
        // item.quantity = 1;
        setItemsInCart([...itemsInCart, item]);
      }
    
  }

  function removeFromCart (item){
      
    setItemsInCart([...itemsInCart.filter(cartItem => cartItem.title !== item.title)]);

  }

  function updateItemQuantity (item){
    let itemIndex = itemsInCart.findIndex(cartItem => cartItem.title === item.title); 
    itemsInCart[itemIndex].quantity = item.quantity;
    setItemsInCart([...itemsInCart]);
  }

  function getNewSearch(newSearch) {

    setSearch(newSearch);
    
}


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<NavbarComponent itemsInCart={itemsInCart} getNewSearch={getNewSearch}/>}>
        <Route index element={<HomePageComponent/>} />
        <Route path="cart" element={<CartComponent itemsInCart={itemsInCart} removeFromCart={removeFromCart} updateItemQuantity={updateItemQuantity}/>} />
        <Route path="search" element={<CatalogPageComponent getCardClicked={getCardClicked} categoryName={'SEARCH'} headerImg={'https://www.telegraph.co.uk/content/dam/men/2022/01/12/Main-image_trans_NvBQzQNjv4Bq2oUEflmHZZHjcYuvN_Gr-bVmXC2g6irFbtWDjolSHWg.jpg'} searchTerm={search}/>} />
        <Route path='collection' element={<CatalogPageComponent getCardClicked={getCardClicked} categoryName={'COLLECTION'} headerImg={'https://www.telegraph.co.uk/content/dam/men/2022/01/12/Main-image_trans_NvBQzQNjv4Bq2oUEflmHZZHjcYuvN_Gr-bVmXC2g6irFbtWDjolSHWg.jpg'} searchTerm={'men\'s%20clothing'}/>} />
        <Route path='business' element={<CatalogPageComponent getCardClicked={getCardClicked} categoryName={'BUSINESS'} headerImg={'https://wwd.com/wp-content/uploads/2021/02/Giorgio-Armani-F21-4.jpg'} searchTerm={'women\'s%20clothing'}/>} />
        <Route path='casual' element={<CatalogPageComponent getCardClicked={getCardClicked} categoryName={'CASUAL'} headerImg={'https://burst.shopifycdn.com/photos/cyclist-bike-leafy-wall.jpg'} searchTerm={'jewelery'}/>} />
        
        <Route path='about' element={<AboutPageComponent />}/>

        <Route path='product/:productId' element={<ProductPageComponent productImg={productImg} productPrice={productPrice} productTitle={productTitle} addToCart={addToCart}/>} /> 

       
      </Route>


    )
)

  return (
    <>
      <RouterProvider router={router} />



    </>
  );
};
 
export default App
