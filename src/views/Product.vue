<template>
    <div>
        <section class="wrapper">
            <!-- 3. use the correct method name -->
            <img :src="makeImagePath(product)" alt="">
            <div class="product-details">
            <h2>{{product.name}}</h2>
            <p>Price: ${{product.price}}</p>
            <p><em>{{product.quantity}} left in stock</em></p>
            <button class="add-btn" @click="addToCart">Add to cart</button>
            </div>    
        </section>
    </div>
</template>

<script>
// 1. import the mixin
import {imagePath} from '@/mixins/imagePath.js'
export default {
    // name the component
    name:'product',
    // 2. register the mixin
    mixins: [imagePath],
    data() {
        return  {
            // add data object to store the component's data
            // one product property: specific product we want to display
            // get access to the correct product with the getter
            // getter: gives direct access to the current state of the application
            // get the id through the route 
            product: this.$store.getters.product(this.$route.params.id)
        }
    
    }, 
    methods: {
        // dispatch an action in store.js
        addToCart() {
            this.$store.dispatch('addToCart', this.$route.params.id);
        }
    }
};
</script>

<style lang="css" scoped>
.wrapper {
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.add-btn:hover {
    background-color: #2c3e50;
}

</style>