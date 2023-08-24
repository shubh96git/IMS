import { Link } from 'react-router-dom'

function AddProduct() {
    return (    
 <div className='container'>
    <h3>Add Category</h3>
    <hr />
    <form>
    <div className='mb-3'>
              <label htmlFor=''>Name</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter name of Product here'
              />
      </div>
      <div className='mb-3'>
              <label htmlFor=''>Price</label>
              <input
                type='number'
                className='form-control'
                placeholder='Enter Price of Product here'
              />
      </div>
      <div className='mb-3'>
              <label htmlFor=''>Quantity</label>
              <input
                type='number'
                className='form-control'
                placeholder='Enter Quantity of product here'
              />
      </div>
      <div className='mb-3'>
              <label htmlFor=''>CategoryId</label>
              <input
                type='number'
                className='form-control'
                placeholder='Enter Category ID here'
              />
      </div>
      <div className='mb-3'>
              <label htmlFor=''>Seller ID</label>
              <input
                type='number'
                className='form-control'
                placeholder='Enter Seller Id here'
              />
      </div>
      <div>
        <button  className='btn btn-primary'>
          Save Or Update
        </button>
      </div>
    </form>
    <hr />
    <Link to='/product'>Back to List</Link>
  </div> );
}

export default AddProduct;