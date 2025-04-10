import React from 'react';
import { Button, CompanyLogo } from "../components";
import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Mail from "../assets/Vector.svg";

const ResetPasswordPage = () => {
    return (
        <AuthLayout>
            <div className=" h-full px-20 flex-1">
                <CompanyLogo />
                <div className="flex flex-col gap-6 mt-20">
                    <div className="flex flex-col gap-6 items-center justify-center">
                        <img src={Mail} alt="mail image" />
                        <div className="font-semibold tracking-wide text-3xl">
                            Reset Link
                        </div>
                    </div>
                    <p className="text-gray-600 text-center">
                        Your password reset link has been sent to you email. Please click the link and redirect to the new password set up page
                    </p>
                    <Link to={"/new-password"}>
                        <Button text={"Done"} />
                    </Link>
                </div>
            </div>
        </AuthLayout>
    );
};

export default ResetPasswordPage;