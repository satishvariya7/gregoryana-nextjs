import Image from "next/image";
import React from "react";
import { deliveryCar, logo } from "../../assets/images";
import styles from "./LoginView.module.scss";

const LoginView = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <Image src={deliveryCar} alt="car delivery" className="img-fluid" />
      </div>
      <div className="col-md-6">
        <div>
          <p>
            New to Gregoryana? <a>Book a Demo.</a>
          </p>
        </div>
        <Image src={logo} alt="site logo" />
        <div>
          <h3>Log In</h3>
          <p>Welcome Back, Please Enter Your Detail!</p>
        </div>
        <div>
          <p>Email</p>
          <input type="text" placeholder="Enter Email" />
        </div>
        <div>
          <p>Password</p>
          <input type="text" placeholder="Enter Password" />
        </div>
        <p>Forgot Password?</p>
        <div>
          <input type="button" value="Submit" />
        </div>
        <p>By using Gregoryana's website, you accept our Terms and Privacy.</p>
        <div>
          <span>
            Don’t Have An Account? <a>Register</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
