import  Axios  from "axios";

Axios.defaults.baseURL='http://localhost:3000/api';

export default {
    SignUp(UserData) {
        return Axios.post('/register', UserData)
        .then(() => {})
    },

    Login(UserData) {
        return Axios.post('login', UserData)
        .then(() => {})
    },

    Logout() {
        return Axios.get('/logout')
        .then(() => {})
    }

}