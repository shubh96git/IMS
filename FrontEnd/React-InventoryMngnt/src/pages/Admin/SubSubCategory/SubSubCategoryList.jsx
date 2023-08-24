import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

function SubSubCategoryList() {

    const [subsubcategories, setsubsubCategories] = useState([]);

    return (
            <div className='container'>
      <h3>List of Sub-Sub-Categories</h3>
      <hr />
      <div>
        <td>
        <Link to='/addSubSubCategory' className='btn btn-primary mb-2'>
          Add Sub Sub Category
        </Link>
        <td>  
        <Link to='/category' className='btn btn-secondary mb-2'>
          Category
        </Link>
        </td>
        <td>  
        <Link to='/subcategory' className='btn btn-secondary mb-2'>
          Sub-Category
        </Link>
        </td>
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
            {subsubcategories.map((employee) => (
              <tr key={subsubcategories.id}>
                <td>{subsubcategories.name}</td>
                <td>
                  <Link
                    className='btn btn-info'
                    to={`/subsubcategory/edit/${subsubcategories.id}`}
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

export default SubSubCategoryList;