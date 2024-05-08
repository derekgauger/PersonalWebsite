import React from "react";
import convertTechnologiesUsed from "../../Functions/ConvertTechnologiesUsed";
import "./ProjectCard.css"
import { useNavigate } from "react-router";
import Tag from "../Tag/Tag";

interface ProjectCardProps {
    projectInfo: any;
    stats?: any[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectInfo, stats }) => {
    const navigate = useNavigate();

    const handleProjectClick = () => {
        navigate("/" + projectInfo.title.replaceAll(" ", "-").toLowerCase())
    }

    const handleLinkClick = (event: React.MouseEvent, link: string) => {
        event.stopPropagation();
        window.open(link, '_blank')
    }
    const technologyStrings = JSON.parse(projectInfo.technologiesUsed)
    const technologyImages = convertTechnologiesUsed(projectInfo.technologiesUsed)
    return (
        <div onClick={handleProjectClick} className='project-card-content'>
            <div  className='title'>
                {projectInfo.title} - {projectInfo.projectType}
                <div className='links'>
                    {projectInfo.githubLink && (
                        <button className="link-button" onClick={(event: any) => handleLinkClick(event, projectInfo.githubLink)} rel="noreferrer">Github</button>
                    )}
                    {projectInfo.accessLink && (
                        <button className="link-button" onClick={(event: any) => handleLinkClick(event, projectInfo.accessLink)} rel="noreferrer">Access Project</button>
                    )}
                    {projectInfo.termsOfServiceLink && (
                        <button className="link-button" onClick={(event: any) => handleLinkClick(event, projectInfo.termsOfServiceLink)} rel="noreferrer">Terms of Service</button>
                    )}
                    {projectInfo.privacyPolicyLink && (
                        <button className="link-button" onClick={(event: any) => handleLinkClick(event, projectInfo.privacyPolicyLink)} rel="noreferrer">Privacy Policy</button>
                    )}
                </div>
            </div>
            <div className='description'>{projectInfo.description}</div>
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
            {/* {stats && projectInfo.statistics && (
                <div className='statistics'>
                    {projectInfo.statistics.map((stat : any, index : number) => {
                        return <div key={index}>{stat} : {stats[index]}</div>
                    })}
                </div>
            )} */}
            <div className="tags">
                Tags: 
                {technologyStrings.map((tech : string, index : number) => {
                    return <Tag text={tech}/>
                })}
            </div>
        </div>
    );
};

export default ProjectCard;