import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import style from './style.module.css';

export default function Skills() {
    return (
        <div className="fade-in" style={{ backgroundImage: 'url("../../assets/red-neon.png")', backgroundSize: 'cover', width: '100%' }}>
            <div className={style.background}>
                <Box className={style.main}>
                    <h2>Technical</h2>
                    <Grid container className={style.skillContent} sx={{ width: '100%' }}>
                        <Grid item xs={4}>
                            <p>HTML5</p>
                            <p>CSS / SCSS</p>
                            <p>JAVASCRIPT (ES6+)</p>
                            <p>TYPESCRIPT</p>
                        </Grid>
                        <Grid item xs={4}>
                            <p>REACT JS</p>
                            <p>MATERIAL UI</p>
                            <p>STYLED COMPONENTS</p>
                            <p>REDUX</p>
                        </Grid>
                        <Grid item xs={4}>
                            <p>FIREBASE</p>
                            <p>GIT / GITHUB</p>
                            <p>COMMAND LINE</p>
                            <p>PAIRED PROGRAMMING</p>
                        </Grid>
                    </Grid>
                    <h2>Personal</h2>
                    <Grid container className={style.skillContent} sx={{ width: '60%' }}>
                        <Grid item xs={6}>
                            <p>Clear Communicater</p>
                            <p>Active Listener</p>
                            <p>Critical Thinker</p>
                            <p>Problem Solver</p>
                        </Grid>
                        <Grid item xs={6}>
                            <p>Time Management</p>
                            <p>Team Player</p>
                            <p>Organized</p>
                            <p>Motivator</p>
                        </Grid>
                    </Grid>
                    <h2>Marketing</h2>
                    <Grid container className={style.skillContent} sx={{ width: '40%' }}>
                        <Grid item xs={12}>
                            <p>Google Analytics</p>
                            <p>Google Tag Manager</p>
                            <p>Google Ad Campaigns</p>
                            <p>SEO</p>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}