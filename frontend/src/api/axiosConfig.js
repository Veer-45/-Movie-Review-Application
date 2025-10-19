import axios from 'axios';

export default axios.create({
    baseURL:'https://dolores-subfractionary-addictively.ngrok-free.dev',
    headers: {"ngrok-skip-browser-warning": "true"}

});