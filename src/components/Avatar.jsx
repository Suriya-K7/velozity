import React from 'react';

const Avatar = ({ className, notification, children }) => {
    return (
        <div className={`rounded-full w-14 h-14 ring-[#EEF1F6] ring-1 grid place-items-center relative ${className}`}>{children}
            {notification && <div className="size-2.5 bg-[#FF6471] absolute rounded-full top-0.5 right-0.5"></div>}
        </div>
    );
};

export default Avatar;