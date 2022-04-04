import  Axios  from "axios";

Axios.defaults.baseURL='http://localhost:3000/api';

export default {
    SignUp(UserData) {
        return Axios.post('/register', UserData)
        .then(() => {})
        .catch(err => {
            console.log(err)
        })
    },

    Login(UserData) {
        return Axios.post('/login', UserData)
        .then(() => {})
        .catch(err => {
            console.log(err)
        })
    },

    Logout() {
        return Axios.get('/logout')
        .then(() => {})
        .catch(err => {
            console.log(err)
        })
    }

}