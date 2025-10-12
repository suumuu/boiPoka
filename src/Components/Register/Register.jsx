import React from 'react';

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();

        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log('register clicked', email , password)
    }
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">Register now to access your account and enjoy our exclusive features!</p>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;