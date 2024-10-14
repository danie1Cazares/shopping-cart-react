import classes from './HomePageComponent.module.css'

export default function HomePageComponent() {
// create array with 3 img srcs?
const postImageCollection = ['https://www.luxurylifestylemag.co.uk/wp-content/uploads/2023/10/bigstock-Handsome-Confident-Elegant-M-461952191.jpg', 
    'https://www.mensjournal.com/.image/t_share/MTk2MTM3MDAyNjE2ODkwODg1/handsomemaninblacksuitwitholdclassiccar.jpg', 
    'https://www.thefashionisto.com/wp-content/uploads/2023/10/Man-Getting-Dressed-Semi-formal-Attire.jpg'
];
const arrivalImageCollection = [
    'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
];

    return (
        <>
        <div className={classes.wrapper}>

            {/* <img className={classes.bkgImg} src='https://www.apetogentleman.com/wp-content/uploads/2022/01/cocktail-attire-for-men.jpg'/> */}
            <div className={classes.bkgImg}></div>

            <div className={classes.imgOverlayContent}>
                <div className={classes.textContent}>
                    <h2>MEN'S STYLE</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus non sed rerum repellendus neque temporibus! Iusto enim, dolorum maiores voluptas mollitia nostrum incidunt alias cupiditate eligendi fugiat molestias, similique sequi?</p>
                </div>
                <button className={classes.button}>SHOP NOW</button>
            </div>
        </div>

        <div className={classes.banner}>
            <div className={classes.memberLogo}>
                <h2><span>THE</span> Cazador</h2>
                <p>FASHION CLUB</p>
            </div>

            <div className={classes.memberInfo}>
                <div className={classes.pointInfo}>

                    <p>MEMBERS</p>
                    <h2>3 POINTS</h2>
                    <p>PER DOLLAR</p>

                </div>
                <div className={classes.pointInfo}>
                    
                    <p>DEBIT & CREDIT<br></br>CARDMEMBERS</p>
                    <h2>6 POINTS</h2>
                    <p>PER DOLLAR</p>

                </div>
                <div className={classes.pointInfo}>
                    
                    <p>ICON & AMBASSADOR<br></br>CREDIT CARDMEMBERS</p>
                    <h2>9 POINTS</h2>
                    <p>PER DOLLAR</p>

                </div>
            </div>

            <div className={classes.memberLearnMore}>
                    <h2>Earn 3X the points on fashion!</h2>
                    <div className={classes.linkContainer}>
                        <span>Shop Beauty</span>
                        <span>See Restrictions</span>
                    </div>
            </div>


        </div>
            
            <div className={classes.latestPostSection}>
                        <h1>LATEST POST</h1>
                        <div className={classes.postContainer}> 
                            {
                                // adjust container to be centered instead of space evenly. add column gap of 1rem and padding L and R of 1rem
                                // use clamp on height and width of image
                                postImageCollection.map(image => (
                                    <>
                                        <div className={classes.postContent}>
                                                <img className={classes.postImg} src={image}/>
                                                <h4>CATEGORY</h4>
                                                <h3>Headline of article or post insert here</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod labore repellat veritatis in. Ex pariatur accusantium necessitatibus ullam explicabo ratione.</p>
                                                <p>READ MORE</p>
                                        </div> 
                                    </>

                                ))
                            }
                        </div>
            </div>
            
            <div className={classes.newArrivalSection}>
                        <h1>NEW ARRIVALS</h1>
                        <div className={classes.productContainer}> 
                            {
                                arrivalImageCollection.map(image => (
                                    <>
                                        <div className={classes.products}>
                                                <img className={classes.productImg} src={image}/>
                                                <h3>PRODUCT TITLE</h3>
                                                <p>$155.23</p>
                                     
                                        </div> 
                                    </>

                                ))
                            }
                        </div>

            </div>
           
       

        </>
    );
}