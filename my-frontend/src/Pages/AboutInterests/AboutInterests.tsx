import React from 'react';
import "./AboutInterests.css"
import PageTitle from '../../Components/PageTitle/PageTitle';

interface AboutInterests {
    // Add any props you need for the component here
}

const AboutInterests: React.FC<AboutInterests> = () => {
    return (
        <div>
            <PageTitle
                title="Interests"
            />
        </div>
    );
};

export default AboutInterests;