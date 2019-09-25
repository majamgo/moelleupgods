import React, { useState } from 'react';
import Nyhed from './Nyhed/Nyhed';
import Nyhed1 from './IMG000200_srcset-large.jpg';
import './Nyheder.scss';

const Nyheder = () => {

    const [nyhed, setNyhed] = useState(
        [
        { nyhedbil: "Nyhed2.png", titel: "Køb vores hampeprodukter", txt: "På Møllerup Gods arbejder vi med hamp og hampens unikke ernæringsmæssige egenskaber. Alt vores hamp er dyrket i Danmark, og resultatet er en række gode produkter, som du kan købe her på webshoppen..", atag: "Køb online her", id: 1 },
        { nyhedbil: "Nyhed3.png", titel: "Verdensballetten 2019", txt: "Siden 2012 har de klassiske gule mure på Møllerup Gods dannet rammen for Verdensballetten, og med mange tusinde gæster gennem årene er begivenheden efterhånden blevet en fasttømret og populær sommertradition på Djursland. Også til sommer 2019 vil vi få fornøjelsen af forestillingen på Møllerup Gods", atag: "Se mere her", id: 2 },
        { nyhedbil: "Nyhed4.png", titel: "Historien om Møllerup Gods", txt: "Marsk Stig Andersen Hvide af den magtfulde Hvide-slægt er den tidligst kendte ejer af Møllerup. Møllerup var hans vigtigste besiddelse. Gården lå, som i dag, med en borg på øen og avlsbygninger på den anden side af voldgraven.", atag: "Læs historien her", id: 3 }
    ]
    );

    return (
        <section className="nyhedercontainer">
            <section className="stor__nyhed">
                <img src={Nyhed1} alt="" />
                <h2>Verdensballetten på Møllerup Gods lørdag d. 13. juli 2019 blev en skøn aften</h2>
                <p>Verdensballetten planlægger at komme igen næste år lørdag d. 11. juli 2020</p>
                <a href="/">Læs mere her</a>
            </section>
           <Nyhed alleNyhedProp={nyhed}/>
        </section>
    )
}

export default Nyheder
