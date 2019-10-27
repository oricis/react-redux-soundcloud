
import React, { Component } from 'react';
import './styles.scss';

class Searcher extends Component
{

    render()
    {

        return (
            <article>
                <h3 className="color-electricblue">Busca tu canción...</h3>

                <div className="form">
                    <form name="search-form" id="search-form">
                        <input type="text" name="search" id="search" />

                        <input type="submit" className="btn left-side-btn" id="search-button" value="Buscar" />
                    </form>
                </div>
            </article>
        );
    }
}

export default Searcher;
