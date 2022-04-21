<template>
    <main>
        <Navbar/>

        <h1>About Us</h1>

        <p>
            Wellcome to our project! It is a pleasure to have you here, in our site.
            We, the three founding developers of this project wish you to have a great time
            during your visit. But first let us tell a few things about ourselfs.
        </p>

        <p>
            This WebShopProject or project NASAPC in other names started out as a school project which
            we turned in as a requirement for the last exam we had to complete in order to successfully
            finish the Software Developper and Tester educational course which we participated in.
        </p>
        <p> 
            This course provided us a two year long educational training which is by the way fully recognised by
            the Hungarian government and hosted by the country's one of the most famous if not the most famous secondary technical school 
            which is qualified to teach this subject.
        </p>
        <p>
            On this page we would like to give you some brief information about this site and about how it works.
            Please note that the information showed here will only cover some of the most basic functions this site 
            can de, for further information and for more details please read the full documentation attached to it's 
            github repositry.
        </p>
        <p>
            In order to enjoy the services we provide fully, please consider creating an account by clicking at the 
            signup menu at the bavigation bar or click <router-link to="/signup">HERE</router-link>
        </p>
        <p>
            If you already have an account then please log in and check out all of these awesome products we offer.
            To do this click at the "Products" menu in the navigationbar or by clicking <router-link to="/products">HERE</router-link>
        </p>


        <Footer/>
    </main>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
export default {
    name:"Contact",
    components: {
        Navbar,
        Footer
    }
}

</script>

<style>

</style>