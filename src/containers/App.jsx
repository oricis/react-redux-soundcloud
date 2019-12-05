import React, { Component } from 'react';

import '../assets/styles/reset.css';
import '../assets/styles/base.scss';
import '../assets/styles/App.scss';

import PlayerBox from '../components/player-box/index';
import Results from '../components/results/index';
import Searcher from '../components/searcher/index.jsx';

class App extends Component
{

    render()
    {
        return (
            <div>
                <Searcher></Searcher>
                <Results></Results>
                <PlayerBox></PlayerBox>
            </div>
        );
    }
}

export default App;
