//import axios from 'axios';
import { useState ,useEffect} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';


const AddUser = () => {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStaus] = useState('');
  const [user_role, setUser_role] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();


  return (
    <div className='container'>
      <h3>Add User</h3>
      <hr />
      <form>
        <div className='form-group'>
          <input
            type='text'
            className='form-control col-4'
            id='firstName'
            value={firstName}
            placeholder='Enter first name'
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control col-4'
            id='lastName'
            value={lastName}
            placeholder='Enter last name'
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            className='form-control col-4'
            id='email'
            value={email}
            placeholder='Enter email'
          />
        </div>
        <div className='form-group'>
          <input
            type='tel'
            className='form-control col-4'
            id='mobile'
            value={mobile}
            placeholder='Enter Department'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            className='form-control col-4'
            id='password'
            value={password}
            placeholder='Enter Password'
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control col-4'
            id='status'
            readonly
            value={'PENDING'}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control col-4'
            id='user_role'
            value={'EMPLOYEE'}
          />
        </div>
        <div>
          <button  className='btn btn-primary'>
            Save Or Update
          </button>
        </div>
      </form>
      <hr />
      <Link to='/emps'>Back to List</Link>
    </div>
  );
};

export default AddUser;
