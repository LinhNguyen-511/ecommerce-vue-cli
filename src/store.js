// This file stores all the global state data with Vuex
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        //default empty: users dont have items in cart 
        // cart array has the id of 1 product in products array
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
    }, mutations: {
        addToCart(state, payload) {
            // add the product id to the cart array 
            state.cart.push(Number(payload))
        }, 
        decrementProductInventory (state, payload) {
            // find(): pick out the correct product 
            let product = state.products.find(product => product.id === Number(payload))
            // reduce the product quantity 
            product.quantity--;
        }, 
        removeFromCart(state, payload) {
            state.cart.splice(state.cart.indexOf(Number(payload), 1))
        }, 
        incrementProductInventory(state, payload) {
            let product = state.products.find(product => product.id === Number(payload)) 
            product.quantity++;
        }
    }, actions: {
        // payload: data that is passed around (product id)
        // commit(): triggers 2 mutations
        addToCart({commit}, payload) {
            commit('addToCart', payload)
            commit('decrementProductInventory', payload)
        },
        removeFromCart({commit}, payload) {
            commit('removeFromCart', payload)
            commit('incrementProductInventory', payload)
        }
    },
    // getter called from Product.vue
    getters: {
        // first argument of the getter is always state
        // method-style access: passing another argument: product id
        // filter: get the product we want on id match
        // Number: id is string in the process -> have to make it a number 
        product: (state) => (id) => {
            return state.products.filter(p => p.id === Number(id))[0]
        }, 
        // maps the array of id's into their respective product objects
        // map() creates a new array populated w the result of calling 
        // a function on every element in the calling array
        cartItems: (state) => {
            // iterate through the cart array
            return state.cart.map(
                // for each item in the cart -> find the product whose id matches
                // find() returns value of the first element in the array that 
                // satisfies the testing function: product.id === itemId
                itemId => state.products.find(
                    product => product.id === itemId
                )
            )
        }
    }    
});