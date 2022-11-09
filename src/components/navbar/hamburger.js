import { Drawer, IconButton } from '@mui/material';
import { useState } from 'react';
import Style from './style.module.css';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Hamburger({ loadState }) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <IconButton onClick={() => setOpen(true)}>
                <MenuIcon sx={{ color: '#FFC23C', fontSize: '50px' }} />
            </IconButton>
            <Drawer
                anchor='right'
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{ sx: { width: '320px', height: '100vh', background: 'black' } }}
            >
                <div className={Style.hamburger} onClick={() => setOpen(false)}>
                    <IconButton sx={{ margin: '25px 0  0 125%' }}>
                        <CloseIcon sx={{ color: 'white', fontSize: '30px', marginLeft: '80%' }} />
                    </IconButton>
                    <Link to='/' className={Style.itemSpacing} onClick={!loadState}>
                        <p>Home</p>
                    </Link>
                    <Link to='/about' className={Style.itemSpacing} onClick={!loadState}>
                        <p>About</p>
                    </Link>
                    <Link to='/skills' className={Style.itemSpacing} onClick={!loadState}>
                        <p>Skills</p>
                    </Link>
                    <Link to='/projects' className={Style.itemSpacing} onClick={!loadState}>
                        <p>Projects</p>
                    </Link>
                </div>
            </Drawer>
        </div>
    )
}