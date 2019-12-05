import axios from 'axios';

class AxiosApi
{

    constructor()
    {

        this.BASE_URL = 'https://api.soundcloud.com';
        this.FORMAT   = 'format=json';
        this.TOKEN    = 'client_id=aa06b0630e34d6055f9c6f8beb8e02eb';
    }

    /**
     *
     * @param  string
     * @return promise
     */
    async getSongs(search_word)
    {
        const { data } = await axios.get(
            `${this.BASE_URL}/tracks?q=${search_word}&${this.FORMAT}&${this.TOKEN}`,
        );

        return data;
    }

    /**
     *
     * @param  string
     * @return promise
     */
    async getSong(id)
    {
        const { data } = await axios.get(
            `${this.BASE_URL}/tracks?q=${id}&${this.FORMAT}&${this.TOKEN}`,
        );

        return data;
    }
}

export default new AxiosApi();
