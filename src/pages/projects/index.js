import { projectList } from './projectList';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';

import GitHubIcon from '@mui/icons-material/GitHub';
import LaptopIcon from '@mui/icons-material/Laptop';

import style from './style.module.css'

export default function Projects() {
    const renderProjects = projectList.map((data, key) => {
        return (
            <Box 
                key={key} 
                className={style.projectContainer}
                sx={{ padding: { xl: '25px', lg: '25px', md: '25px', sm: '15px', xs: '10px' } }}
            >
                <Grid 
                    container 
                    sx={{ textAlign: 'center' }}
                >
                    <Grid item xs={12}>
                        <h2>{data.name}</h2>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid 
                        item 
                        xs={12} sm={12} md={12} lg={12} xl={12} 
                        sx={{ textAlign: 'center'}}
                    >
                            <img src={data.picOne} alt={data.alt} className={style.img} />
                            <img src={data.picTwo} alt={data.alt} className={style.img} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid 
                        item 
                        xs={12} sm={12} md={12} lg={12} xl={12} 
                        className={style.contentContainer}
                    >
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
            </Box>
        )
    })

    return (
        <div className={style.mainContainer}>
            <Grid 
                container
                sx={{ width: { xl: '80%', lg: '80%', md: '80%', sm: '90%', xs: '95%' } }}
            >
                <Grid item xs={12}>
                    {renderProjects}
                </Grid>
            </Grid>
        </div>
    )
}