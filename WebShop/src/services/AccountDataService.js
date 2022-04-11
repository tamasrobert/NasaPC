import  Axios  from "axios";

Axios.defaults.baseURL='http://localhost:3000/api';



export default {
    error:"asdasdasdasd",

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
            return Promise.reject(err) //  this.error = "anyaaaaaaaad"
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