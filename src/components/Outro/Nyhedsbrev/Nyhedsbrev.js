import React from 'react';
import './Nyhedsbrev.scss';

const Nyhedsbrev = () => {
    return (
        <form>
            <h3>Tilmeld Nyhedsbrev</h3>
            <p>* skal udfyldes</p>
            <label>Email Address *</label>
            <input type="text"/>
            <label>First name</label>
            <input type="text"/>
            <label>Last name</label>
            <input type="text"/>
            <button>Tilmeld</button>
        </form>
    )
}

export default Nyhedsbrev
