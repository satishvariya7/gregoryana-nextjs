import Image from "next/image";
import React from "react";
import { deliveryCar } from "../../assets/images";
import styles from "./LoginView.module.scss";

const LoginView = () => {
  return (
    <div className="col-md-12">
      <div className="col-md-6">
        <Image src={deliveryCar} alt="car delivery" className="img-fluid" />
      </div>
      <div className="col-md-6">
        
      </div>
    </div>
  );
};

export default LoginView;
