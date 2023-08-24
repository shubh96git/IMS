import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../css/SignUp.css";

function SignUp() {
  return (
    <div className="center">
      <form className="form">
        <p className="title">Register </p>
        <div className="flex">
          <label>
            <input required placeholder type="text" className="input" />
            <span>Firstname</span>
          </label>
          <label>
            <input required placeholder type="text" className="input" />
            <span>Lastname</span>
          </label>
        </div>
        <label>
          <input required placeholder type="number" className="input" />
          <span>Mobile</span>
        </label>
        <label>
          <input required placeholder type="email" className="input" />
          <span>Email</span>
        </label>
        <label>
          <input required placeholder type="password" className="input" />
          <span>Password</span>
        </label>
        <label>
          <input required placeholder type="password" className="input" />
          <span>Confirm password</span>
        </label>
        <button className="submit">Submit</button>
        <p className="signin">
          Already have an acount ? <a href="#">Signin</a>{" "}
        </p>
      </form>
    </div>
  );
}

export default SignUp;
