import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import './HeaderNav.scss';

const HeaderNav = (props) => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Velkommen</Link></li>
                <li><NavLink to="/nyheder">Nyheder</NavLink></li>
                <li><NavLink to="/aktiviteter">Aktiviteter</NavLink></li>
                <li><NavLink to="/outro">Outro</NavLink></li>
            </ul>
        </nav>
    )
}

export default withRouter(HeaderNav)
