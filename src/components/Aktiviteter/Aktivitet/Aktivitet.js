import React from 'react';
import './Aktivitet.scss';

const Aktivitet = (props) => {

    let aktivitetsliste = props.alleAktivitetProp.map(a => {

        return(
            <section className="lille__aktivitet">
                <img src={"/Artikel/" + a.akimg} alt="" />
                <h3>{a.aktitel}</h3>
                <p>{a.aktxt}</p>
                <p><a href="/">{a.aka}</a></p>
            </section>
        )
    });
    return (
        <section className="aktivitetsliste">
            {aktivitetsliste}
        </section>
    )
}

export default Aktivitet
