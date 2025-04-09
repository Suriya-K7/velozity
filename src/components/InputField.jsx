import { useState } from "react";
import { EyeCloseIcon, EyeIcon } from "../assets/icons";

const EYE_CLASS_NAME = "absolute cursor-pointer bottom-2.5 right-2.5 text-gray-400";

const InputField = ({ label, type, placeholder, className, ...props }) => {

    const [toggleEye, setToggleEye] = useState(false);

    const handleToggleEye = () => {
        setToggleEye(!toggleEye);
    };

    const EyeComponent = () => {
        return toggleEye ? <EyeIcon onClick={handleToggleEye} className={EYE_CLASS_NAME} /> : <EyeCloseIcon onClick={handleToggleEye} className={EYE_CLASS_NAME} />;
    };

    return (
        <div className="flex flex-col gap-2.5 relative">
            <label htmlFor={label} className="text-gray-500">{label}</label>
            <input type={toggleEye ? "text" : type} placeholder={placeholder} className={`px-3 py-2.5 ring-1 ring-gray-400 bg-gray-100 rounded-lg duration-200 hover:shadow-xl focus:shadow-xl ${className}`} {...props} autoComplete="off" />
            {type === "password" &&
                <EyeComponent />
            }
        </div>
    );
};

export default InputField;