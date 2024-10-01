import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Category(props) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);


  const getCategories = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products/categories');
      setCategories(response.data)
    } catch (error) {
      console.error('Error fetching data', error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  // Function to set the current title of the category slug
  const setTitle = (currentSlug) => {
    // Check if currentSlug is in the categories array
    const foundCategory = categories.find(cat => cat === currentSlug);
    if (foundCategory) {
      document.title = `${foundCategory} Listing (${props.totalProduct})`;
    } else {
      document.title = `Product Listing (${props.totalProduct})`;
    }
  };

  useEffect(() => {
    setTitle(props.currentSlug); 
  }, [props.currentSlug, categories, props.totalProduct]);


  // Render loading
  if (loading) return <div className='text-center text-danger my-5'>Loading...</div>;

  return (
    <>
      <ul className='list-group my-3'>
        <li className={`list-group-item ${props.currentSlug == null && 'bg-warning text-white '} `}>
          <Link className='nav-link' to={`/`}>All</Link> {/* fetch all categories(slugs) */}
        </li>
        {
          categories.map((cat, index) => {
            return (
              <li key={index} className={`list-group-item ${cat.slug == props.currentSlug && 'bg-warning text-white'}`}>
                <Link className='nav-link' to={`/${cat.slug}`} >{cat.name}</Link>
                {/* fetch only clicked category(slug) */}
              </li>
            )
          }
          )};
      </ul>
    </>
  )
}

export default Category
