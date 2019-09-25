import React from 'react';
import Intro from '../Intro/Intro';
import Nyheder from '../Nyheder/Nyheder';
import Aktiviteter from '../Aktiviteter/Aktiviteter';
import Outro from '../Outro/Outro';
import Footer from '../Footer/Footer';
import './Velkommen.scss';

const Velkommen = (props) => {
    return (
        <article className="main">
            <Intro />
            <Nyheder />
            <hr/>
            <Aktiviteter />
            <Outro />
            <Footer />
        </article>
        
    )
}

export default Velkommen
