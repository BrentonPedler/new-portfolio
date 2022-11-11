import * as React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import Button from '../../components/button';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

import Style from './style.module.css';

export default function Contact() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => { setOpen(true) };
    const handleClose = () => { setOpen(false) };

    return (
        <div>
            <Button
                text='Say Hello'
                onClick={handleOpen}
                sx={{ padding: '10px 50px' }}
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    className={Style.modalContainer}
                    sx={{
                        height: { xl: '50%', lg: '50%', md: '70%', sm: '80%', xs: '90%' },
                        width: { xl: '50%', lg: '50%', md: '75%', sm: '90%', xs: '90%' }
                        }}
                >
                    <CloseIcon sx={{ cursor: 'pointer', margin: '10px', fontSize: '30px'}} onClick={handleClose} />
                    <form>
                        <input type='text' name='name' placeholder='name' required />
                        <input type='email' name='email' placeholder='e-mail' required />
                        <textarea name='message' placeholder='Lets have a chat' rows='5'></textarea>
                    </form>
                    <Box className={Style.iconContainer}>
                        <a href='https://github.com/BrentonPedler' target='_blank' rel="noopener noreferrer">
                            <GitHubIcon style={{ fontSize: '40px', color: '#FFC23C' }} />
                        </a>
                        <a href='https://www.linkedin.com/in/brentonjamespedler/' target='_blank' rel="noopener noreferrer">
                            <LinkedInIcon style={{ fontSize: '40px', color: '#FFC23C' }} />
                        </a>
                        <a href='https://twitter.com/PedlerCodes' target='_blank' rel="noopener noreferrer">
                            <TwitterIcon style={{ fontSize: '40px', color: '#FFC23C' }} />
                        </a>
                        <a href='mailto:brentonjamespedler@gmail.com' target='_blank' rel="noopener noreferrer">
                            <EmailIcon style={{ fontSize: '40px', color: '#FFC23C' }} />
                        </a>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}