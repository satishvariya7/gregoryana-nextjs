import Image from "next/image";
import React from "react";
import { deliveryCar, logo } from "../../assets/images";
import styles from "./SignUpView.module.scss";

const SignUpView = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <Image src={deliveryCar} alt="car delivery" className="img-fluid" />
      </div>
      <div className="col-md-6">
        <div>
          <p>
            New to Gregoryana? <a href="#">Book a Demo.</a>
          </p>
        </div>
        <Image src={logo} alt="site logo" />
        <div>
          <h3>Create Account</h3>
          <p>Welcome, Please Enter Your Detail!</p>
        </div>
        <div>
          <p>Email</p>
          <input type="text" placeholder="Enter Email" />
        </div>
        <div>
          <p>Password</p>
          <input type="text" placeholder="Enter Password" />
        </div>
        <div>
          <input type="button" value="Submit" />
        </div>
        <p>By using Gregoryana's website, you accept our Terms and Privacy.</p>
        <div>
          <span>
            Already have an account? <a href="#">Login</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUpView;
