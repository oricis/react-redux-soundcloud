import React, { Component } from 'react';

import '../assets/styles/reset.css';
import '../assets/styles/base.scss';
import '../assets/styles/App.scss';

class App extends Component
{

    render()
    {
        return (
            <div>
                <article>
                    <h3 className="color-electricblue">Busca tu canción...</h3>

                    <div className="form">
                        <form name="search-form" id="search-form">
                            <input type="text" name="search" id="search" />

                            <input type="submit" className="btn left-side-btn" id="search-button" value="Buscar" />
                        </form>
                    </div>

                    /*** Search results (start dragging) ***/
                    <div className="results"></div>
                </article>

                <article className="hidden" id="playing-song">
                    <h3 className="color-electricblue">Canción actual</h3>

                    /*** Song playing (end dragging) ***/
                    <div className="actual-song"
                        ondragover="allowDrop(event)"
                        ondrop="dragEnd(event)"
                        id="actual-song">

                        <span className="droppable-zone-info">
                            Arrastra aquí para reproducir ...
                        </span>
                    </div>
                </article>
            </div>
        );
    }
}

export default App;
