import { Link } from 'react-router-dom'

function AddSupplierAddrs() {
    return (    
 <div className='container'>
    <h3>Add Supplier Address Details</h3>
    <hr />
    <form>
    <div className='mb-3'>
              <label htmlFor=''>Supplier Addr line 1</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Address Line 1 here'
              />
      </div>
      <div className='mb-3'>
              <label htmlFor=''>Supplier Addr line 2</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Address Line 2 here'
              />
      </div>
      <div className='mb-3'>
              <label htmlFor=''>City</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter City here'
              />
        </div>
        <div className='mb-3'>
              <label htmlFor=''>Country</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Country here'
              />
        </div>
        <div className='mb-3'>
              <label htmlFor=''>State</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter State here'
              />
        </div>
      <div className='mb-3'>
              <label htmlFor=''>Zip Code</label>
              <input
                type='tel'
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
  </div> );
}

export default AddSupplierAddrs;