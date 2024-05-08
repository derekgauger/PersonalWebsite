import React from 'react';
import "./ExperienceCard.css"
import convertTechnologiesUsed from '../../Functions/ConvertTechnologiesUsed';

interface ExperienceCardProps {
    experience: any;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {

    const technologyStrings = JSON.parse(experience.technologiesUsed)
    const technologyImages = convertTechnologiesUsed(experience.technologiesUsed)
    return (
        <div>
            <div className='experience-card-content'>
                <div className='title'>{experience.title}</div>
                <div className='company'>{experience.company}</div>
                <div className='company'>{experience.location}</div>
                <div className='date-range'>{experience.dateRange}</div>
                <div className='description'>{experience.description}</div>
                <div className='tech-used-title'>Technologies Used:</div>
                <div className='tech-used'>
                    {technologyImages.map((tech : string, index : number) => {
                        return (
                            <div>
                                <div className='tech-text'>{technologyStrings[index]}</div>
                                <img className='tech' src={tech} key={index}/>
                            </div>
                    )})}
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;