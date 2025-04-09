import React from 'react';
import { RightBanner } from "../components";

const AuthLayout = ({ children }) => {
    return (
        <div className="min-h-screen min-w-screen">
            <div className="flex justify-between items-center min-h-screen">
                {children}
                <RightBanner />
            </div>
        </div>
    );
};

export default AuthLayout;