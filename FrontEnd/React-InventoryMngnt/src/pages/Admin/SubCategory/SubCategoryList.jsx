import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

function SubCategoryList() {

    const [subcategories, setsubCategories] = useState([]);

    return (
            <div className='container'>
      <h3>List of Sub-Categories</h3>
      <hr />
      <div>
        <td>
        <Link to='/addSubCategory' className='btn btn-primary mb-2'>
          Add Sub Category
        </Link>
        </td>
        <td>  
        <Link to='/category' className='btn btn-secondary mb-2'>
          Categories
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
            {subcategories.map((employee) => (
              <tr key={subcategories.id}>
                <td>{subcategories.name}</td>
                <td>
                  <Link
                    className='btn btn-info'
                    to={`/subcategory/edit/${subcategories.id}`}
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

export default SubCategoryList;