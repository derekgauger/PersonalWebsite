import React from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import "./ProjectDetails.css"
import convertTechnologiesUsed from '../../Functions/ConvertTechnologiesUsed';
interface ProjectDetailsProps {
    project: any;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
    const technologyStrings = JSON.parse(project.technologiesUsed)
    const technologyImages = convertTechnologiesUsed(project.technologiesUsed)
    return (
        <div>
            <PageTitle 
                title={project.title + " - " + project.projectType}
                project={project}
                />
            <div className='page-content'>
                <div className='project-section-title'>Description</div>
                <div className='project-section'>{project.description}</div>
                <div className='project-section-title'>How it works</div>
                <div className='project-section'>{project.processDescription}</div>
                <div className='tech-used'>
                    {technologyImages.map((tech : string, index : number) => {
                        return (
                            <div>
                                <div className='tech-text'>{technologyStrings[index]}</div>
                                <img className='tech' src={tech} key={index}/>
                            </div>
                    )})}
                </div>
                {project.images && (
                    <div>
                        <div className='project-section-title'>Images</div>
                        {project.images.map((image: any, index: number) => (
                            <img className="images" key={index} src={image}></img>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectDetails;