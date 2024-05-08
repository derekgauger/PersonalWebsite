import React, { useRef } from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import "./Home.css"
import { discord, fiverr, github, email, phone, linkedin } from "../../Images/contactlogos"
const Home: React.FC = () => {
    return (
        <div>
            <PageTitle
                title="Home"
            />
            <div className="page-content">
                <div className='welcome'>Welcome to my website!</div>
                <div className="welcome-info">
                    My name is Derek Gauger. I'm a software engineer with a degree from the Milwaukee School of Engineering. I've got a background working on embedded systems and web development. 
                    I am always doing/looking for personal side projects to learn new technologies. The 'About' page contains what I am currently working on. Contact me using my 'Contact' page if you would like to discuss further.
                </div>
                <div className='welcome' style={{paddingTop: "0"}}>Website Info</div>
                <div className="welcome-info">
                    This website is a React Typescript application that I built to showcase my skills and projects. It is hosted on an AWS EC2 instance running Windows. The backend is .NET using C# for the endpoints, 
                    database queries, and data manipulation. I am using a MySQL database for storing stats. My goal for this project was to learn more about .NET and its utilities.
                </div>
                <div className='welcome' style={{paddingTop: "0"}}>Contact</div>
                <div className='contact-logos'>
                    <a href="https://www.linkedin.com/in/derekgauger/" target='_blank'>
                        <img src={linkedin} alt="LinkedIn"></img>
                        <div>LinkedIn</div>
                    </a>
                    <a href="mailto:gaugerderek@gmail.com" target='_blank'>
                        <img src={email} alt="Email"></img>
                        <div>gaugederek@gmail.com</div>
                    </a>
                    <a href="tel:+12625817793">
                        <img src={phone} alt="Phone"></img>
                        <div>(262) 581-7793</div>
                    </a>
                    <a href="https://github.com/derekgauger">
                        <img src={github} alt="GitHub"></img>
                        <div>GitHub</div>
                    </a>
                    <a href="discord://-/users/467544971637948436">
                        <img src={discord} alt="Discord"></img>
                        <div>dirkyg</div>
                    </a>
                    <a href="https://www.fiverr.com/derekgauger?source=gig_cards&referrer_gig_slug=develop-a-minecraft-plugin-for-your-server&ref_ctx_id=e9f0724834a043dfba5672b8a0dfc9b5&imp_id=36fcc444-b094-4a71-8588-9da089e22585" target='_blank'>
                        <img src={fiverr} alt="Fiverr"></img>
                        <div>Fiverr</div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;