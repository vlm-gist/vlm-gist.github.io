import React from "react";
import { useTextColors } from "./ColorContext";

interface SubHeadingProps {
    children: React.ReactNode;
    className?: string;
}

// Subordinate heading used for the points within a section (e.g. the
// carousels and videos under "Robot Visual System"). One size smaller than
// the section-level <Heading> (text-4xl) so the hierarchy reads clearly.
const SubHeading: React.FC<SubHeadingProps> = ({ children, className = "" }) => {
    const { textColor } = useTextColors();

    return (
        <div className={`text-2xl ${className}`} style={{ color: textColor }}>
            {children}
        </div>
    );
};

export default SubHeading;
