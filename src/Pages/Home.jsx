import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../Components/Product';
import Category from '../Components/Category';
import { useParams } from 'react-router-dom';

function Home() {
  const [products, setProducts] = useState([]);
  const { slug } = useParams(); // Extract 'slug' from the URL
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    let response;

    try {
      if (slug == null) {
        // Fetch all products when there's no slug
        response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
      } else {
        // Fetch category-specific products when slug is present
        response = await axios.get(`https://dummyjson.com/products/category/${slug}`);
        setProducts(response.data.products);
      }
    } catch (error) {
      console.error('Error fetching data', error);
      setProducts([]); // Prevent error display when products aren't fetched
    } finally {
      setLoading(false); // Stop loading after fetching
    }
  };

  useEffect(() => {
    getProducts(); // Fetch products on load or when slug changes
  }, [slug]);

  // Display products
  const displayProducts = products.map((prod) => (
    <Product
      key={prod.id}
      id={prod.id}
      name={prod.title}
      img={prod.thumbnail}
      rating={prod.rating}
    />
  ));

  // Render loading state
  if (loading) return <h3 className='text-center text-danger my-5 '>Loading...</h3>

  // Format slug for display
  const currentHeading = slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : 'All Products'

  // Handle case where products are empty
  if (!products || products.length === 0) {
    return <div className='text-center my-5'>No products found.</div>
  }

  return (
    <>
      <div className='mt-5'>
        <div className='row'>
          <div className='col-12 col-md-3 mb-4 category-scrollbar px-5'>
            <Category totalProduct={products.length} currentSlug={slug} />
          </div>

          <div className='col-12 col-md-9'>
            <h1 className='text-center font-monospace mb-3'>{currentHeading}</h1>
            <div className='row product-scrollbar px-5'>
              {displayProducts}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
