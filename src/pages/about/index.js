import Grid from '@mui/material/Grid';
import { Box, useMediaQuery } from '@mui/material';
import Contact from '../../components/contact';
import Scroll from '../../components/scroll';
import Footer from '../../components/footer';

import Brenton from '../../assets/brentonJuno.png';

import style from './style.module.css';

export default function About() {
    const mediaQuery = useMediaQuery('(max-width: 700px)');

    return (
        <div className="fade-in" style={{ width: '80%', margin: '0 auto' }}>
            <Box>
                <Grid 
                    container 
                    justifyContent='center'
                    sx={{ borderBottom: '2px solid #FFC23C', padding: '50px 0px' }} 
                >
                    <Grid
                        item
                        xs={12} sm={12} md={12} lg={10} xl={10}
                        className={style.header}
                        sx={{ padding: { xl: '25px', lg: '25px', md: '20px', sm: '15px', xs: '10px' }, marginBottom: '100px'  }}
                    >
                        <h2 style={{ fontSize: mediaQuery ? '25px' : '30px' }}>
                            I am a Front End React Developer with diverse expertise in communication, SEO, Content Writing and Google Analytics
                        </h2>
                    </Grid>
                </Grid>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    sx={{ marginTop: '100px' }}
                >
                    <Grid
                        item
                        xs={12} sm={12} md={12} lg={6} xl={6}
                        sx={{ textAlign: 'center' }}
                    >
                        <img src={Brenton} alt='Brenton graduate of Juno Web Development posing for photo' />
                    </Grid>
                    <Grid
                        item
                        xs={12} sm={12} md={12} lg={6} xl={6}
                        sx={{ textAlign: 'right' }}
                    >
                        <p>I am a Juno immersive bootcamp graduate curently employed at NuCode Technologies, an end-to-end software development consultancy firm for businesses seeking solutions in staking platforms, Web 3.0, fintech, blockchain and Smart Contract development.</p>
                        <p style={{ marginBottom: '50px' }}>I have worked on numerous projects using React JS, TypeScript, Material UI, Styled Components & Redux. I have also gained a tremendous amount of experience in Agile project management, Search engine optimization and content writing.</p>
                        <Contact />
                    </Grid>
                </Grid>
            </Box>
            <Scroll style={{ marginBottom: '50px' }} />
            <Footer />
        </div>
    )
}