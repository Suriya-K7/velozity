import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import { Button, CompanyLogo } from "../components";
import Simplification from "../assets/Simplification.svg";

const PasswordSuccess = () => {
    return (
        <AuthLayout>
            <div className=" h-full px-20 flex-1">
                <CompanyLogo />
                <div className="flex flex-col gap-6 mt-20">
                    <div className="flex flex-col gap-6 items-center justify-center">
                        <img src={Simplification} alt="mail image" />
                        <div className="font-semibold tracking-wide text-3xl">
                            Changed successfully
                        </div>
                    </div>
                    <p className="text-gray-600 text-center">
                        Your password has been changed successfully please login with new password to access your account
                    </p>
                    <Link to={"/"}>
                        <Button text={"Take me to Login"} />
                    </Link>
                </div>
            </div>
        </AuthLayout>
    );
};

export default PasswordSuccess;