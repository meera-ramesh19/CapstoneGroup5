import React from 'react';
import {Link} from 'react-router-dom';
import './BookShelf.scss';

const BookShelf = () => {
  return (
    <div>
         <h1 className='header'>Book Shelf</h1>
    <div className='shelf'>
   
   <Link to ='/cards'>
<div class="bookshelf ">
<p style={{textAlign:'center'}}>Reading Level Book Shelf</p> 
  <div class="book book-green">
    <h2 className='heading2'>Shapes we Eat</h2>
  </div>
  <div class="book book-springer">
    <h2 className='heading2'>Colored shirts</h2>
  </div>
  <div class="book book-green">
    <h2 className='heading2'>Want is not Need</h2>
  </div>
  
  <div class="book book-umber">
    <h2 className='heading2'>In a Grocery Store</h2>
  
  </div>
  <div class="book book-blue">
    <h2 className='heading2'>Bear Facts Vol.2</h2>
  </div>
  <div class="book-tilted">
  <div class="book book-umber">
    <h2 className='heading2'>Coins</h2>
  </div>
  </div>
  <div class="book-tilted">
  <div class="book book-springer">
    <h2 className='heading2'>In a small town</h2>
  </div>
  </div>
  </div>
  </Link>
  {/* <div class="book book-blue">
    <h2>Actionscript:</h2>
    <h3>The Definitive Guide</h3>
  </div> */}
  
  {/* <div class="book-tilted">
    <div class="book book-umber">
      <h2>Harry Potter</h2>
    </div>
  </div>
  <div class="book book-blue">
    <h2>Introducing HTML5</h2>
  </div> */}
{/* <!--   <div class="book book-green">
    <h2>CSS For Dummies</h2>
  </div>
  <div class="book book-green">
    <h2>Actionscript:</h2>
    <h3>The Definitive Guide</h3>
  </div> -->
  <!--   <div class="book book-umber">
<!--     <h2>Harry Potter</h2>
  </div>
  <div class="book book-green">
    <h2>Introducing HTML5</h2>
  </div>
  <div class="book book-blue">
    <h2>CSS For Dummies</h2>
  </div>
  <div class="book book-green">
    <h2>Actionscript:</h2>
    <h3>The Definitive Guide</h3>
  </div>
  <div class="book book-springer">
    <h2>Harry Potter</h2>
  </div>
  <div class="book book-springer">
    <h2>Introducing HTML5</h2>
  </div>
  <div class="book book-green">
    <h2>CSS For Dummies</h2>
  </div>
  <div class="book book-blue">
    <h2>Actionscript:</h2>
    <h3>The Definitive Guide</h3>
  </div> --
  <div class="book book-blue">
    <h2>Harry Potter</h2>
  </div>
  <div class="book book-blue">
    <h2>Introducing HTML5</h2>
  </div>
  <div class="book book-umber">
    <h2>CSS For Dummies</h2>
  </div>
  <div class="book-tilted">
    <div class="book book-green">
      <h2>Actionscript:</h2>
      <h3>The Definitive Guide</h3>
    </div>
  </div> --
<!--   <div class="book book-blue">
<!--     <h2>Harry Potter</h2>
  </div>
  <div class="book book-springer">
    <h2>Introducing HTML5</h2>
  </div>
  <div class="book book-green"> --
    <h2>CSS For Dummies</h2>
  </div>
  <div class="book book-green">
    <h2>Actionscript:</h2>
    <h3>The Definitive Guide</h3>
  </div>
  <div class="book book-umber">
    <h2>Harry Potter</h2>
  </div>
  <div class="book book-blue">
    <h2>Introducing HTML5</h2>
  </div>
  <div class="book book-umber">
    <h2>CSS For Dummies</h2>
  </div>
  <div class="book book-green">
    <h2>Actionscript:</h2>
    <h3>The Definitive Guide</h3>
  </div> -->
  <!--   <div class="book book-green">
<!--     <h2>Harry Potter</h2>
  </div>
  <div class="book book-green">
    <h2>Introducing HTML5</h2> -->
  <!--   </div>
  <div class="book book-green">
    <h2>CSS For Dummies</h2>
  </div>
  <div class="book book-green">
    <h2>Actionscript:</h2><h3>The Definitive Guide</h3>
  </div>
  <div class="book book-springer">
    <h2>Harry Potter</h2>
  </div> -
  <div class="book book-green">
    <h2>Introducing HTML5</h2>
  </div>
  <div class="book book-springer">
    <h2>CSS For Dummies</h2>
  </div>
  <div class="book book-umber">
    <h2>Actionscript:</h2><h3>The Definitive Guide</h3>
  </div>
  <div class="book book-green">
    <h2>Harry Potter</h2>
  </div>
  <div class="book book-green">
    <h2>Introducing HTML5</h2>
  </div>
  <div class="book book-umber">
    <h2>CSS For Dummies</h2>
  </div>
  <div class="book book-blue">
    <h2>Actionscript:</h2><h3>The Definitive Guide</h3>
  </div><div class="book book-springer">
    <h2>Harry Potter</h2>
  </div><div class="book book-green">
    <h2>Introducing HTML5</h2>
  </div><div class="book book-springer">
    <h2>CSS For Dummies</h2>
  </div><div class="book book-green">
    <h2>Actionscript:</h2><h3>The Definitive Guide</h3>
  </div><div class="book book-umber">
    <h2>Harry Potter</h2>
  </div><div class="book book-green">
    <h2>Introducing HTML5</h2>
  </div><div class="book book-green">
    <h2>CSS For Dummies</h2>
  </div><div class="book book-umber">
    <h2>Actionscript:</h2><h3>The Definitive Guide</h3>
  </div><div class="book book-green">
    <h2>Harry Potter</h2>
  </div><div class="book book-springer">
    <h2>Introducing HTML5</h2>
  </div><div class="book book-blue">
    <h2>CSS For Dummies</h2>
  </div><div class="book book-blue">
    <h2>Actionscript:</h2><h3>The Definitive Guide</h3>
  </div> --> */}
  <Link to ='/cards'>
  <div class="bookshelf ">
  <p style={{textAlign:'center'}}>Casual Reading Shelf</p> 
  <div class="book book-green">
    <h2>A Trip to Farm</h2>
  </div>
  <div class="book book-springer">
    <h2 className='heading2'>Plants</h2>
  </div>
  <div class="book book-green">
    <h2 className='heading2'>Messy Mike</h2>
  </div>
  
  <div class="book book-umber">
    <h2>Danny and Bella</h2>
    <h3>Love to play</h3>
  </div>
  <div class="book book-blue">
    <h2 className='heading2'>Bear Facts Vol.2</h2>
  </div>
  <div class="book-tilted">
  <div class="book book-umber">
    <h2 className='heading2'>Introducing HTML5</h2>
  </div>
  </div>
  <div class="book-tilted">
  <div class="book book-springer">
    <h2 className='heading2'>CSS For Dummies</h2>
  </div>
  </div>
  </div>
  </Link>
</div>
</div>
  );
};

export default BookShelf;
