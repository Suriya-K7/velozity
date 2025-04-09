import { Link } from "react-router-dom";
import { Button, CompanyLogo, InputField } from "../components";
import AuthLayout from "../layouts/AuthLayout";

const NewPasswordPage = () => {
    return (
        <AuthLayout>
            <div className=" h-full px-20 flex-1">
                <CompanyLogo />
                <div className="flex flex-col gap-4 mt-20">
                    <div className="font-semibold tracking-wide text-3xl">
                        New Password
                    </div>
                    <p className="text-gray-500 font-extralight">
                        Set the new password for your account
                    </p>
                    <div className="flex flex-col gap-6">
                        <InputField className={"placeholder:text-gray-300"} label={"Enter New Password"} placeholder={"enter new password"} type={"password"} />
                        <InputField className={"placeholder:text-gray-300"} label={"Confirm New Password"} placeholder={"confirm new password"} type={"password"} />
                    </div>
                    <Link to={"/password-success"} className="mt-4">
                        <Button text={"Confirm"} />
                    </Link>
                </div>
            </div>
        </AuthLayout>
    );
};

export default NewPasswordPage;