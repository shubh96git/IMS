import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const UserList = () => {
  const [users, setUsers] = useState([]);



  return (
    <div className='container'>
      <h3>List of Users</h3>
      <hr />
      <div>
        <Link to='/addUSer' className='btn btn-primary mb-2'>
          Add New User 
        </Link>
        <table className='table table-bordered table-striped'>
          <thead className='thead-dark'>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Password</th>
              <th>Status</th>
              <th>UserRole</th>
              <th colSpan={3}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.password}</td>
                <td>{user.status}</td>
                <td>{user.user_role}</td>
                <td>
                  <Link
                    className='btn btn-info'
                    to={`/users/edit/${user.id}`}
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
};

export default UserList;
