import { Link } from "react-router-dom";
import { Button, CompanyLogo, InputField } from "../components";
import AuthLayout from "../layouts/AuthLayout";

const SignInPage = () => {
    return (
        <AuthLayout>
            <div className=" h-full px-20 flex-1">
                <CompanyLogo />
                <div className="flex flex-col gap-12 mt-20">
                    <div className=" tracking-wide text-3xl">
                        Buisness Partner Login
                    </div>
                    <div className="flex flex-col gap-6">
                        <InputField label={"E-mail"} placeholder={"example@gmail.com"} />
                        <InputField label={"E-mail"} placeholder={"Enter Your Password"} type={"password"} />
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="scale-105" />
                            <label htmlFor="checkbox" className="font-light text-sm text-gray-500">Remember Me</label>
                        </div>
                        <Link to={"/forgot-password"} className="font-light capitalize underline text-sm text-gray-700">
                            forgot passowrd
                        </Link>
                    </div>
                    <Link to={"/dashboard"}>
                        <Button text={"Sign In"} />
                    </Link>
                </div>
            </div>
        </AuthLayout>
    );
};

export default SignInPage;