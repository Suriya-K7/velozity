const Button = ({ text, className, ...props }) => {
    return (
        <button className={`py-4 cursor-pointer hover:shadow-md duration-200 text-white bg-[#282021] w-full rounded-xl text-lg tracking-wide font-bold ${className}`} {...props}>{text}</button>
    );
};

export default Button;