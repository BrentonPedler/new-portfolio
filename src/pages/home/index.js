import { Link } from 'react-router-dom';
import { Box, useMediaQuery } from '@mui/material';
import Button from '../../components/button';
import Contact from '../../components/contact';
import Footer from '../../components/footer';
import style from './style.module.css';


export default function Home({ loadState }) {
    const mediaQuery = useMediaQuery('(max-width: 700px)');
    return (
        <div className='fade-in main'>
            <Box
                className={style.mainContainer}
                sx={{ height: { xl: '73.5vh', lg: '73.5vh', md: '73.5vh', sm: '100vh', xs: '100vh' } }}
            >
                <Box
                    className={style.contentContainer}
                    sx={{
                        textAlign: { xl: 'start', lg: 'start', md: 'start', sm: 'center', xs: 'center' },
                        width: { xl: '80%', lg: '80%', md: '90%', sm: '95%', xs: '95%' }
                    }}
                >
                    <Box>
                        <h1 style={{ fontSize: mediaQuery ? '30px' : '50px' }}>
                            <span className={style.span}>&lt;h1&gt;</span>
                            My Name is Brenton Pedler
                            <span className={style.span}>&lt;/h1&gt;</span>
                        </h1>
                    </Box>
                    <Box>
                        <h2 style={{ fontSize: mediaQuery ? '20px' : '30px' }}>
                            <span className={style.span}>&lt;h2&gt;</span>
                            Toronto based Front End Developer
                            <span className={style.blink}>_</span>
                            <span className={style.span}>&lt;/h2&gt;</span>
                        </h2>
                    </Box>
                    <Box
                        className={style.buttonContainer}
                        sx={{
                            justifyContent: { xl: 'start', lg: 'start', md: 'start', sm: 'center', xs: 'center' },
                            flexDirection: { xl: 'row', lg: 'row', md: 'row', sm: 'row', xs: 'column' }
                        }}
                    >
                        <Link
                            to='/about'
                            onClick={!loadState}
                            style={{ padding: '0' }}
                            underline='none'
                        >
                            <Button text='My story' sx={{ padding: '10px 50px' }} />
                        </Link>
                        <Contact />
                    </Box>
                </Box>
            </Box>
            <Footer />
        </div>
    )
}