
import React, { Component } from 'react';
import './styles.scss';

class PlayerBox extends Component
{

    render()
    {

        return (
            <article className="hidden" id="playing-song">
                <h3 className="color-electricblue">Canción actual</h3>

                <div className="actual-song"
                    ondragover="allowDrop(event)"
                    ondrop="dragEnd(event)"
                    id="actual-song">

                    <span className="droppable-zone-info">
                        Arrastra aquí para reproducir ...
                        </span>
                </div>
            </article>
        );
    }
}

export default PlayerBox;
