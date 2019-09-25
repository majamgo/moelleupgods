import React from 'react';
import HeaderNav from '../Header/HeaderNav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Velkommen from '../Velkommen/Velkommen';
import Nyheder from '../Nyheder/Nyheder';
import Aktiviteter from '../Aktiviteter/Aktiviteter';
import Outro from '../Outro/Outro';
import Logo from '../../Assets/Mlleruplogo200x200transp1_srcset-large.png';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
    <header>
            <a href="/"><img src={Logo} alt="Moellerup Gods" className="logo__img"/></a>
      <HeaderNav />
      <Switch>
        <Route exact path='/' component={Velkommen} />
        <Route path ='/nyheder' component={Nyheder} />
        <Route path='/aktiviteter' component={Aktiviteter} />
        <Route path='/outro' component={Outro} />
      </Switch>
    </header>
    </BrowserRouter>
  );
}

export default App;
