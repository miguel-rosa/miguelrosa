import axios from 'axios';

const postsApi = axios.create({
    baseURL:'https://wdt.com.br/wp-json/wp/v2/'
});

export default postsApi;