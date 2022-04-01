<template>
    <!-- <Navbar/> -->
        <main>
            <div class="row m-5">
                <h1 class="mt-5 mb-5" style="text-align:center">Admin panel: Add Product</h1>
                    <!-- Form starts here! -->
                     <div class="col-2"></div>
                    <form class="col-xs-12 col-lg-4 standardFormSettings">
                        <div class="mb-3 ">
                            <label class="form-label">Name:</label>
                            <input type="text" class="form-control" v-model="productName">
                        </div>
                        <div class="mb-3 ">
                            <label class="form-label">Price:</label>
                            <input type="number" class="form-control" v-model="productPrice">
                        </div>
                        <div class="mb-3 ">
                            <label class="form-label">Image:</label>
                            <input type="text" class="form-control" v-model="img">
                        </div>
                        <div class="mb-3 ">
                            <label class="form-label">Category:</label>
                            <select class="form-control" v-model="productCategory">
                                <option v-for="(category,i) in categories" :key='i'>{{category.name}}</option>
                            </select>
                        </div>
                        <div class="mb-3 ">
                            <label class="form-label">Description:</label>
                            <Editor v-model="productDescription" editorStyle="height: 320px">
                                <template #toolbar>
                                    <span class="ql-formats">
                                        <button class="ql-bold"></button>
                                        <button class="ql-italic"></button>
                                        <button class="ql-underline"></button>
                                    </span>
                                </template>
                            </Editor>
                        </div>
                        <Button label="Primary" @click="test()"/>
                    </form>
                    <!-- Form ends here! -->


                    <!-- Cropper starts here! -->
                    <div class="col-xs-12 col-lg-6">

                        <cropper
                            class="cropper"
                            :src="img"
                            :stencil-props="{
                                aspectRatio: 10/12
                            }"
                            @change="change"
                        />

                    </div>
                   
            </div>
        </main>
    <!-- <Footer/> -->
</template>

<script>
// import Navbar from '../../components/Navbar.vue'
// import Footer from '../../components/Footer.vue'
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'
import Button from 'primevue/button';
import Editor from 'primevue/editor';

export default {
  name: 'Add-Product',
  components: {
    // Navbar,
    Cropper,
    // Footer,
    Button,
    Editor
  },
  data(){
      return {
          productName:"asd",
          productPrice:" 123",
          productDescription:"Description placeholder",
          img: 'https://images.unsplash.com/photo-1600984575359-310ae7b6bdf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
          productCategory: "",
          categories: [
                    {name:'Motherboard'},
                    {name:'CPU'},
                    {name:'GPU'},
                    {name:'Memory'},
                    {name:'Drive'},
                    {name:'Power Supply Unit'},
                    {name:'Case'},
                    {name:'Other'},
          ]
      }
  },
  methods: {
      test() {
          console.log(this.productDescription)
          console.log(this.productCategory)
      }
  }

}
</script>

<style>
.cropper {
	height: 600px;
	width: 600px;
	background: #DDD;
}

</style>