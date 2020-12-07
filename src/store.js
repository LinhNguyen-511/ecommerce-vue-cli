// This file stores all the global state data with Vuex
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        //default empty: users dont have items in cart 
        cart: [],
        products: [
            {
                name: 'chair 1',
                id: 1,
                price: 59.99,
                image: 'chair1.png', 
                quantity: 10
            },
            {
                name: 'chair 2',
                id: 2,
                price: 299.99,
                image: 'chair2.png',
                quantity: 10
            },
            {
                name: 'chair 3',
                id: 3,
                price: 459.99,
                image: 'chair3.png',
                quantity: 10
            },
            {
                name: 'chair 4',
                id: 4,
                price: 39.99,
                image: 'chair4.png',
                quantity: 10
            }
        ]
    }, mutations: {}, actions: {},
    // getter called from Product.vue
    getters: {
        // first argument of the getter is always state
        // method-style access: passing another argument: product id
        // filter: get the product we want on id match
        // Number: id is string in the process -> have to make it a number 
        product: (state) => (id) => {
            return state.products.filter(p => p.id === Number(id))[0]
        }
    }    
});