import { Box, useMediaQuery } from '@mui/material';
import Hamburger from './hamburger.js';

import Style from './style.module.css';
import { Link } from 'react-router-dom';

export default function Nav({loadState}) {
    const pageQuery = useMediaQuery('(max-width: 900px)');

    return (
        <div className={Style.mainContainer}>
            <Box sx={{ display: 'flex' }}>
                <h3 className={Style.name}>Brenton J Pedler</h3>
            </Box>
            {pageQuery ? <Hamburger /> :  
            <Box className={Style.itemContainer}> 
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
            </Box>}
        </div>
    )
}