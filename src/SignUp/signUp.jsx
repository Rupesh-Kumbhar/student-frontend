import React from "react";

function SignUp(){

    return (
        <div className="col-sm-12 dark-bg">
            <h1 className="text-center pt-5">SignUp</h1>
            <div className="col-sm-12 d-flex justify-content-center">
                <div className="col-sm-6 p-0 ">

                    <div className="col-sm-12">
                        <p>Username</p>
                        <input className="w-100" type="email" name="" id="" />
                    </div>

                    <div className="col-sm-12 mt-4">
                        <p>Password</p>
                        <input  className="w-100" type="password" name="" id="" />
                    </div>

                    <div className="col-sm-12 mt-4">
                        <p>Confirm Password</p>
                        <input  className="w-100" type="password" name="" id="" />
                    </div>

                    <div className="col-sm-12 mt-4 text-center">
                        <button type="button" class="btn btn-secondary w-50">Sign Up</button>
                    </div>

                    <div className="col-sm-12 mt-4 text-center">
                        <p> <a href="/">Already have account ?  Login Up</a> </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SignUp;