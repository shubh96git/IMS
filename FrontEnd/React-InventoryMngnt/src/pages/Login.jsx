import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../css/Login.css";

function Login() {
  return (
    <div className="center">
      <form className="form">
        <p className="title">Login</p>
        <label>
          <input required placeholder type="email" className="input" />
          <span>Email</span>
        </label>
        <label>
          <input required placeholder type="password" className="input" />
          <span>Password</span>
        </label>
        <button className="submit">Submit</button>
        <p className="signup">
          Create an account ? <a href="#">SignUp</a>{" "}
        </p>
        <br></br><br></br>
      </form>
    </div>
  );
}

export default Login;
