import React, { useState } from 'react';
import "./Sidebar.css"
import { FormControlLabel, Switch } from '@mui/material';
import { useTheme } from '../../Providers/ThemeProvider';
import ducky from '../../Images/ducky.webp'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useMediaQuery } from 'react-responsive'

interface SidebarProps {
  image: string;
  items: {
    label: string;
    link?: string;
    fixedToBottom?: boolean;
    subTabs?: {
      name: string;
      link: string;
    }[];
  }[];
  onTabClick: (content: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ image, items, onTabClick }) => {
  const [openTab, setOpenTab] = useState<string | null>(null);
  const { toggleTheme } = useTheme();

  const hiddenSidebar = useMediaQuery({query: '(max-width: 850px)'})
  
  const handleItemClick = (item: { label: string; link?: string }) => {
    if (item.link) {
      onTabClick(item.link);
    }
    toggleTab(item.label);
  };

  const toggleTab = (label: string) => {
    setOpenTab(openTab === label ? null : label);
  };

  return (
    <div className={hiddenSidebar ? "sidebar hidden" : "sidebar"}>
      <div className='profile-picture-container'>
        <img className="profile-picture" src={image}></img>
        <img className="profile-picture" src={ducky}></img>
      </div>
      <div className='my-info-container'>
        <div className="my-name">Derek Gauger</div>
        <div className="my-handle">dirkyg</div>
        <div className="my-description">Software engineer focused on automation, fun projects, and helping others</div>
      </div>
      <div className='sidebar-wrapper'>
        {items.map((item) => (
          <div>
            {item.fixedToBottom && (
              <div className="main-item bottom" onClick={() => {handleItemClick(item)}}>
                {item.label} 
              </div>
            )}
            {!item.fixedToBottom && (
              <div className="main-item" onClick={() => {handleItemClick(item)}}>
                {item.label}
                {openTab === item.label && item.subTabs && (
                  <div className="arrow open"><ArrowBackIosNewOutlinedIcon fontSize='small'/></div>
                )}
                {openTab !== item.label && item.subTabs && (
                  <div className="arrow"><ArrowBackIosNewOutlinedIcon fontSize='small'/></div>
                )}
              </div>
            )}
            {openTab === item.label && item.subTabs && (
              <div>
                {item.subTabs.map((subTab) => (
                  <div key={subTab.name} className="sub-item" onClick={() => onTabClick(subTab.link)}>
                    {subTab.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='theme-switcher-tab'>
        <FormControlLabel className='theme-switcher' control={<Switch defaultChecked onClick={toggleTheme}/>} label="Dark Mode" />
      </div>
    </div>
  );
};

export default Sidebar;
