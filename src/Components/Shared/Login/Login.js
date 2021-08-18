import React from "react";
import { useForm } from "react-hook-form";
import loginbg from "../../../images/loginbg.png";
import "./Login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <main>
      <div className="row w-100">
        <div className="d-flex  align-items-center">
          <div className="col-md-5 ms-5 ps-5 mb-5 pb-5 shadow shadow-md bg-rounded pb-3 loginForm">
            <h2 className="text-center">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="p-3" action="">
              <input
                className="form-control customInput pb-3"
                type="text"
                placeholder="User Name"
                {...register("User Name", { required: true, maxLength: 100 })}
              />

              <br />
              <input
                className="form-control customInput pb-3 mb-3"
                type="text"
                placeholder="Password "
                {...register("Pssword", { required: true, maxLength: 100 })}
              />
              <a className="text-danger mb-4" href="/">
                Forgot Your Password ?
              </a>
              <br />
              <input
                className=" btn text-white customBtn mt-5"
                type="submit"
                value="SignIn"
              />
            </form>
          </div>
          <div className="col-md-5 pt-5 pb-5 ms-5 ps-5 imageDiv">
            <img className="fluid w-100" src={loginbg} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
