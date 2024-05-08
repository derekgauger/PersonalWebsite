import React from 'react';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import "./ExperienceSection.css"
import convertTechnologiesUsed from '../../Functions/ConvertTechnologiesUsed';

interface ExperienceSectionProps {
    title?: string;
    experiences: any;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ title, experiences }) => {
    console.log(experiences[0].technologiesUsed)
    return (
        <div className='experience-section-container'>
            <h1>{title}</h1>
            {experiences.map((experience: { title: string; company?: string; location: string, dateRange: string; description: string; technologiesUsed: string; }, index: number) => {
                return <ExperienceCard 
                    key={index}
                    experience={experience}
                    
                />
            })}
        </div>
    );
};

export default ExperienceSection;