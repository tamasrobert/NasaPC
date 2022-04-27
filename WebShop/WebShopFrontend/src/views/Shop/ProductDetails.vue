<template>
    <main class="mainContent">
        <Navbar/>
        <div class="m-5">
            <div class="row">
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-0"></div>
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 card m-2">
                    <div class="CategoryIcon">							
                        <i class="pi pi-tag"></i>
						<span style="font-weight:bold">{{this.product.category}}</span>
					</div>
                    <img :src="'/image/'+this.product.path" class="cardImage" :alt="this.product.path">
                    <h3 class="cardName">{{this.product.name}}</h3>
                    <div class="line"/>
                    <p class="cardDescription">{{this.product.description}}</p>
                    <div class="review" style="margin-top:30px">
                        <h5>Share your thoughts:</h5>
                        <Rating v-model="this.rating" :cancel="false"/>
                        <Textarea v-model="this.comment" rows="5" cols="80" />
                    </div>
                    <div class="d-flex">
                        <Button label="Send rating" class="p-button-raised p-button-success" @click="postReview()" style="margin-right:25px"/>
                        <Button label="Remove rating" class="p-button-raised p-button-danger" @click="postReview()"/>
                    </div>
                    <div class="line"/>
                    <div class="otherComments">
                        <div class="comment-box" v-for="(review,i) in this.product.reviews" :key="i">
                           <h4>{{review.email}}</h4>
                            <Rating v-model="review.rating" :readonly="true" :cancel="false"/>
                            <p>{{review.comment}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-0"></div>
            </div>
            

        </div>
        <Footer/>
    </main>
</template>

<script>
// import InputText from 'primevue/inputtext';
// import Dialog from 'primevue/dialog'
// import Password from 'primevue/password';
import Button from 'primevue/button'
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import DataService from '../../services/DataService.js';
import Textarea from 'primevue/textarea';
import Rating from 'primevue/rating';
import AccountDataService from '../../services/AccountDataService.js'
export default {
    name:"Contact",
    components: {
        // Dialog,
        Button,
        Navbar,
        Footer,
        Textarea,
        Rating
        // Password,
        // InputText
    },
    data() {
        return {
            product: "",
            comment: "",
            rating: ""
        }
    },
    methods: {
        postReview() {
            AccountDataService.postReview(this.product._id,{"rating": this.rating, "comment": this.comment})
            .then(() => {})
            .catch(err => {console.log(err.response.data.error)});
        },
        removeReview() {
            AccountDataService.postDeleteReview(this.product._id)
            .then(() => {})
            .catch(err => {console.log(err.response.data.error)});
        }
    },
    mounted() {
        DataService.getProductById(this.$route.params.Id)
        .then((resp) => {this.product = resp})
        .catch((err) => {console.log(err.response.data)})
        
    }
}

</script>

<style lang="scss" scoped>
@import "../../assets/css/CostumeVariables.scss";
.card {
    background: #ffffff;
    padding: 2rem;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    border-radius: 4px;
    margin-bottom: 2rem;
    align-items: center;

    .cardImage{
        position: relative;
        margin-left: 5%;
        margin-right: 5%;
        margin-top: 2%;
        width: 90%;
    }
    .line{
        background: $darkblue;
        position: relative;
        margin-left: 3%;
        margin-right: 3%;
        margin-top: 2%;
        border-radius: 2px;
        width: 94%;
        height: 3px;
    }
    .cardName{
        color: $darkblue;
        text-decoration: none;
    }
    .CategoryIcon{
        position: absolute;
        top: 2%;
        left: 2%;
        font-size: 20px;
    }
    .cardDescription{
        position: relative;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 2%;
        width: 80%;
    }
    .otherComments {
        margin-top: 10px;
        position: relative;
        margin-left: 10%;
        margin-right: 10%;
        width: 80%;
        background-color: $lightblue;
    }
    .comment-box {
        margin-top: 15px;
        margin-left: 15px;
        background-color: $lightestblue;
        width: 75%;
        align-content: flex-start;
        border-radius: 15px;

        h4{
           padding: 5px;
        }
        p{
            // margin-top: 10px;
            margin-left: 30px;
            // margin-bottom: 20px;
            font-size: 1.1rem;
            padding-left: 10px;
            padding-bottom: 10px;
        }
    }
    
}

</style>