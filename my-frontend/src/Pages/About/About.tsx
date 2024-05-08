import React, { useEffect, useState } from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import "./About.css"
import ExperienceSection from '../../Components/ExperienceSection/ExperienceSection';
import { getEducation, getWorkExperience } from '../../Functions/API';
import LoadingIcon from '../../Components/LoadingIcon/LoadingIcon';

const About: React.FC = () => {

    const [workExperience, setWorkExperience] = useState();
    const [education, setEducation] = useState();
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await getWorkExperience();
            setWorkExperience(data);
            console.log(data); // Log the fetched data
        };
        fetchData();
    }, []);

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
                title="About"
            />
            <div className='page-content'>
                {workExperience && education ? (
                    <>
                        <ExperienceSection 
                            title={'Work Experience'} 
                            experiences={workExperience}
                        />
                        <ExperienceSection 
                            title={'Education'} 
                            experiences={education}
                        />
                    </>
                ) : (
                    <LoadingIcon size={80}/>
                )}
            </div>
        </div>
    );
};

export default About;