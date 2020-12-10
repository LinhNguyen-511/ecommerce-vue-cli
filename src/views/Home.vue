<template>
    <div>
        <section class="wrapper">
            <ul class="products">
                <li v-for="product in products" :key="product.id" class="product">
                    <!-- make the product link to its respective detail page -->
                    <!-- id: the :id in router.js -->
                    <!-- product.id: key -->
                    <!-- pass the product id in when the property is used  -->
                    <router-link :to="{name: 'product', params: {id: product.id}}">
                    <img :src="imagePath(product)" alt="" class="product-image">
                    <p class="product-title">{{product.name}}</p>
                    <p><em>${{product.price}}</em></p></router-link>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Home', 
    computed: {
        //return the array of product in store.js
        products() {
            return this.$store.state.products;
        }
    },
    methods: {
        //return image path for each product 
        //this is in methods because this is an argument 
        //computed doesnt take arguments
        imagePath(product) {
            return require(`../assets/img/${product.image}`);
        }
    }
};
</script> 

<style lang="css" scoped>

.wrapper {
    max-width: 90vw;
    margin: 0 auto;
}
.products {
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
.product {
    text-align: center;
}

.product-image {
    width: 400px;
    height: 600px;
}

.product-title {
    font-weight: bold;
}

@media screen and (max-width: 832px) {
    .wrapper{
        max-width: 100%;
    }
    .products {
        width: 100vw;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .product img {
    width: 360px;
    height: 560px;
    }
}

</style>