import React, { useEffect, useState } from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import ExperienceSection from '../../Components/ExperienceSection/ExperienceSection';
import { getWorkExperience } from '../../Functions/API';
import LoadingIcon from '../../Components/LoadingIcon/LoadingIcon';

const AboutWorkExperience: React.FC = () => {

    const [workExperience, setWorkExperience] = useState<any>();
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await getWorkExperience();
            setWorkExperience(data);
            console.log(data); // Log the fetched data
        };
        fetchData();
    }, []);


    return (
        <div>
            <PageTitle
                title="Work Experience"
            />
            <div className='page-content'>
                {workExperience ? (
                    <ExperienceSection 
                        experiences={workExperience}
                    />
                ) : (
                    <LoadingIcon size={80}/>
                )}
            </div>
        </div>
    );
};

export default AboutWorkExperience;