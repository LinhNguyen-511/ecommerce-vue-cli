<template>
    <div>
        <section class="wrapper">
            <img :src="imagePath(product)" alt="">
            <h2>{{product.name}}</h2>
            <p>Price: ${{product.price}}</p>
            <p><em>{{product.quantity}} left in stock</em></p>
        </section>
    </div>
</template>

<script>
export default {
    // name the component
    name:'product',
    data() {
        return  {
            // add data object to store the component's data
            // one product property: specific product we want to display
            // get access to the correct product with the getter
            // getter: gives direct access to the current state of the application
            // get the id through the route 
            product: this.$store.getters.product(this.$route.params.id)
        }
    }, methods: {
        imagePath(product) {
            return require(`../assets/img/${product.image}`);
        }
    }
};
</script>

<style lang="css" scoped>
/* TODO: add styling */
</style>