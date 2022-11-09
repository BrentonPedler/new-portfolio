import Grid from '@mui/material/Grid';
import Contact from '../../components/contact';

import Brenton from '../../assets/brentonJuno.png';

import style from './style.module.css';

export default function About() {
    return (
        <div className="fade-in" style={{ width: '80%', margin: '0 auto', paddingBottom: '50px' }}>
            <Grid container>
                <Grid item xs={10} className={style.header}>
                    <h2>I am a Front End React Developer with diverse expertise in communiocation, SEO, Content Writing and Google Analytics.</h2>
                </Grid>
            </Grid>
            <Grid 
                container 
                justifyContent="center"
                alignItems="center"
                sx={{ marginTop: '50px' }}
            >
                <Grid item xs={6}>
                    <img src={Brenton} alt='Brenton graduate of Juno Web Development posing for photo' />
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'right' }}>
                    <p>I am a Juno immersive bootcamp graduate curently employed at NuCode Technologies, an end-to-end software development consultancy firm for businesses seeking solutions in staking platforms, Web 3.0, fintech, blockchain and Smart Contract development.</p>
                    <p>I have worked on numerous projects using React JS, TypeScript, Material UI, Styled Components & Redux. I have also gained a tremendous amount of experience in Agile project management, Search engine optimization and content writing.</p>
                    <Contact />
                </Grid>
            </Grid>
        </div>
    )
}