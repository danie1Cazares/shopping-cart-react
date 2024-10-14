import classes from './UserSearchComponent.module.css'
import SearchPageComponent from '../CatalogPageComponent/CatalogPageComponent'
import { useState } from 'react'

export default function UserSearchComponent() {

    const [search, setSearch] = useState('');

    function getNewSearch(e) {
        e.preventDefault();
        const input = document.getElementById('search-bar');
        setSearch(input.value);
        console.log(search);

    }


    return (
        <>

            <div className={classes.wrapper}>

                <form>
                    <input type='search' className={classes.searchBar} id='search-bar' name='s' placeholder='Enter Search Here' onSubmit={getNewSearch}/>
                    {/* <label htmlFor='search-bar'><span className={`material-symbols-outlined ${classes.icon}`}>search</span></label> */}
                    <button className={classes.searchBtn} onClick={getNewSearch}>GO!</button>   
                </form>
            </div>    

                {/* add in limit, sort by, and pages, and page arrows */}
                {/* edit searchpage component to show screen when there is no results */}

                
                {
                    search && <SearchPageComponent searchTerm={search}/>
                }
             

            
        </>
    )

}