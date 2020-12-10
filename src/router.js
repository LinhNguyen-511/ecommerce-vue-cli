
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Product from './views/Product.vue';
import Cart from './views/Cart.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            // route name 
            name: 'home',
            // map the route to the component
            component: Home
        },
        {
            //:id is dynamic 
            // used anytime we want to use a piece of data 
            // NOT raw string
            path: '/products/:id',
            name: 'product',
            component: Product
        }
        ,
        {
            path: '/cart/',
            name: 'cart',
            component: Cart
        }
    ]
});
