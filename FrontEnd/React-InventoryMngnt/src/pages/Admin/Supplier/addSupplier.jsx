import { Link } from 'react-router-dom'

function AddSupplier() {
    return (    
 <div className='container'>
    <h3>Add Supplier</h3>
    <hr />
    <form>
    <div className='mb-3'>
              <label htmlFor=''>Name</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter name here'
              />
      </div>
      <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <input
                type='email'
                className='form-control'
                placeholder='Enter Email here'
              />
        </div>
      <div className='mb-3'>
              <label htmlFor=''>Mobile Number</label>
              <input
                type='tel'
                className='form-control'
                placeholder='Enter Mobile No. here'
              />
      </div>
      <div>
        <button  className='btn btn-primary'>
          Save Or Update
        </button>
      </div>
    </form>
    <hr />
    <Link to='/supplier'>Back to List</Link>
  </div> );
}

export default AddSupplier;