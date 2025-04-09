import React from 'react';
import { Button, CompanyLogo, InputField } from "../components";
import AuthLayout from "../layouts/AuthLayout";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
    return (
        <AuthLayout>
            <div className=" h-full px-20 flex-1">
                <CompanyLogo />
                <div className="flex flex-col gap-5 mt-20">
                    <div className="font-semibold tracking-wide text-3xl">
                        Forgot Password
                    </div>
                    <p className="text-gray-400">
                        Enter your email for the verification process, we will send reset link to your mail.
                    </p>
                    <div className="flex flex-col gap-6">
                        <InputField label={"E-mail"} placeholder={"example@gmail.com"} />
                    </div>
                    <Link to="/reset-link">
                        <Button text={"Continue"} />
                    </Link>
                </div>

            </div>
        </AuthLayout>
    );
};

export default ForgotPasswordPage;