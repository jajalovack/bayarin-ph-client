import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import http from "../../lib/http";

const Register = () => {
  const navigate = useNavigate();
  const api = http();
  const [showAlert, setShowAlert] = useState(false);

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("default.jpg");
  const [birthdate, setBirthDate] = useState(null);
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState({});

  async function register(e) {
    e.preventDefault();
    try {
      const body = {
        first_name,
        last_name,
        email,
        profilePic,
        birthdate,
        password,
        password_confirmation,
      };

      const response = await api.post("/register", body);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      window.dispatchEvent(new Event("authenticated"));
      navigate("/");
      //  copy comment below
    } catch (e) {
      setErrors(e.response.data.errors);
      console.log(e);
    }
  }
  //  if (response.data && response.data.errors) {
  //    setErrors(response.data.errors);
  //  } else {
  //    setErrors({});
  //    console.log(response);

  //    navigate("/");
  //  }

  return (
    <div className="mt-3 md:padding h-screen mb-[20rem] md:mb-[30rem] lg:mb-[20rem]">
      {/* {showAlert && (
        <div className="alert alert-warning">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>Warning: Wrong credentials!</span>
        </div>
      )} */}
      <div className="hero min-h-screen md:bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left md:w-[30rem] md:ml-10">
            <h1 className="text-5xl font-bold">Register Now!</h1>
            <p className="py-6">
              Create an account and start enjoying cashless transactions! Now
              available for all networks.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={register}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="name"
                  placeholder="first name"
                  className="input input-bordered"
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="name"
                  placeholder="last name"
                  className="input input-bordered"
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Pick a File</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                  onChange={(e) => setProfilePic(e.target.files[e])}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <label className="label-text">Birthday</label>
                </label>
                <input
                  type="date"
                  className="file-input file-input-bordered w-full max-w-xs"
                  onChange={(e) => setBirthDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                  value={password_confirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
                <span>
                  Already Have an Account?
                  <button className="btn btn-link">
                    <Link to="/login">Login</Link>
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
