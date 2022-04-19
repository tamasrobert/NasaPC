<template>
	<div>
        <DataTable :value="products" responsiveLayout="scroll">
            <template #header>
                <div class="table-header">
                    These are your Order(s):
                    <Button icon="pi pi-refresh" />
                </div>
            </template>
            <Column field="name" header="Name"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.image" class="product-image" />
                </template>
            </Column>
            <Column field="price" header="Price">
                <template #body="slotProps">
                    {{slotProps.data.price}}
                </template>
            </Column>
            <Column field="rating" header="Reviews">
                <template #body="slotProps">
                    <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
                </template>
            </Column>
            <template #footer>
                In total there are {{products ? products.length : 0 }} products.
                <!-- Total price: {{totalPrice}} -->
            </template>
        </DataTable>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Rating from 'primevue/rating'
import Button from 'primevue/button'

export default {
    name: "Orders",
    components: {
        DataTable,
        Column,
        Rating,
        Button
    },
    setup() {
        onMounted(() => {
            products.value = [
              {name: "1Cartitem", price: "1500", description: "A very good product!", path: "https://picsum.photos/200/300", category: "toothbrush", _id: 1},
              {name: "1Cartitem", price: "1500", description: "A very good product!", path: "https://picsum.photos/200/300", category: "toothbrush", _id: 2},
              {name: "1Cartitem", price: "1500", description: "A very good product!", path: "https://picsum.photos/200/300", category: "toothbrush", _id: 3},
              {name: "1Cartitem", price: "1500", description: "A very good product!", path: "https://picsum.photos/200/300", category: "toothbrush", _id: 4},
              {name: "1Cartitem", price: "1500", description: "A very good product!", path: "https://picsum.photos/200/300", category: "toothbrush", _id: 5},
              {name: "1Cartitem", price: "1500", description: "A very good product!", path: "https://picsum.photos/200/300", category: "toothbrush", _id: 6},
          ]
          
        })

        const products = ref();
        var totalPrice = ref()
        const totalPriceCalc = () => {
            products.value.forEach(product => {
                totalPrice.value += product.value.price
            });
        }
        

        return { products, totalPrice, totalPriceCalc }
    }
}
</script>

<style lang="scss" scoped>
.table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.product-image {
    width: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
}
</style>                    