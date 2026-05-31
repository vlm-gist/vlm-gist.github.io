import React from "react";
import { useTextColors } from './ColorContext';

const Abstract: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { textColor } = useTextColors();
    return (
        <div className="flex justify-left text-4xl font-semibold mt-12 mb-6" style={{color: textColor}}>
            {children}
        </div>
    );
};

export default Abstract;
