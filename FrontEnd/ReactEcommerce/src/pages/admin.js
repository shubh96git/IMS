import React from 'react'

import Navbar from './sellernavbar'
import AdminNavbar from './adminnavbar'


function Admin() {
  return (
    <>
  <AdminNavbar></AdminNavbar>
   <div>
   <table class="table">
  <thead>
    <tr>
      <th scope="col">Seller Id </th>
      <th scope="col">Seller FirstName</th>
      <th scope="col">Seller LastName</th>
      <th scope="col">Seller Email</th>
      <th scope="col">Seller Mobile</th>
      <th scope="col">Seller Status</th>
    
    </tr>
  </thead>
 <tbody></tbody>
 
</table>
   </div>
    </>
  )
}

export default Admin