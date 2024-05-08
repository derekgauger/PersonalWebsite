import React, { useEffect, useState } from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import ExperienceSection from '../../Components/ExperienceSection/ExperienceSection';
import { getEducation } from '../../Functions/API';
import LoadingIcon from '../../Components/LoadingIcon/LoadingIcon';

const AboutEducation: React.FC = () => {

    const [education, setEducation] = useState<any>();
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await getEducation();
            setEducation(data);
            console.log(data); // Log the fetched data
        };
        fetchData();
    }, []);

    return (
        <div>
            <PageTitle
                title="Education"
            />
            <div className='page-content'>
                {education ? (
                    <ExperienceSection 
                        experiences={education}
                    />
                ) : (
                    <LoadingIcon size={80}/>
                )}
            </div>
        </div>
    );
};

export default AboutEducation;