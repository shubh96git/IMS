import axios from 'axios';
import { useState ,useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddUser = () => {
  // const [firstName, setFirstname] = useState('');
  // const [lastName, setLastname] = useState('');
  // const [email, setEmail] = useState('');
  // const [mobile, setMobile] = useState('');
  // const [password, setPassword] = useState('');
  // const [status, setStaus] = useState('');
  // const [user_role, setUser_role] = useState('');

  const [user,setUser]=useState({firstName: "",
                                  lastName: "",
                                  email: "",
                                  password: "",
                                  userRole: "EMPLOYEE",
                                  mobile: "",
                                  status: "PENDING"})

  const navigate = useNavigate();
  const { id } = useParams();

  const register = ()=>{
    console.log(user)
    
    //
    axios.post("http://127.0.0.1:8080/user/addEmpl", user)
             .then(result => {
              console.log("added successfully")

              setUser({firstName: "",
              lastName: "",
              email: "",
              password: "",
              userRole: "EMPLOYEE",
              mobile: "",
              status: "PENDING"})

               navigate('/allProduct')
             }).catch(error => {console.log(error)}) 
  }
  const onInputChange = (event) => {
    let copyOfUser = { ...user }
    copyOfUser[event.target.name] = event.target.value;
    setUser(copyOfUser);
}

  return (
    <div className='container'>
      <h3>Add User</h3>
      <hr />
      <form>
        <div className='form-group'>
          <input
            className='form-control col-4'

            onChange={onInputChange}
            name='firstName'
            value={user.firstName}

            placeholder='Enter first name'
          />
        </div>
        <div className='form-group'>
          <input
            className='form-control col-4'
            onChange={onInputChange}
            name='lastName'
            value={user.lastName}
            placeholder='Enter last name'
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            className='form-control col-4' 
            onChange={onInputChange}
            name='email'
            value={user.email}
            placeholder='Enter email'
          />
        </div>
        <div className='form-group'>
          <input
            type='tel'
            className='form-control col-4'
            onChange={onInputChange}
            name='mobile'
            value={user.mobile}
            placeholder='Enter Mobile'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            className='form-control col-4'
            onChange={onInputChange}
            name='password'
            value={user.password}
            placeholder='Enter Password'
          />
        </div>

        {/* <div className='form-group'>
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
            readonly
            value={'EMPLOYEE'}
          />
        </div> */}
        <div>
          <button type='button' className='btn btn-primary' onClick={register}>
            Save Or Update
          </button>
        </div>
      </form>
      <hr />
      
    </div>
  );
};

export default AddUser;
