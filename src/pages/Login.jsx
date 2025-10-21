import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="
      card bg-base-100 w-full max-w-sm shrink-0 shadow-2x py-5">
        <h2 className="text-2xl font-semibold text-center">Login your account</h2>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="font-semibold  text-center mt-3">Dont’t Have An Account ? <Link to="/auth/register" className="text-secondary">Register</Link></p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
