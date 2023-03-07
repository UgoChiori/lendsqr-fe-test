import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./form.scss";

interface props {}

const LoginForm: React.FC<props> = () => {
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false);
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = (data: any) => {
    if (data) {
      setLoading(true);

      setTimeout(() => {
        reset();
        navigate("/dashboard");
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <section className="">
      <div className="header">
        <h1 className="header-welcome">Welcome!</h1>
        <p className="details">Enter details to login</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="inputfield"
            id="rectangle"
            {...register("email", { required: true })}
          />
          {errors.email && errors.email.type === "required" && (
            <span role="alert" className="error">Email is required</span>
          )}
        </div>
        <div>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="inputfield"
            {...register("password", { required: true })}
          />
          <p
            className="show-password"
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"}
          </p>
        </div>
        {errors.password && errors.password.type === "required" && (
          <span role="alert" className="error">Password is required</span>
        )}

        <a href="g" className="forgot-password">
          Forgot Password?
        </a>
        <button type="submit" className="login-btn">
          {loading ? "Loading..." : ""}
          Log in
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
