<template>
    <div id="carouselMainPage" class="carousel carousel-dark slide w-100 mt-4" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselMainPage" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" v-for="(item,i) in carousel_items" :key="i" data-bs-target="#carouselMainPage" :data-bs-slide-to='i+1' :aria-label="'Slide' + i+2"/>
        </div>
        
        
        <div class="carousel-inner">

            <div class="carousel-item active" data-bs-interval="10000">
                <img src="/image/Kingston-FURY-16GB-KIT-DDR4-3200MHz-CL16-Beast-Black.jpg" class="d-block w-100" style="height:800px">
                <div class="carousel-caption d-none d-md-block">
                    <h4>Kingston-FURY-16GB-KIT-DDR4-3200MHz-CL16-Beast-Black</h4>
                    <p></p>
                </div>
            </div>

            <!-- <div class="carousel-item" data-bs-interval="10000">
                <img src="/image/Samsung-870-EVO-500GB.jpg" class="d-block w-100" style="height:800px">
                <div class="carousel-caption d-none d-md-block">
                    <h4>Samsung-870-EVO-500GB</h4>
                    <p></p>
                </div>
            </div> -->

            <!-- <div v-for="(item,i) in carousel_items" :key="i" class="carousel-item" data-bs-interval="10000" >
                <img :src="item.imageURl" class="d-block w-100" >
                <div class="carousel-caption d-none d-md-block">
                    <h4>{{item.title}}</h4>
                    <p>{{item.text}}</p>
                </div>
            </div> -->
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselMainPage" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselMainPage" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

</template>

<script>
export default {
    name: 'Carousel',
    // data() {
    //     return{
    //         carousel_items: [
    //             {title: "Wellcome", text: "", imageURl: "https://picsum.photos/id/1/600/300"},
    //             {title: "Carousel item 2", text: "Some placeholder text to fill the space. Enjoy!", imageURl: "https://picsum.photos/id/101/600/300"},
    //             {title: "Carousel item 3", text: "Some placeholder text to fill the space. Enjoy!", imageURl: "https://picsum.photos/id/103/600/300"},
    //             {title: "Carousel item 4", text: "Some placeholder text to fill the space. Enjoy!", imageURl: "https://picsum.photos/id/106/600/300"}
    //         ]
    //     }
    // }
}
</script>

<style>

</style>

