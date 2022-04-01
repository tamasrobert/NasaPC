import  Axios  from "axios";

Axios.defaults.baseURL='http://localhost:3000/api';

export default {
    SignUp(UserDate) {
        return Axios.post('/api/register', UserDate)
        .then(() => {})
    }
}