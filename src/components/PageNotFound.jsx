import React from 'react';

export default function PageNotFound(props) {
  return (
    <div className='m-auto text-center py-20 md:py-24 text-sm md:text-md' style={{ maxWidth: 500 }}>
      <img src='https://static.xx.fbcdn.net/rsrc.php/yN/r/MnQWcWb6SrY.svg' width={60} height={60} />
      <h3 className='text-lg md:text-2xl'>This page isn't available</h3>
      <span>The link may be broken, or the page may have been removed. Check to see if the link you're trying to open is correct.</span>
    </div>
  )
}