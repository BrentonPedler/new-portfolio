import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Scroll from '../../components/scroll';
import style from './style.module.css';

export default function Skills() {
    return (
        <div className="fade-in" style={{ backgroundImage: 'url("../../assets/red-neon.png")', backgroundSize: 'cover', width: '100%' }}>
            <div className={style.background}>
                <Box className={style.main}>
                    <h2>Technical</h2>
                    <Grid container className={style.skillContent} sx={{ width: '100%' }}>
                        <Grid item xs={12} sm={6} md={12} lg={4} xl={4}>
                            <p>Html5</p>
                            <p>Css / Scss</p>
                            <p>JavaScript (ES6+)</p>
                            <p>TypeScript</p>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <p>React JS</p>
                            <p>Material UI</p>
                            <p>Styled Components</p>
                            <p>Redux</p>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <p>Firebase</p>
                            <p>Git / Github</p>
                            <p>Command Line</p>
                            <p>Paired Programming</p>
                        </Grid>
                    </Grid>
                    <h2>Personal</h2>
                    <Grid container className={style.skillContent} sx={{ width: '60%', minWidth: '300px' }}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <p>Clear Communication</p>
                            <p>Active Listener</p>
                            <p>Critical Thinker</p>
                            <p>Problem Solver</p>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <p>Time Management</p>
                            <p>Team Player</p>
                            <p>Organized (Jira / Asana)</p>
                            <p>Motivator</p>
                        </Grid>
                    </Grid>
                    <h2>Marketing</h2>
                    <Grid container className={style.skillContent} sx={{ width: '40%', minWidth: '300px' }}>
                        <Grid item xs={12}>
                            <p>Google Analytics</p>
                            <p>Google Tag Manager</p>
                            <p>Google Ad Campaigns</p>
                            <p>SEO</p>
                        </Grid>
                    </Grid>
                </Box>
            <Scroll />
            </div>
        </div>
    )
}