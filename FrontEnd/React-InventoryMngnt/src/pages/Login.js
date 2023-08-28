import "../css/Login.css";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"

function Login() {

    let [icreds, setICreds] = useState({email : "", password : ""});
    let [user, setUser] = useState({});

    const navigate = useNavigate();

    const signIn = () => {
        console.log("in signin")
        axios.post("http://127.0.0.1:8080/auth/signin", icreds)
             .then(res => {
               setUser(res.data);
               console.log(res.data)
               console.log("Logged in successfully");
               sessionStorage.setItem("userId", res.data.userId);
               sessionStorage.setItem("jwt",res.data.jwt)
               
               if(res.data.role === "ADMIN")
               navigate('/allEmployees')
               else if(res.data.role === "EMPLOYEE")
               navigate('/shop')

             }).catch(error => {
                if (error.response && error.response.status === 404) {
                  console.log("Invalid credentials")
                } else {
                  setUser('An error occurred');
                }
                setUser(null);
              });  
    }


    const onInputChange = (event) => {
        let copyOfICreds = { ...icreds }
        copyOfICreds[event.target.name] = event.target.value;
        setICreds(copyOfICreds);
    }


  //
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <form className="col-md-6 col-lg-4 p-4 bg-light rounded shadow">
            <h3 className="text-center mb-4">Login</h3>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    required
                    name="email"
                    value={icreds.email}
                    onChange={onInputChange}
                    type="email"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    required
                    name="password"
                    value={icreds.password}
                    onChange={onInputChange}
                    type="password"
                    className="form-control"
                />
            </div>
            <button
                type="button"
                onClick={signIn}
                className="btn btn-primary w-100"
            >
                Submit
            </button>
            <hr className="my-4" />
            <button
                className="btn btn-secondary w-100"
                onClick={() => navigate('/addUser')}
            >
                Become an Employee
            </button>
        </form>
    </div>
);
  // return (
  //   <div className="center">
  //     <form className="form" action="" method="POST" role="form">
  //       <p className="title">Login</p>
  //       <label>
  //         <input required name="email" value={icreds.email} onChange={onInputChange} type="email" className="input" />
  //         <span>Email</span>
  //       </label>
  //       <label>
  //         <input required name="password" value={icreds.password} onChange={onInputChange} type="password" className="input" />
  //         <span>Password</span>
  //       </label>
  //       <button type="button" onClick={signIn} className="btn btn-primary">Submit</button>
        
  //       <br></br><br></br><hr/>
        
  //     </form>
  //     <button className="btn btn-primary seller" onClick={()=>{navigate('/addUser')}}>Become a Employee</button>

  //   </div>
  // );
}

export default Login;