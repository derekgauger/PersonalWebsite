import React from 'react';
import "./PageTitle.css";

interface PageTitleProps {
    title: string;
    project?: any;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, project }) => {
    return (
        <>
            <div className="page-title">
                {title}
                {project && (
                    <div className='title-links'>
                        {project.githubLink && (
                            <button className="title-link-button" onClick={() => window.open(project.githubLink, '_blank')} rel="noreferrer">Github</button>
                        )}
                        {project.accessLink && (
                            <button className="title-link-button" onClick={() => window.open(project.accessLink, '_blank')} rel="noreferrer">Access Project</button>
                        )}
                        {project.termsOfServiceLink && (
                            <button className="title-link-button" onClick={() => window.open(project.termsOfServiceLink, '_blank')} rel="noreferrer">Terms of Service</button>
                        )}
                        {project.privacyPolicyLink && (
                            <button className="title-link-button" onClick={() => window.open(project.privacyPolicyLink, '_blank')} rel="noreferrer">Privacy Policy</button>
                        )}
                    </div>
                )}
            </div>
        </>
    )
};

export default PageTitle;