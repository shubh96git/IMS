import React from 'react'

import Navbar from './sellernavbar'


function Seller() {
  return (
    <>
   <Navbar></Navbar>
   <div>
   <table class="table">
  <thead>
    <tr>
      <th scope="col">Product Id</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product Price</th>
      <th scope="col">Product Quantity</th>
      <th scope="col">Category</th>
    </tr>
  </thead>
 <tbody></tbody>
 
</table>
   </div>
    </>
  )
}

export default Seller