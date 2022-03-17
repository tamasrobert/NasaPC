<template>
    <div id="carouselMainPage" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselMainPage" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" v-for="(item,i) in carousel_items" :key="i" data-bs-target="#carouselMainPage" :data-bs-slide-to='i+1' :aria-label="'Slide' + i+2"/>
        </div>
        <!-- <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselMainPage" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselMainPage" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselMainPage" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div> -->
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
                <img src="https://picsum.photos/600/500" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
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
    data() {
        return{
            carousel_items: [
                {title: "Carousel item 1", text: "Some placeholder text to fill the space. Enjoy!", imageURl: "https://picsum.photos/600/500"},
                {title: "Carousel item 1", text: "Some placeholder text to fill the space. Enjoy!", imageURl: "https://picsum.photos/600/500"},
                {title: "Carousel item 1", text: "Some placeholder text to fill the space. Enjoy!", imageURl: "https://picsum.photos/600/500"},
                {title: "Carousel item 1", text: "Some placeholder text to fill the space. Enjoy!", imageURl: "https://picsum.photos/600/500"}
            ]
        }
    }
}
</script>

<style>

</style>


// check this
// https://ssense.github.io/vue-carousel/guide/
// https://wlada.github.io/vue-carousel-3d/guide/
