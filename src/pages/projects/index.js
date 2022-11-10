import { projectList } from './projectList';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import LaptopIcon from '@mui/icons-material/Laptop';

import style from './style.module.css'

export default function Projects() {
    const renderProjects = projectList.map((data) => {
        return (
            <div style={{ border: '2px solid #FFC23C', borderRadius: '25px', padding: '25px', margin: '50px 0px'}}>
                <Grid container sx={{ textAlign: 'center' }}>
                    <Grid item xs={12}>
                        <h2>{data.name}</h2>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ textAlign: 'center'}}>
                            <img src={data.picOne} alt={data.alt} className={style.img} />
                            <img src={data.picTwo} alt={data.alt} className={style.img} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item item xs={12} sm={12} md={12} lg={12} xl={12} className={style.contentContainer}>
                        <p>{data.description}</p>
                        <p>{data.tech}</p>
                        <a href={data.repo} target='_blank' rel="noopener noreferrer">
                            <GitHubIcon style={{ fontSize: '50px', color: '#FFC23C' }} />
                        </a>
                        <a href={data.live} target='_blank' rel="noopener noreferrer">
                            <LaptopIcon style={{ fontSize: '50px', color: '#FFC23C' }} />
                        </a>
                    </Grid>
                </Grid>
            </div>
        )
    })

    return (
        <div style={{ width: '80%', margin: '0 auto', display: 'flex', paddingBottom: '50px' }}>
            <Grid container>
                <Grid item xs={12}>
                    {renderProjects}
                </Grid>
            </Grid>
        </div>
    )
}