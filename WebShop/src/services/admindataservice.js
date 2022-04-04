import  Axios  from "axios";
Axios.defaults.baseURL='http://localhost:3000/api';

export default {
    addProductNoImage(product){
        return Axios.post('/api/admin/add-product-no-image', product)
        .then(()=>{})
        .catch(err => {
            console.log(err)
        })
    },

    addProduct(product){
        return Axios.post('/api/admin/add-product', product)
        .then(()=>{})
        .catch(err => {
            console.log(err)
        })
    },

    modifyProduct(id,product){
        return Axios.put('/admin/modify-product/'+id, product)
        .then(()=>{})
        .catch(err => {
            console.log(err)
        })
    },

    deleteProduct(id){
        return Axios.put('/admin/delete-product/'+id)
        .then(()=>{})
        .catch(err => {
            console.log(err)
        })
    }
}