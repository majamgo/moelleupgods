import React, { useState } from 'react';
import Aktivitet from './Aktivitet/Aktivitet';
import './Aktiviteter.scss';

const Aktiviteter = (props) => {

    const [aktivitet, setAktivitet] = useState([
        { akimg: "ASGSGHampmark250_srcset-large.jpg", aktitel: "Møllerup Hamp", aktxt: "På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.", aka: "Læs mere her", id: 1 },
        { akimg: "ak2.jpg", aktitel: "Møder & events", aktxt: "Hold møde eller firmaevent i smukke, autentiske rammer med plads til kreativitet.", aka: "Læs mere her", id: 2 },
        { akimg: "ak3.jpg", aktitel: "Fest på kroen", aktxt: "Lej Hubertus Kroen og hold fest for op til 80 pers. i romantiske og historiske rammer.", aka: "Læs mere her", id: 3 },
        { akimg: "ak4.jpg", aktitel: "Rundvisninger", aktxt: "Bestil en rundvisning på Møllerup, lær noget om historien, jagten, og livet på Møllerup. ", aka: "Læs mere her", id: 4 },
        { akimg: "ak5.jpg", aktitel: "Hamp hudpleje", aktxt: "Prøv Møllerups nye hudplejeserie baseret på de næringsrige olie fra hampens frø.", aka: "Læs mere her", id: 5 },
        { akimg: "ak6.jpg", aktitel: "Hamp fødevarer", aktxt: "Prøv fødevarer udviklet på baggrund af frøene fra den sunde hamp fra Møllerup. ", aka: "Læs mere her", id: 6 },
        { akimg: "ak7.png", aktitel: "Møllerup bogen", aktxt: "Der er kød og blod på historien,  Læs mere om Marsk Stig & livet på Møllerup. ", aka: "Læs mere her", id: 7 },
        { akimg: "ak8.jpg", aktitel: "Møllerup jagt", aktxt: "Professionel jagt i kuperet og varieret landskab med mange fasaner og råvildt.", aka: "Læs mere her", id: 8 },
        { akimg: "ak9.jpg", aktitel: "Ferie for 40", aktxt: "Nyd en ferie eller weekend på Hubertus Kroen. Op til 40 personer inkl pool", aka: "Læs mere her", id: 9 },
        { akimg: "ak10.jpg", aktitel: "Bolig på landet", aktxt: "Mærk roen og nyd det smukke landskab i et omsorgsfuldt lokalsamfund.", aka: "Læs mere her", id: 10 },
        { akimg: "ak11.jpg", aktitel: "Hestepension", aktxt: "Giv din hest et sundt ophold, god plads ude og inde i den gamle herskabsstald.", aka: "Læs mere her", id: 11 },
        { akimg: "ak12.jpg", aktitel: "Verdensballetten", aktxt: "Verdensballet - charmerende udendørsforestilling, 13. juli 2018 på Møllerup. ", aka: "Læs mere her", id: 12 },
    ]);

    return (
        <section className="aktivitetcontainer">
            <section className="aktivitetstxt">
                <h3>Møllerup Gods tilbyder en perlerække af muligheder</h3>
                <p>Møllerup Gods og Hubertus Kroen er ikke alene kulturhistoriske perler, vi er også en virksomhed med højt til loftet, masser af muligheder og god plads til aktiviteter på 425 hektar - for private og erhverv</p>
            </section>
            <Aktivitet alleAktivitetProp={aktivitet}/>
        </section>
    )
}

export default Aktiviteter
