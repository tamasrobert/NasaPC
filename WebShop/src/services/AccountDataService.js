import  Axios  from "axios";

Axios.defaults.baseURL='http://localhost:3000/api';



export default {

    GetSession() {
        return Axios.get('/session')
        .then((response) => {return response})
        .catch(err => {
            console.log(err)
            return Promise.reject(err)
        })
    },

    SignUp(UserData) {
        return Axios.post('/register', UserData)
        .then(() => {})
        .catch(err => {
            console.log(err)
        })
    },
    
    ActivateAccount(token) {
        return Axios.get('/verify-account/'+token)
        .then(() => {})
        .catch(err => {
            console.log(err)
        })
    },

    Login(UserData) {
        return Axios.post('/login', UserData)
        .then(() => {})
        .catch((err) => {
            console.log(err)
            return Promise.reject(err)
        })
    },

    Logout() {
        return Axios.get('/logout')
        .then(() => {})
        .catch(err => {
            console.log(err)
        })
    },

    RequestPasswordChange(email) {
        return Axios.post('/request-password-change', email)
        .then(() => {})
        .catch((err) => {
            console.log(err)
            return Promise.reject(err)
        })
    },


}