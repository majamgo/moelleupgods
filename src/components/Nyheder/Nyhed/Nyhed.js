import React from 'react';
import './Nyhed.scss';

const Nyhed = (props) => {

    let nyhedsListe = props.alleNyhedProp.map(n => {

        return(
            <section className="lille__nyhed">
                <img src={"/NyhederBilleder/" + n.nyhedbil} alt="" />
                <h3>{n.titel}</h3>
                <p>{n.txt}</p>
                <p><a href="/">{n.atag}</a></p>
            </section>
        )
    });
    return (
        <section className="nyhedsliste">
            {nyhedsListe}
        </section>
    )
}

export default Nyhed
