import  Axios  from "axios";

Axios.defaults.baseURL='http://localhost:3000/api';

export default {
    addProductNoImage(product){
        return Axios.post('/api/admin/add-product-no-image', product)
        .then(()=>{})
    }
}