import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className=" md:padding h-screen mb-[25rem]">
      <div className="hero min-h-screen md:bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left md:w-[30rem] md:ml-10">
            <h1 className="text-5xl font-bold">Register</h1>
            <p className="py-6">
              Create an account and start enjoying cashless transactions! Now
              available for all networks.
            </p>
            <button className="btn btn-link">
              <Link to="/login">Already Have an Account? Login Now!</Link>
            </button>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="name"
                  placeholder="first name"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="name"
                  placeholder="last name"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <label className="label">
                <span className="label-text">Pick a File</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
