import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../css/SignUp.css";

function SignUp() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="card p-4 shadow-sm">
            <h2 className="title text-center mb-4">Register</h2>
            <div className="mb-3">
              <input required placeholder="Firstname" type="text" className="form-control input" />
            </div>
            <div className="mb-3">
              <input required placeholder="Lastname" type="text" className="form-control input" />
            </div>
            <div className="mb-3">
              <input required placeholder="Mobile" type="number" className="form-control input" />
            </div>
            <div className="mb-3">
              <input required placeholder="Email" type="email" className="form-control input" />
            </div>
            <div className="mb-3">
              <input required placeholder="Password" type="password" className="form-control input" />
            </div>
            <div className="mb-3">
              <input required placeholder="Confirm password" type="password" className="form-control input" />
            </div>
            <button className="btn btn-primary btn-block submit">Submit</button>
            <p className="text-center mt-3">
              Already have an account? <a href="#">Sign in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="center">
  //     <form className="form">
  //       <p className="title">Register </p>
  //       <div className="flex">
  //         <label>
  //           <input required placeholder type="text" className="input" />
  //           <span>Firstname</span>
  //         </label>
  //         <label>
  //           <input required placeholder type="text" className="input" />
  //           <span>Lastname</span>
  //         </label>
  //       </div>
  //       <label>
  //         <input required placeholder type="number" className="input" />
  //         <span>Mobile</span>
  //       </label>
  //       <label>
  //         <input required placeholder type="email" className="input" />
  //         <span>Email</span>
  //       </label>
  //       <label>
  //         <input required placeholder type="password" className="input" />
  //         <span>Password</span>
  //       </label>
  //       <label>
  //         <input required placeholder type="password" className="input" />
  //         <span>Confirm password</span>
  //       </label>
  //       <button className="submit">Submit</button>
  //       <p className="signin">
  //         Already have an acount ? <a href="#">Signin</a>{" "}
  //       </p>
  //     </form>
  //   </div>
  // );
}

export default SignUp;
