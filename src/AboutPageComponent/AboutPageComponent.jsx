import classes from './AboutPageComponent.module.css'

export default function AboutPageComponent(){

    return (
        <>
        <div className={classes.wrapper}>
            <div className={classes.introWrapper}>
                <h3>An Eye for Better Fashion</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia blanditiis labore ipsa quisquam sequi dolore deserunt, voluptatum quo corrupti cumque laboriosam, minus nisi officiis commodi vel? Repellendus vitae voluptate qui.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dolor cum laudantium. Dolore, voluptates earum quasi eos autem at recusandae saepe quibusdam.</p>
            </div>    

            <div className={classes.sectionWrapper}>
                <img className={classes.sectionImg} loading='lazy' src='https://images.unsplash.com/photo-1662758973728-4e019aaf6f7a?'/>
                <div className={classes.textWrapper}>
                    <h3>About Us</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam repellat corrupti voluptate illo, sunt quibusdam animi optio perferendis perspiciatis adipisci eo.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eos, ipsam earum aliquam provident nesciunt explicabo facere labore, quod ex omnis nulla fuga quos placeat ducimus? Cumque sunt voluptate quam?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, reiciendis beatae? Odio expedita nostrum impedit blanditiis, laudantium exercitationem labore, ipsa accusantium dolore ut aperiam voluptatum delectus eius earum! Libero, minima?</p>
                    <button>Browse Products</button>
                </div>

            </div>

            <div className={classes.sectionWrapper}>
                <img  className={classes.sectionImg} loading='lazy' src='https://images.unsplash.com/photo-1676144942338-5fa8716abbfd?'/>
                <div className={classes.textWrapper}>
                    <h3>Fashion For Everyone</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam repellat corrupti voluptate illo, sunt quibusdam animi optio perferendis perspiciatis adipisci eos velit nesciunt rem dolorem reprehenderit nemo deleniti cupiditate alias.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eos, ipsam earum aliquam provident nesciunt explicabo facere labore, quod ex omnis nulla fuga quos placeat ducimus? Cumque sunt voluptate quam?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, reiciendis beatae? Odio expedita nostrum impedit blanditiis, laudantium exercitationem labore, ipsa accusantium dolore ut aperiam voluptatum delectus eius earum! Libero, minima?</p>
                    <button>Browse Collection</button>
                </div>

            </div>

            <div className={classes.sectionWrapper}>
                <img className={classes.sectionImg} loading='lazy' src='https://images.unsplash.com/photo-1661581624851-02420cec2b23?'/>
                <div className={classes.textWrapper}>
                    <h3>Responsible Fashion</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam repellat corrupti voluptate illo, sunt quibusdam animi optio perferendis perspiciatis adipisci eos velit nesciunt rem dolorem reprehenderit nemo deleniti cupiditate alias.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eos, ipsam earum aliquam provident nesciunt explicabo facere labore, quod ex omnis nulla fuga quos placeat ducimus? Cumque sunt voluptate quam?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, reiciendis beatae? Odio expedita nostrum impedit blanditiis, laudantium exercitationem labore, ipsa accusantium dolore ut aperiam voluptatum delectus eius earum! Libero, minima?</p>
                    <button>Browse Business</button>
                </div>

            </div>


            <div className={classes.banner}>

                <div className={classes.bannerText}>
                    <h3>Our commitment to high end fashion</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim nemo libero expedita maiores, tenetur ducimus dolorum, eius obcaecati sapiente aliquam similique est alias eveniet. Repudiandae ut accusantium modi assumenda sint.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores maiores obcaecati dolorem, corrupti sapiente quam? Perspiciatis, asperiores amet aliquid non distinctio deleniti temporibus consectetur ducimus vel sapiente fugit nihil eos.</p>
                    <p>Learn more</p>
                </div>
                <img className={classes.bannerImg} loading='lazy' src='https://images.unsplash.com/photo-1633655442356-ab2dbc69c772?'/>
            </div>

            <div className={classes.latestPostSection}>
                        <h1> A COMMUNITY BUILT ON NEIGHBORHOOD VALUES</h1>
                        <div className={classes.postContainer}> 

                                        <div className={classes.postContent}>
                                            <div>
                                                <img className={classes.postImg} loading='lazy' src='https://images.unsplash.com/photo-1665815844395-06f64f44b5e3?'/>
                                                <h4>CATEGORY</h4>
                                                <h3>Headline of article or post insert here</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod labore repellat veritatis in. Ex pariatur accusantium necessitatibus ullam explicabo ratione.</p>
                                                <p>READ MORE</p>
                                            </div>
                                        </div> 

                                        <div className={classes.postContent}>
                                            <div>
                                                <img className={classes.postImg} loading='lazy' src='https://images.unsplash.com/photo-1496088941920-f7d451d95bf4?'/>
                                                <h4>CATEGORY</h4>
                                                <h3>Headline of article or post insert here</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod labore repellat veritatis in. Ex pariatur accusantium necessitatibus ullam explicabo ratione.</p>
                                                <p>READ MORE</p>
                                            </div>
                                        </div> 

                                        <div className={classes.postContent}>
                                            <div>
                                                <img className={classes.postImg} loading='lazy' src='https://images.unsplash.com/photo-1613745699156-4994b72730bd?'/>
                                                <h4>CATEGORY</h4>
                                                <h3>Headline of article or post insert here</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod labore repellat veritatis in. Ex pariatur accusantium necessitatibus ullam explicabo ratione.</p>
                                                <p>READ MORE</p>
                                            </div>
                                        </div> 
                        </div>
            </div>
        </div>    
        </>
    )
}