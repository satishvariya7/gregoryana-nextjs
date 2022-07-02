import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import { deliveryCar, logo } from "../../assets/images";
import styles from "./SignUpView.module.scss";

const SignUpView = () => {
  return (
    <Container fluid>
      <div className='row box-height'>
        <div className='col-md-6 p-0 img-main'>
          <Image
            src={deliveryCar}
            alt='car delivery'
            className='img-fluid img-alignment'
          />
        </div>
        <div className='col-md-6 p-0'>
          <div className='box-set'>
            <div className='upper-text font-weight-bold'>
              <p>
                New to Gregoryana?{" "}
                <a href='#' className='link-color'>
                  Book a Demo.
                </a>
              </p>
            </div>
            <div className='signup-box'>
              <Image src={logo} alt='site logo' />
              <div className='mt-4 mb-2'>
                <h3 className='title mb-2'>Create Account</h3>
                <p className='text-center'>
                  Welcome, Please Enter Your Detail!
                </p>
              </div>
              <div className='mailbox mb-3'>
                <p className='mb-2 font-weight-bold'>Email</p>
                <input
                  type='text'
                  placeholder='Enter Email'
                  className='w-100 mailbox-height'
                />
              </div>
              <div className='mailbox'>
                <p className='mb-2'>Password</p>
                <input
                  type='text'
                  placeholder='Enter Password'
                  className='w-100 mailbox-height'
                />
              </div>
              <div className='my-3 btn-box'>
                <input type='button' value='Submit' className='mailbtn' />
              </div>
              <p className='text-center policy-text'>
                By using Gregoryana's website, you accept our Terms and Privacy.
              </p>
              <div>
                <span className='login-text'>
                  Already have an account?{" "}
                  <a href='#' className='login-link'>
                    Login
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignUpView;
