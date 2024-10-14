import classes from './CatalogPageComponent.module.css'

import ProductCardComponent from '../ProductCardComponent/ProductCardComponent';
import { useState, useEffect } from 'react';
import {NavLink, Outlet} from 'react-router-dom'


export default function SearchPageComponent({getCardClicked, categoryName, headerImg, searchTerm, limit}){

// add in getcardclicked function and then trigger on click of productcards, pass on card info   


    //      create pages for each of the product card when clicked, a product page component based on product card ID
    //      allow products to be added to a cart from poduct page
    //      add footer, homepage content
    //      add styles, transistions, number of items badge


    //basic styling for user search page

    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let searchQuery;

    limit === undefined ?  searchQuery = searchTerm : searchQuery = searchTerm + '?limit=' + limit;

    useEffect(() => {
        const fetchData = async () => {

            try{
                const response = await fetch('https://fakestoreapi.com/products/category/' + searchTerm);
                
                if(!response.ok){
                    throw new Error('Network response was not ok');
                }
                
                const result = await response.json();
                setData([...result]);
            
                console.log(result);
            
            } catch (error) {
                setError(error);
                
            } finally {
                setLoading(false);
            }

        };

        fetchData();

    }, [searchQuery, searchTerm]);

    function setSortOrder(selectedOrder){

        let sortedData;

        switch (selectedOrder) {
            case 'alphabetical-ascending':
                    sortedData = data.sort((a, b) => {
                    if (a.title.toLowerCase() < b.title.toLowerCase()) {
                      return -1;
                    }
                    if (a.title.toLowerCase() > b.title.toLowerCase()) {
                      return 1;
                    }
                    return 0;
                  });
                    break;
            case 'alphabetical-descending':
                sortedData = data.sort((a, b) => {
                    if (a.title.toLowerCase() < b.title.toLowerCase()) {
                      return 1;
                    }
                    if (a.title.toLowerCase() > b.title.toLowerCase()) {
                      return -1;
                    }
                    return 0;
                  });
                break;  
            case 'price-ascending':
                sortedData = data.sort((a, b) => a.price - b.price);
                break;
            case 'price-descending':
                sortedData = data.sort((a, b) => b.price - a.price);
                break;
            default:

        }

        setData([...sortedData]);

    }

    if (loading){
        return(
            <>
                <div className={classes.loadingWrapper}>
                    <img src='https://miro.medium.com/v2/resize:fit:882/1*8NJgObmgEVhNWVt3poeTaA.gif' />
                    {/* <div className={classes.displayMsg} >LOADING DATA....</div>;                 */}
                </div>

            </>
        ) 
    } 
    if (error){
        return(
            <>
                <div className={classes.loadingWrapper}>
                    <div className={classes.displayMsg}>Error: {error.message}</div>;
                </div>

            </>
        ) 
    }  
    
    if (data.length === 0){
        return(
            <>
                <div className={classes.loadingWrapper}>
                    <img className={classes.noResultsImg} src='https://i.pinimg.com/736x/1d/26/ce/1d26cefaf3331a4eb7169c7315dfb853.jpg' />
                    <div className={classes.displayMsg}>No results found. Please try another query.</div>
                </div>

            </>
        ) 
    }    

    return (
        <>
            <div className={`${classes.productHeader} ${categoryName === 'SEARCH' ? classes.hide : ''}`}>
                <div className={classes.categoryDescription}>
                    <h4>{categoryName}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, commodi dolorum? Iste natus omnis nesciunt! Illum tenetur sit consequatur, sed dolorem et animi maiores, eaque, ad recusandae molestias. Aliquid, nam.</p>
                </div>
                <img className={classes.categoryImg} src={headerImg} />
            </div>

            

        
            <div className={classes.wrapper}>
                
                <div className={classes.sideNav}>
                        <p className={categoryName === 'COLLECTION' ? classes.selected : ''}><NavLink to = '/collection'>COLLECTION</NavLink></p>
                        <p className={categoryName === 'BUSINESS' ? classes.selected : ''}><NavLink to = '/business'>BUSINESS</NavLink></p>
                        <p className={categoryName === 'CASUAL' ? classes.selected : ''}><NavLink to = '/casual'>CASUAL</NavLink></p>

                </div>

                <div className={classes.productsWrapper}>
                    <div className={classes.productSorter}>

                         <div className={`${classes.searchHeader} ${categoryName === 'SEARCH' ? '' : classes.hide}`}>
                                <h3>SEARCHING FOR: {searchTerm}</h3>
                        </div>
                        
                        <label htmlFor="productSort" className={classes.productSorterLabel} onInput={(e)=>{setSortOrder(e.target.value)}}>

                            Sort By:
                            <select name="productSortOrder" id="productSort" className={classes.productSorterSelection}>
                                <option value="recommended" selected="">Recommended</option>
                                <option value="alphabetical-ascending">Alphabetical: A-Z</option>
                                <option value="alphabetical-descending">Alphabetical: Z-A</option>
                                <option value="price-ascending">Price: Low to High</option>
                                <option value="price-descending">Price: High to Low</option>
                            </select>
                        </label>


                    </div>

                    <div className={classes.productCardsWrapper}>

                        {data.map(item => (
                            <>
                            <div onClick={()=>{getCardClicked(item.image, item.price, item.title)}}><ProductCardComponent key={item.id} productId={item.id} productImg={item.image} productPrice={item.price} productTitle={item.title}/></div>
                            
                            </>

                        ))}
                    </div>    

                </div>
                

            </div>

        </>
    )
}