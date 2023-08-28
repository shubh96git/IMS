import { Link } from 'react-router-dom'
import {useParams, useNavigate} from "react-router-dom"
import React, { useEffect, useState } from 'react';
import NavigationBarAdmin from '../../NavigationBarAdmin'
import axios from "axios";

function AddSupplierAddrs() {
  const {supplierId} = useParams();

  const [supplier, setSupplier] = useState({
    id: '',
    adr_line1: '',
    adr_line2: '',
    city: '',
    country:'',
    state: '',
    zip_code:'',
    supplier_id: '',
  });

  const handleInputChange = (event) => {
    let copyOfSupplier = { ...supplier }
    copyOfSupplier[event.target.name] = event.target.value;
    setSupplier(copyOfSupplier);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    console.log(supplier)
    event.preventDefault();
    axios.post("http://127.0.0.1:9999/suppliers_addrs", supplier)
        .then(res => {
            navigate("/supplier")
        })
        .catch(err => {console.log(err)})
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:9999/suppliers_addrs/" + supplierId)
        .then(res => {
            console.log(res.data)
            setSupplier(res.data)
        })
        .catch(err => console.log(err))
  }, [])

    return ( 
      <div className='container-fluid'>
      { <NavigationBarAdmin /> }   
 <div className='container'>
    <h3>Add Supplier Address Details</h3>
    <hr />
    <form onSubmit={handleSubmit}>
    <div className='mb-3'>
              <label htmlFor=''>Supplier Addr line 1</label>
              <input
                type='text'
                name="adr_line1"
                value={supplier.adr_line1}
                onChange={handleInputChange}
                className='form-control'
                placeholder='Enter Address Line 1 here'
              />
      </div>
      <div className='mb-3'>
              <label htmlFor=''>Supplier Addr line 2</label>
              <input
                type='text'
                name="adr_line2"
                value={supplier.adr_line2}
                onChange={handleInputChange}
                className='form-control'
                placeholder='Enter Address Line 2 here'
              />
      </div>
      <div className='mb-3'>
              <label htmlFor=''>City</label>
              <input
                type='text'
                name="city"
                value={supplier.city}
                onChange={handleInputChange}
                className='form-control'
                placeholder='Enter City here'
              />
        </div>
        <div className='mb-3'>
              <label htmlFor=''>Country</label>
              <input
                type='text'
                name="country"
                value={supplier.country}
                onChange={handleInputChange}
                className='form-control'
                placeholder='Enter Country here'
              />
        </div>
        <div className='mb-3'>
              <label htmlFor=''>State</label>
              <input
                type='text'
                name="state"
                value={supplier.state}
                onChange={handleInputChange}
                className='form-control'
                placeholder='Enter State here'
              />
        </div>
      <div className='mb-3'>
              <label htmlFor=''>Zip Code</label>
              <input
                type='tel'
                name="zip_code"
                value={supplier.zip_code}
                onChange={handleInputChange}
                className='form-control'
                placeholder='Enter Zip-Code here'
              />
      </div>
      <div>
        <button  className='btn btn-primary'>
          Save Or Update
        </button>
      </div>
    </form>
    <hr />
    <Link to='/'>Back to List</Link>
  </div>
  </div> );
}

export default AddSupplierAddrs;