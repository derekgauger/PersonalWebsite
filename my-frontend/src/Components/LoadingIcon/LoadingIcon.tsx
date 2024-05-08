import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import "./LoadingIcon.css"

interface LoadingIconsProps {
    size: number;
}

const LoadingIcon: React.FC<LoadingIconsProps> = ({ size }) => {
    return (
        <div className="loading-icon-container">
            <div className="loading-icon">
                <CircularProgress size={size} />
            </div>
        </div>
    );
};

export default LoadingIcon;