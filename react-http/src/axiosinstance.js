import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-course-b798e-default-rtdb.firebaseio.com/',
});

instance.defaults.headers.common['Authorization'] = 'Auth From instance';

export default instance;
