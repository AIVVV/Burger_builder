import Axios from 'axios';
import { config } from './api-config';

const instance = Axios.create({
    baseURL:`${config.protocol}${config.baseURL}`
});

export default instance;
