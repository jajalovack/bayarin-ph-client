import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import http from "../../lib/http";

const Login = () => {
  const navigate = useNavigate();
  const api = http();
  const [showAlert, setShowAlert] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  async function submit(e) {
    e.preventDefault();
    try {
      const body = {
        email,
        password,
      };

      const response = await api.post("/login", body);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      window.dispatchEvent(new Event("authenticated"));
      navigate("/");
    } catch (e) {
      setError(e.response.data.errors);
      setShowAlert(true);
    }
  }

  return (
    <div className="mt-3 md:padding h-screen mb-[15rem]">
      {showAlert && (
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
      )}
      <div className="hero min-h-screen md:bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left md:w-[30rem] md:ml-10">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Experience a fast and easy transactions with Bayarin PH
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={submit} className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <span>
                  Don't have an Account?
                  <button className="btn btn-link">
                    <Link to="/register">Register</Link>
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

export default Login;
