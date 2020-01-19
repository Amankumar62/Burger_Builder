import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-my-burger-20ab3.firebaseio.com/',
});


export default instance;