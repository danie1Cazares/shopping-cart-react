
import React, { useState, useEffect } from 'react';
import classes from './NavbarComponent.module.css'
import {NavLink, Outlet} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';



export default function NavbarCompononent ({itemsInCart, getNewSearch}){


    function getNumberOfCartItems (){
        const totalItems = itemsInCart.reduce((sum, item) => {
            return sum + item.quantity;
        }, 0);
        return totalItems;
    }


    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(false);
    // const [search, setSearch] = useState('');


    function showSearchBar (e){
        
        e.preventDefault();

       if(!showSearch){
        setShowSearch(true);
       } else {
            const input = document.getElementById('search-bar').value.trim();
           
            if(input) {
                getNewSearch(input);
                console.log(input);
                setShowSearch(false);
            
                navigate('/search');
            }

       }
        
    }

    // const [isSticky, setIsSticky] = useState(false);
    const [slideUp, setSlideUp] = useState(false);
    const [slideDown, setSlideDown] = useState(false);

    // on scroll slide up original nav bar transfrom up -50px
    // slide down new nav bar that starts at transform -50px
     
    const handleScroll = () => {
        const offset = window.scrollY; // Get current scroll position
        const navbarHeight = 150; // You can adjust this value depending on when you want the navbar to become sticky
    
        // Set isSticky to true if scroll position is greater than the navbar height

        if (offset > navbarHeight) {
            setSlideUp(true);
            // setShowFixedNav(true);
            // setSlideDown(true);

        } else {
            setSlideUp(false);
        }

        if (offset > (navbarHeight + 100)) {
            // setSlideUp(false);
            // setSlideUp(true);
            setSlideDown(true);
        } else {
            setSlideDown(false);
        }

        
      };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll); // Cleanup
        };
      }, []);


      const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

      function showMobileNav(){
        setIsMobileNavOpen(!isMobileNavOpen);
      }
      
    return (
        <>
            <header>
                {/* move logo to middle of header, set menuIcons as absolute positioning use flex on header to center */}
                <NavLink to = '/'><img className={classes.logo} src="/logo.svg" alt='logo' /></NavLink>
                <div className={classes.menuIcons}>
                {/* <NavLink to ='search'><span className={`material-symbols-outlined ${classes.icon}`}>search</span></NavLink> */}
                <span className={`material-symbols-outlined ${classes.icon} ${classes.searchIcon}`} >
                        <span onClick={(e)=>{showSearchBar(e)}}>search</span>
                        <input type='search' className={`${classes.searchBar} ${showSearch ? '' : classes.hide}`} id='search-bar' name='s' placeholder='Enter Search Here'/>
               
                </span>
                <NavLink to ='cart'><span className={`material-symbols-outlined ${classes.icon} ${classes.shoppingBag}`}>shopping_bag <div aria-label='number of cart items' className={classes.numberBadge}>{getNumberOfCartItems()}</div></span></NavLink>
                </div>

            </header> 

            <div className={`${classes.navbar} ${slideUp ? classes.navSlideUp : ''}`}>
                <NavLink to = 'collection'><p>COLLECTION</p></NavLink>
                <NavLink to = 'business'><p>BUSINESS</p></NavLink>
                <NavLink to = 'casual'><p>CASUAL</p></NavLink>
                <NavLink to = 'about'><p>ABOUT US</p></NavLink>
            </div>

            <div className={`${classes.fixedNavbar} ${slideDown ? classes.fixedNavDropIn : ''}`} data-testid='fixedNavbar'> 
                <div className={classes.fixedNavbarHeader} >
                    <div type="button" onClick={showMobileNav} className={`material-symbols-outlined ${classes.menuBtn}`} data-testid="menu-btn">menu</div>
                    {/* 
                    
                    default mobile nav links are hidden and negative transform either translate Y or scale Y
                    on click change class of mobile nav links to visible
                    add postiive transform of transalte or scale y to expand and drop down nav
                    add chevron pointing up that closes menu
                    */}

                    <NavLink to = '/'><img className={classes.fixedNavlogo} src="/fixedNavLogo.svg" alt='logo' /></NavLink>

                    <div className={classes.fixedNavLinks}>
                        <NavLink to = 'collection'><p>COLLECTION</p></NavLink>
                        <NavLink to = 'business'><p>BUSINESS</p></NavLink>
                        <NavLink to = 'casual'><p>CASUAL</p></NavLink>
                        <NavLink to = 'about'><p>ABOUT US</p></NavLink>
                    </div>

                    <div className={classes.menuIcons}>
                        <span className={`material-symbols-outlined ${classes.icon} ${classes.searchIcon}`} >
                            <span onClick={(e)=>{showSearchBar(e)}}>search</span>
                            <input type='search' className={`${classes.searchBar} ${showSearch ? '' : classes.hide}`} id='search-bar' name='s' placeholder='Enter Search Here'/>
                
                        </span>
                        <NavLink to ='cart'><span className={`material-symbols-outlined ${classes.icon} ${classes.shoppingBag}`}>shopping_bag <div className={classes.numberBadge}>{getNumberOfCartItems()}</div></span></NavLink>
                    </div>
                </div>    

                <div className={ `${classes.mobileNavLinks} ${isMobileNavOpen ? classes.showMobileNavLinks : ''}`}>
                    {/* MOBILE nav links */}
                    <NavLink to = 'collection'><p>COLLECTION</p></NavLink>
                    <NavLink to = 'business'><p>BUSINESS</p></NavLink>
                    <NavLink to = 'casual'><p>CASUAL</p></NavLink>
                    <NavLink to = 'about'><p>ABOUT US</p></NavLink>
                    <div className={`material-symbols-outlined ${classes.closeMenuBtn}`} onClick={showMobileNav} >arrow_back_ios_new</div>
                </div>

            </div> 


            <main>
                <Outlet />
            </main>


            <footer>
                <div className={classes.signUpBar}>
                    <h3>BE A PART OF THE MOVEMENT</h3>
                    <p>Enjoy 10% off your first purchase when you sign up!</p>
                    <div>
                        <input type='email' className={classes.emailInput} placeholder='Enter your email here'/>
                        <button className={classes.subBtn}>SUBSCRIBE</button>                        
                    </div>

                </div>
                <div className={classes.footerNav}>
                    
                    <div className={classes.footerLinks}>

                        <div className={classes.navCategory}>
                            <h3>COMPANY</h3>
                            <p>Our Story</p>
                            <p>Shop Locations</p>
                            <p>Virtual</p>
                            <p>Clothing care</p>
                            <p>Philanthropy</p>
                        </div>
                        <div className={classes.navCategory}>
                            <h3>BRAND</h3>
                            <p>Style & Fit</p>
                            <p>Craftmanship</p>
                            <p>Reviews</p>
                            <p>Blog</p>
                            <p>Press</p>
                        </div>
                        <div className={classes.navCategory}>
                            <h3>HELP</h3>
                            <p>Shipping & Returns</p>
                            <p>Repairs</p>
                            <p>Warranty</p>
                            <p>FAQ</p>
                            <p>Contact us</p>
                        </div>

                    </div>

                    <div className={classes.contactInfo}>
                        <h3>ASK A FASHION SPECIALIST</h3>
                        <p>Whether you're a collector or visiting for the first time, we're here to assist!</p>

                        <div className={classes.contactMethods}>

                                <div>
                                    <img className={classes.contactIcon} src='https://savant-eyewear.vercel.app/assets/icon-phone-9153a34f.avif' />
                                    <p>(000)-CAZADOR</p>  
                                </div>
                                
                                <div>
                                <   img className={classes.contactIcon} src='data:image/webp;base64,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' />
                                    <p>support@cazador.xyz</p>
                                </div>

                                <div>
                                    <img  className={classes.contactIcon} src='data:image/webp;base64,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' />
                                    <p>Chat with Us</p>
                                </div>


                        </div>


                    </div>

                </div>

                <div className={classes.footerLegalLinks}>
                    <p>© 2024 CAZADOR</p>
                    <p>Privacy</p>
                    <p>Accessibility</p>
                    <p>Terms of Service</p>
                    <p>Refund Policy</p>
                    <p>Conformity</p>
                </div>
                
                <div className={classes.footnoteBar}>
                    <h4>Developed by Daniel Cazares</h4>
                    <p>© Copyright 2024 Daniel Cazares. All rights reserved.</p>
                </div>

            </footer>
        </>
    );
}