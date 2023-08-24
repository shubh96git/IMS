import { Link } from 'react-router-dom'

function AddSubSubCategory() {
    return (    
 <div className='container'>
    <h3>Add SubSubCategory</h3>
    <hr />
    <form>
    <div className='mb-3'>
              <label htmlFor=''>Name</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter name of Sub - SubCategory here'
              />
      </div>
      <div>
        <button  className='btn btn-primary'>
          Save Or Update
        </button>
      </div>
    </form>
    <hr />
    <Link to='/subsubcategory'>Back to List</Link>
  </div> );
}

export default AddSubSubCategory;