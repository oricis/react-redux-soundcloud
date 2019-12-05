
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
                    onDragOver={this.allowDrop}
                    onDrop={this.dragEnd}
                    id="actual-song">

                    <span className="droppable-zone-info">
                        Arrastra aquí para reproducir ...
                        </span>
                </div>
            </article>
        );
    }


    allowDrop = (event) => {
        window.allowDrop(event); // Call to external function in JS file
    }

    dragEnd = (event) => {
        window.dragEnd(event); // Call to external function in JS file
    }
}

export default PlayerBox;
