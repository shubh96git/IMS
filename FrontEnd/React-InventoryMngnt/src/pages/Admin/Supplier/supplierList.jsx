import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

function SellerList() {

    const [supplier, setSupplier] = useState([]);

    return (
            <div className='container'>
      <h3>List of Suppliers</h3>
      <hr />
      <div>
        <Link to='/supplier/addSupplier' className='btn btn-primary mb-2'>
          Add Supplier
        </Link>
        <table className='table table-bordered table-striped'>
          <thead className='thead-dark'>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th colSpan={3}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {supplier.map((employee) => (
              <tr key={supplier.id}>
                <td>{supplier.name}</td>
                <td>{supplier.email}</td>
                <td>{supplier.mobile}</td>
                <td>
                  <Link
                    className='btn btn-info'
                    to={`/supplier/edit/${supplier.id}`}
                  >
                    Update
                  </Link>
                </td>
                <td>
                  <button
                    className='btn btn-danger ml-2'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      );
}

export default SellerList;