import smoothOne from '../../assets/smoothOne.png';
import smoothTwo from '../../assets/smoothTwo.png';
import guessOne from '../../assets/guessWhoOne.png';
import guessTwo from '../../assets/guessWhoTwo.png';
import metalOne from '../../assets/metalOne.png';
import metalTwo from '../../assets/metalTwo.png';

export const projectList = [
    {
        name: 'Smooth Landing',
        description: 'An application built for development students. When you have a domain for your portfolio but no time to code use this application to create a stress free landing page.',
        tech: 'Built with React JS.',
        live: 'https://smooth-landing.netlify.app/',
        repo: 'https://github.com/Smooth-Landing',
        picOne: smoothOne,
        picTwo: smoothTwo,
        alt: 'Smooth Landing Website Front Page',
        key: '0',
    },
    {
        name: 'Daily Metal Motivator',
        description: 'An application built for heavy metal enthusiasts looking for motivation. Select your mood & a heavy metal lyric will be generated at random.',
        tech: 'Built with React JS & Firebase.',
        live: 'https://vigilant-aryabhata-796d9b.netlify.app/',
        repo: 'https://github.com/BrentonPedler/brentonPedlerProjectThree',
        picOne: metalOne,
        picTwo: metalTwo, 
        alt: 'Daily Metal Motivator Website Front Page',
        key: '1',
    },
    {
        name: 'Guess Who Ghibli',
        description: 'An application inspired by the 80s board game Guess Who. Users are prompted to guess randomly generated characters from the Studio Ghibli API. Designed and built in collaboration with good friend Adrienne Lee.',
        tech: 'Built with HTML5, CSS & JavaScript.',
        live: 'https://mypettotoro.github.io/myPetTotoro/',
        repo: 'https://github.com/myPetTotoro',
        picOne: guessOne,
        picTwo: guessTwo,
        alt: 'Guess Who Ghibli Website Front Page',
        key: '3'
    }
]