import React from 'react';
import RightImage from "../assets/right.jpg";

const RightBanner = () => {
    return (
        <div className="bg-amber-400 min-h-screen flex-1 hidden lg:block">
            <img src={RightImage} alt="right side image" className="object-cover h-screen w-full" />
        </div>
    );
};

export default RightBanner;