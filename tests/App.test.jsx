import { describe, it, expect, vitest, vi, beforeAll, afterAll, beforeEach, afterEach} from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react';

import App from '../src/App';
import NavbarComponent from '../src/NavbarComponent/NavbarComponent';
import SearchPageComponent from '../src/CatalogPageComponent/CatalogPageComponent';




const mockedGetNewSearch = vitest.fn();

//test if fixed nav bar appear after screen scroll

describe('Navbar component', () => {
  it('fixed navbar should appear when window scrolls down', () => {
    // Mock `window.scrollY`
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 0, // Initial value
    });


    // Render the Navbar component
    render(
      <MemoryRouter>
          <NavbarComponent itemsInCart={[]} getNewSearch={mockedGetNewSearch}/>
      </MemoryRouter>  
      
    );

    // Initially, opacity should be 0
    const fixedNavbar = screen.getByTestId('fixedNavbar'); // select by test id
    expect(fixedNavbar).not.toBeVisible;

    // Change scrollY to 250
    act(() => {
      window.scrollY = 250;
      window.dispatchEvent(new Event('scroll'));
    });




    // Now opacity should be 1
    // expect(navbar).toHaveStyle({ opacity: '1' });
    expect(fixedNavbar).toBeVisible;
  });
});


//test if clicking collections links loads correct data
//    -compare data from component to data pulled using search term directly


describe('search page component', () => {

    // Mocked API response
    const mockUserData = {
    
        "id": 1,
        "title": "Fjallraven - Mens Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
          "rate": 3.9,
          "count": 120}
        
    };

    // Mock the fetch function
    beforeEach(() => {
      vi.spyOn(globalThis, 'fetch').mockResolvedValue({
        json: vi.fn().mockResolvedValue(mockUserData),
      });
    });

    // Clean up mocks after each test
    afterEach(() => {
      vi.restoreAllMocks();
    });

  it('loads and displays the correct data based on prop', async () => {
  

    render(
      <MemoryRouter>
          <SearchPageComponent getCardClicked={vitest.fn()} categoryName={'COLLECTION'} headerImg={''} searchTerm={'men\'s%20clothing'}/>
      </MemoryRouter>
    
    );

    // Ensure fetch was called with the correct URL
    expect(globalThis.fetch).toHaveBeenCalledWith(`https://fakestoreapi.com/products/category/men\'s%20clothing`);


  });
});


//test number badge updates when item is added to cart


describe('shopping cart number badge', () => {

  it('updates number based on items in cart', () => {

    const mockArrayOfCartItems = [{quantity: 1},{quantity: 1}];

    render(
      <MemoryRouter>
          <NavbarComponent itemsInCart={mockArrayOfCartItems} getNewSearch={mockedGetNewSearch}/>
      </MemoryRouter>
    
    );


    const itemsInCartDisplay = screen.getByLabelText('number of cart items');

    expect(itemsInCartDisplay.textContent).toBe('2');

  })

});



// render component
// select element
// make assertion..ie expect




// describe('something truthy and falsy', () => {
//   it('true to be true', () => {
//     expect(true).toBe(true);
//   });

//   it('false to be false', () => {
//     expect(false).toBe(false);
//   });
// });

// describe("App component", () => {
//   it("renders correct heading", () => {
//     render(<App />);
//     expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
//   });
