import { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import profilePicture from './Images/profilePicture.jpg'
import sidebarInfo from './Constants/SidebarInfo'
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AboutWorkExperience from './Pages/AboutWorkExperience/AboutWorkExperience';
import AboutEducation from './Pages/AboutEducation/AboutEducation';
import Contact from './Pages/Contact/Contact';
import { getProjects } from './Functions/API';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import projectImages from './Constants/Projects'
import { useTheme } from './Providers/ThemeProvider';
import { useMediaQuery } from 'react-responsive'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const App = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<any>();
  const [sidebarReady, setSidebarReady] = useState<boolean>(false);
  const { theme } = useTheme();
  const [showHiddenSidebar, setShowHiddenSidebar] = useState<boolean>(false);
  const hiddenSidebar = useMediaQuery({query: '(max-width: 850px)'})
  const [currentPageLink, setCurrentPageLink] = useState<string>("/");


  const addClass = (searchClass : string, addClass : string) => {
    const elements = document.getElementsByClassName(searchClass)
      if (elements.length > 0) {
        Array.from(elements).forEach((element: any) => {
          element?.classList.add(addClass)
        }
      );
    }
  }

  const removeClass = (searchClass : string, removeClass : string) => {
    const elements = document.getElementsByClassName(searchClass)
      if (elements.length > 0) {
        Array.from(elements).forEach((element: any) => {
          element?.classList.remove(removeClass)
        }    
      );
    }
  }

  useEffect(() => {
    if (hiddenSidebar) {
      addClass("page-title", "hidden-sidebar")
      addClass("page-content", "hidden-sidebar")  
    } else {
      removeClass("page-title", "hidden-sidebar")
      removeClass("page-content", "hidden-sidebar")
    }
  }, [hiddenSidebar, currentPageLink])

  const handleTabClick = (link: string) => {
    navigate(link)
    setCurrentPageLink(link)

  };

  useEffect(() => {
      const fetchData = async () => {
          let data = await getProjects();
          let convertedData : any = []
          data.map((project: any, index: number) => {
            const title = project.title.replaceAll(" ", "-").toLowerCase()
            const images =  projectImages[title]
            project.images = images
            convertedData.push({
              name: project.title + " - " + project.projectType,
              link: title,
            })
          })
          const projectsTabIndex = 2
          sidebarInfo[projectsTabIndex].subTabs = convertedData
          setProjects(data);
          setSidebarReady(true)
      };
      fetchData();
  }, []);

  useEffect(() => {
    if (showHiddenSidebar) {
      addClass("hidden", "sidebar-move")
      addClass("sidebar-menu-hover", "sidebar-move")
      addClass("sidebar-arrow", "rotated")
    } else {
      removeClass("hidden", "sidebar-move")
      removeClass("sidebar-menu-hover", "sidebar-move")
      removeClass("sidebar-arrow", "rotated")
    }
    // setShowHiddenSidebar(false)
  }, [showHiddenSidebar])

  const toggleSidebar = () => {
    setShowHiddenSidebar(!showHiddenSidebar)
  }

  return (
    <body className={theme === 'dark' ? 'dark-mode' : ''}>
      {hiddenSidebar && (
        <div className='sidebar-menu-hover' onClick={() => {toggleSidebar()}} ><ArrowBackIosNewOutlinedIcon className='sidebar-arrow'/></div>
      )}
      {sidebarReady && (
        <Sidebar image={profilePicture} items={sidebarInfo} onTabClick={handleTabClick} />
      )}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/work-experience" element={<AboutWorkExperience/>}/>
        <Route path="/education" element={<AboutEducation/>}/>
        <Route path="/projects" element={<Projects/>}/>
        {projects && projects.map((project: any, index: number) => (
          <Route path={`/${project.title.replaceAll(" ", "-").toLowerCase()}`} element={<ProjectDetails project={project} />} />
        ))}
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </body>
  );
};

export default App;
