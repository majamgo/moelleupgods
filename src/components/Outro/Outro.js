import React from 'react';
import DKC from './DKC/DKC';
import Instagram from './Instagram/Instagram';
import Nyhedsbrev from './Nyhedsbrev/Nyhedsbrev';
import './Outro.scss';

const Outro = () => {
    return (
        <section className="outro">
            <DKC />
            <section className="kontakt">
                <Instagram />
                <Nyhedsbrev />
            </section>
        </section>
    )
}

export default Outro
