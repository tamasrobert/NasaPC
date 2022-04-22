import  Axios  from "axios";

Axios.defaults.withCredentials = true
Axios.defaults.baseURL='http://localhost:3000/api';



export default {

    GetSession() {
        return Axios.get('/session')
        .then(resp => {
            return resp
        })
        .catch()
    },

    SignUp(UserData) {
        return Axios.post('/register', UserData)
        .then(() => {})
        .catch(err => {
            console.log(err)
            return Promise.reject(err)
        })
    },
    
    ActivateAccount(token) {
        return Axios.get('/verify-account/'+token)
        .then(() => {})
        .catch(err => {
            console.log(err)
            return Promise.reject(err)
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
            return Promise.reject(err)
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

    changePassword(UserData) {
        return Axios.get('/change-password/', UserData)
        .then(() => {})
        .catch(err => {
            console.log(err)
            return Promise.reject(err)
        })
    },

    getWishList(){
        return Axios.get('/wishlist')
        .then(resp => {
            return resp.data
        })
        .catch(err => {
            console.log(err)
            return Promise.reject(err)
        })
    },

    addToWishList(productId) {
        return Axios.post('/add-to-wishlist/'+productId)
        .then(() => {})
        .catch(err => {
            console.log(err)
            return Promise.reject(err)
        })
    },

    removeFromWishList(productId) {
        return Axios.post('/remove-from-wishlist/'+productId)
        .then(() => {})
        .catch(err => {
            console.log(err)
            return Promise.reject(err)
        })
    },


}