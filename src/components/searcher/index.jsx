
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
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                            name="to_search" />

                        <input type="submit"
                            className="btn left-side-btn"
                            value="Buscar" />
                    </form>
                </div>
            </article>
        );
    }


    handleSubmit = (event) => {
        event.preventDefault();
        const formdata = new FormData(event.target);
        const to_search = formdata.get('to_search');

        window.searchSong(to_search);
    }
}

export default Searcher;
