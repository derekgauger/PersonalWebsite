import React from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import "./Contact.css"
import { linkedin, github, discord, email, fiverr, phone } from "../../Images/contactlogos"
import ContactForm from '../../Components/ContactForm/ContactForm';

const Contact: React.FC = () => {
    return (
        <div>
            <PageTitle
                title="Contact Me"
            />
            <div className='page-content'>
                <div className='center-contact-form'>
                    <h1>Send me an email</h1>
                    <ContactForm/>
                </div>
                <div className='contact-logos-contact-page'>
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

export default Contact;