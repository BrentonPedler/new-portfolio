import { Link } from 'react-router-dom';
import Button from '../../components/button';
import Contact from '../../components/contact';
import Footer from '../../components/footer';
import style from './style.module.css';


export default function Home({ loadState }) {
    return (
        <div className='fade-in main'>
            <div className={style.mainContainer}>
                <div className={style.contentContainer}>
                    <h1>
                        <span className={style.span}>&lt;h1&gt;</span>My Name is Brenton Pedler<span className={style.span}>&lt;/h1&gt;</span>
                    </h1>
                    <h2>
                        <span className={style.span}>&lt;h2&gt;</span>Toronto based Front End Developer <span className={style.blink}>_</span><span className={style.span}>&lt;/h2&gt;</span>
                    </h2>
                    <div className={style.buttonContainer}>
                        <Link to='/about' onClick={!loadState} style={{ padding: '0' }}>
                            <Button text='My story' sx={{ padding: '10px 50px' }} />
                        </Link>
                        <Contact />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}