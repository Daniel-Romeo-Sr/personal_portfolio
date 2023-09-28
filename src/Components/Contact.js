import React from 'react'
import "../Styles/Contact.css"
import { Element } from 'react-scroll'
import { IconButton } from "@material-ui/core"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
    return (
        <Element className="contact" id="Contact">
            <h1>Contact</h1>
            <div className='Contact__container'>
                <p>Email: <span>danielromeosr0717@gmail.com</span></p>

                <p>Github Account: <span><a href='https://github.com/Daniel-Romeo-Sr'>Daniel-Romeo-Sr</a></span></p>
                <div className='contact__icons'>
                    <a href='google.com'>
                        <IconButton>
                            <LinkedInIcon />
                        </IconButton>
                    </a>
                    <a href='google.com'>
                        <IconButton>
                            <FacebookOutlinedIcon />
                        </IconButton>
                    </a>
                    <a href='google.com'>
                        <IconButton>
                            <InstagramIcon />
                        </IconButton>
                    </a>
                </div>
            </div>
        </Element>
    )
}

export default Contact
