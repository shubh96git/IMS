import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

function CategoryList() {

    const [categories, setCategories] = useState([]);

    return (
            <div className='container'>
      <h3>List of Categories</h3>
      <hr />
      <div>
        <td>
        <Link to='/addCategory' className='btn btn-primary mb-2'>
          Add Category
        </Link>
        </td>
        <td>  
        <Link to='/subcategory' className='btn btn-secondary mb-2'>
          Sub-Category
        </Link>
        </td>
        <td>  
        <Link to='/subsubcategory' className='btn btn-secondary mb-2'>
          Sub-Sub-Category
        </Link>
        </td>
        <table className='table table-bordered table-striped'>
          <thead className='thead-dark'>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th colSpan={3}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((employee) => (
              <tr key={categories.id}>
                <td>{categories.name}</td>
                <td>
                  <Link
                    className='btn btn-info'
                    to={`/category/edit/${categories.id}`}
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

export default CategoryList;