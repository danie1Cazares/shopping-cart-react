import classes from './ProductPageComponent.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useRef  } from 'react';



export default function ProductPageComponent({productImg, productPrice, productTitle, addToCart}){

    const timeoutRef = useRef(null);  
    const timeoutRef2 = useRef(null);  

    const { productId } = useParams(); 

    
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [notifications, setNotifications] = useState([]);

    let fetchProductUrl = 'https://fakestoreapi.com/products/' + productId;

    useEffect(() => {
        const fetchData = async () => {

            try{

                console.log(productId);
                console.log(fetchProductUrl);

                const response = await fetch(fetchProductUrl);
                
                if(!response.ok){
                    throw new Error('Network response was not ok');
                }
                
                const result = await response.json();
                setData(result);
            
                console.log(result);
                console.log('data: ' + data);

            
            } catch (error) {
                setError(error);
                
            } finally {
                setLoading(false);
            }

        };

        fetchData();

    }, [productId]);


    if (loading) return <div className={classes.displayMsg} >LOADING DATA....</div>;
    if (error) return <div className={classes.displayMsg}>Error: {error.message}</div>;
    if (data.length === 0) return <div className={classes.displayMsg}>No results found.</div>;

    // maybe check if props are null and use run an API call to collect needed data to populate page

    let quantity = 1;

    

    function createNotification(){

        const btn = document.querySelector('#addToCart');
        btn.disabled = true;

        const id = new Date().getTime();
        const newNotification = {id, fading: false};

        setNotifications([...notifications, newNotification]);
        let allNotifications = [...notifications, newNotification]; 

        setTimeout(() => {

           
            allNotifications = allNotifications.map((notification) => (notification.id === id ? {...notification, fading: true} : notification));
            setNotifications([...allNotifications]);

        }, 500);

                    
        setTimeout(() => {

            allNotifications = allNotifications.map((notification) => (notification.id === id ? {...notification, fading: false} : notification));
            setNotifications([...allNotifications]);
            // btn.disabled = false;

            
        }, 1500);

        setTimeout(() => {
            setNotifications([...allNotifications.filter((notification) => notification.id !== id) ])
            btn.disabled = false;
        }, 2000);


        
    }

    return (
        <>
        
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.imgContainer}>
                    <img className={classes.productImg} src={data.image}/>

                    <div className={classes.containerStart}>
                        {notifications.map(notification => (

                            <>
                                <div key={notification.id} 
                                className={`${classes.notificationEnd} ${notification.fading ? classes.notificationStart : ''}`} 
                                style={notification.fading ? {transform: 'translateY(0px)'} : {}}>New item added to cart!</div>
                                
                            </>

                        ))}

                    </div>

                </div>
                
                <div className={classes.productInfo}>
                    <h1>{data.title}</h1>
                    <h2>${data.price}</h2>

                    <p> Quasi iste maiores minima sequi fuga doloremque quis expedita, quidem sapiente at qui quisquam corporis nisi voluptatum quos tempore labore in consequatur accusantium ipsam. Debitis labore sint temporibus iste officiis!</p>
                    <p><span className={classes.boldText}>COLOR: </span> Black</p>
                    <label htmlFor='quantity' className={classes.boldText}>QUANTITY:</label>
                    <input type='number' onInput={(e)=> quantity = parseInt(e.target.value)} className={classes.quantityInput} id='quantity' name='quantity' defaultValue={1} min={1}/>
                    <button className={classes.addCartBtn} id='addToCart' onClick={(e)=>{e.preventDefault(); createNotification(); data.quantity = quantity; setData(data); addToCart(data)}}>
                        ADD TO CART
                        {/* create a pop up notifcation on click of add cart btn. this triggers a function that creates an element container (first checks to see if one exist) 
                            and appends a new notifcation div to it that start with a class that positions it lower and transparent then adds a class to raise and make fade in. 
                            after timeout of ~5 sec lower and fade out again and delete parent container
                        */}
                    </button>
                </div>



            </div>
                                

        </div>

        
        </>
    )
}