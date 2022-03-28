import  Axios  from "axios";

Axios.defaults.baseURL='http://localhost:3000/api';


export default {
    getAllProducts(){
        return Axios.get('/products')
        .then(resp => {
            console.log(resp)
        })
        .catch(err => {
            console.log(err)
        })
    }
    // getUserById(id){
    //     return Axios.get(`/user/${id}`)
    //     .then(res=>{
    //         return resp.data;
    //     })
    //     .catch()
    // }
    // ,
    // saveUser(user){
    //     return Axios.post('/users',user)
    //     .then(()=>{})
    // }
}