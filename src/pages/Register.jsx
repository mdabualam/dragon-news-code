import React from 'react';
import { Link } from 'react-router';

const Register = () => {

    const handleRegister = (e)=> {
        e.preventDefault();
        console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({name, photo, email, password});
    };

    return (
         <div className="flex justify-center min-h-screen items-center">
      <div className="
      card bg-base-100 w-full max-w-sm shrink-0 shadow-2x py-5">
        <h2 className="text-2xl font-semibold text-center">Register your account</h2>

        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">

            <label className="label">Name</label>
            <input type="text" name="name" className="input" placeholder="Name" required />

            <label className="label">Photo URL</label>
            <input type="text" name="photo" className="input" placeholder="Photo URL" required />

            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" required/>

            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" required/>

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button type='submit' className="btn btn-neutral mt-4">Register</button>

            <p className="font-semibold  text-center mt-3">Already Have An Account ? <Link to="/auth/login" className="text-secondary">Login</Link></p>

          </fieldset>
        </form>
      </div>
    </div>
    );
};

export default Register;