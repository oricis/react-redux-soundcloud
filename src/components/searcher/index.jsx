
import React, { Component } from 'react';
import './styles.scss';

import AxiosService from '../../services/AxiosApi.service.js'

class Searcher extends Component
{
    constructor()
    {
        super();

        this.to_search = '';
        this.state = {
            songs: {}
        }
    }

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

    componentDidUpdate()
    {
        window.loadSongs(this.state.songs);
    }


    handleSubmit = (event) => {
        event.preventDefault();
        const formdata = new FormData(event.target);
        const to_search = formdata.get('to_search');

        if (to_search !== this.to_search) {
            this.to_search = to_search;

            // TODO: clean div contents with redux
            document.querySelector('.results').innerHTML = '';


            this.getSongs(to_search);
        }
    }

    async getSongs(to_search)
    {

        try {
            const data = await AxiosService.getSongs(to_search);
            this.setState({
                songs: data,
                error: '',
            });
            console.log('songs loaded !')
        } catch {
            console.log('ERR songs loaded !')

            this.setState({
                error: 'Fail fetching data',
            });
        }
    }
}

export default Searcher;
