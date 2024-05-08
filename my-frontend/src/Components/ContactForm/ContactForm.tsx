import React, { useState } from 'react';
import "./ContactForm.css"
import { sendEmail } from '../../Functions/API';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

interface ContactFormProps {
}

const ContactForm: React.FC<ContactFormProps> = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        body: ''
    });
    const [message, setMessage] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [severity, setSeverity] = useState<"error" | "success" | "info" | "warning" | undefined>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const element = document.getElementById(name)
        if (element && value !== '') {
            element.classList.add('move-label')
        } else if (value === '') {
            element?.classList.remove('move-label')
        }
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setIsOpen(false);
      };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        let response = await sendEmail(formData);
        if (response.error) {
            setMessage("Something went wrong! Error: " + response.error)
            setSeverity('error')
        } else {
            setFormData({
                name: '',
                email: '',
                subject: '',
                body: '',
            })
            const elements = document.getElementsByClassName("move-label")
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.remove("move-label")
            }
            setSeverity('success')
            setMessage("Email sent!")
        }
        setIsOpen(true);
    };
    

    return (
        <form className='contact-form-container' onSubmit={handleSubmit}>
            <Snackbar 
                open={isOpen} 
                onClose={handleClose} 
                anchorOrigin={{vertical: "top", horizontal: "center"}} 
                autoHideDuration={2500}
            >
            <Alert
                onClose={handleClose}
                severity={severity}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
            </Snackbar>
            <div className='person-info'>
                <div className="form-row middle">
                    <div id="name" className='placeholder'>Name</div>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input-field"
                    />
                </div>
                <div className="form-row middle">
                    <div id="email" className='placeholder'>Email</div>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field"
                    />
                </div>
            </div>
            <div className="form-row">
                <div id="subject" className='placeholder'>Subject</div>
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="input-field full-width"
                />
            </div>
            <div className="form-row">
                <textarea
                    name="body"
                    placeholder="Message"
                    value={formData.body}
                    onChange={handleChange}
                    className="textarea-field full-width"
                    style={{height: "100px", resize: "none"}}
                />
            </div>
            <button type="submit" className="submit-button">Send</button>
        </form>
    );
};

export default ContactForm;
