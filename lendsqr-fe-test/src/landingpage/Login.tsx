import React from "react";
import Union from "../assets/Union.jpg";
import lendsqr from "../assets/lendsqr.png";
import pablo from "../assets/pablosignin.jpg";
// import Rectangle from "../assets/Rectangle.png"
import "./login.scss";
import LoginForm from "../landingpage/LoginForm";

function Login() {
  return (
    <div>
      {/* <img className="rectangle" src={Rectangle} alt="background color"/> */}
      <img className="union" src={Union} alt="logo" />
      <img className="lendsqr" src={lendsqr} alt="company name" />
      <img className="pablo" src={pablo} alt="company pictures" />
      <LoginForm />
    </div>
  
    
   
  );
}

export default Login;
