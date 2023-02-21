import {React, useState, useEffect} from 'react';
import Toggle from '../Toggle.js';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchAndFilter from './SearchAndFilter.js';
import BookLoader from '../../loader/BookLoader';

const API = process.env.REACT_APP_API_URL;
const CasualReading=()=>{

const [bookData, setBookData] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState(['']);
  const [paginate, setpaginate] = useState(8);
  const [searchParam] = useState([
    'book_title',
    'book_author',
    'reading_level',
  ]);

  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get(`${API}/api/books`)
      //  .then((response) => console.log(response.data))
      .then((response) => {
        setBookData(response.data.payload);
        setLoaded(true);
      })
      .catch((error) => {
        console.error('catch', error);
        setLoaded(true);
        setError(error);
      });
  }, []);

  const data = Object.values(bookData);
  const search_parameters = Object.keys(Object.assign({}, ...data));
  const filter_items = [...new Set(data.map((book) => book.reading_level))];

  function search(bookData) {
    return bookData.filter(
      (book) =>
        book.reading_level.includes(filter) &&
        search_parameters.some((parameter) =>
          book[parameter].toString().toLowerCase().includes(query)
        )
    );
  }

  const load_more = (event) => {
    setpaginate((prevValue) => prevValue + 8);
  };

  // function search(bookData) {
  //   // eslint-disable-next-line
  //   return bookData.filter((book) => {
  //     if (book.reading_level === filterParam) {
  //       return searchParam.some((newBook) => {
  //         return (
  //           book[newBook].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
  //         );
  //       });
  //     } else if (filterParam === 'All') {
  //       return searchParam.some((newBook) => {
  //         return (
  //           book[newBook].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
  //         );
  //       });
  //     }
  //   });
  // }

  if (error) {
    return <>{error.message}</>;
  } else if (!loaded) {
    return <><BookLoader/></>;
  } else {
  return (
   <div>
      <div className='text-center'>Casual Reading Books</div>
     {/* <div className='mt-10'>
     <Toggle/>
     </div> */}
      <div className='text-right'>
        <Link to={`/books/new`}>
          <button className='mr-20 btn bg-indigo-500 px-4 py-4 rounded text-white  font-georgia hover:bg-indigo-400 '>
            Add Books{' '}
          </button>
        </Link>
      </div>
     <div>
      <SearchAndFilter/>
      <button className='text-center' onClick={load_more}>Load More</button>
      </div>
     </div>
     )
   }
}

export default CasualReading;