import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import PageTitle from '../../Components/PageTitle/PageTitle';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import { getProjects } from '../../Functions/API';
import "./Projects.css"

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<any[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
    const [tags, setTags] = useState<any[]>([]);
    const [selectedTags, setSelectedTags] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProjects();
            let allTags : any = [];
            data.forEach((project: any) => {
                const currentTags = JSON.parse(project.technologiesUsed);
                currentTags.forEach((tag: string) => {
                    if (!allTags.some((t: any) => t.value === tag)) {
                        allTags.push({ value: tag, label: tag });
                    }
                });
            });
            setProjects(data);
            setTags(allTags.sort((a: any, b: any) => a.value.localeCompare(b.value)));
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (projects.length > 0 && selectedTags.length > 0) {
            const filtered = projects.filter(project =>
                selectedTags.every(tag => JSON.parse(project.technologiesUsed).includes(tag.value))
            );
            setFilteredProjects(filtered);
        } else {
            setFilteredProjects(projects);
        }
    }, [projects, selectedTags]);

    return (
        <>
            <PageTitle title="Projects" />
            <div className='page-content'>
                <Select
                    isMulti
                    options={tags}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    placeholder="Search Tags"
                    onChange={(newValue: any) => setSelectedTags(newValue)}
                    value={selectedTags}
                />
                {filteredProjects.map((project: any, index: number) => {
                    return <ProjectCard
                        projectInfo={project}
                        key={index}
                    />
                })}
            </div>
        </>
    );
};

export default Projects;
