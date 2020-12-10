<template>
    <div class="wrapper">
        
        <ul class="cart-list">
            <li v-for="item in cartItems" :key="item.id" class="cart-list-item">
                <img :src="makeImagePath(item)" class="thumbnail">
                <div class="cart-list-item-details">
                <p> {{item.name}}</p>
                <p><em>${{item.price}}</em></p>
                <button class="cart-list-btn-remove" @click="removeFromCart(item.id)">Remove</button>
                </div>
            </li>
        </ul>
        <section class="total-section">
            <h1>Checkout</h1>
            <ul class="total-section-list">
                <li class="total-section-item">
                    <p class="total-section-item-label">{{cartItemsCount}} items</p>
                    <p>{{itemsSubtotal}}</p>
                </li>
                <li class="total-section-item">
                    <p class="total-section-item-label">
                        Shipping
                    </p>
                    <!-- multiple choice -->
                    <!-- update selectedShippingOption when user chooses -->
                    <select v-model="selectedShippingOption">
                        <option disabled value="">Please select an option</option>
                        <!-- shows all the options in shippingOptionsArray -->
                        <option :value="option.rate" :key="option.text" v-for="option in shippingOptionsArray">
                            {{option.text}} (${{option.rate}})
                        </option>
                    </select>
                </li>
                <li class="total-section-item">
                    <p class="total-section-item-label">Subtotal</p>
                    <p>{{subtotal}}</p>
                </li>
            </ul>
            <!-- if the shipping option hasnt been chosen: disable the button -->
            <button :disabled="!this.selectedShippingOption" class="total-section-checkout-button">Check out</button>
        </section>
    </div>
</template>

<script>
import {imagePath} from '@/mixins/imagePath.js'
export default {
    name: 'cart', 
    mixins: [imagePath],
    data() {
        return {
            selectedShippingOption: '',
            shippingOptionsArray: [
                {
                    text: '1 day',
                    rate: 20
                },
                {
                    text: '3-5 days',
                    rate: 10
                },
                {
                    text: '> 1 week',
                    rate: 0
                }
            ]
        } 
    },
    computed: {
        cartItems() {
            return this.$store.getters.cartItems
        }, 
        cartItemsCount() {
            return this.cartItems.length;
        }, 
        itemsSubtotal() {
            // reduce(): reduce array items to 1 value: sum of prices + 0
            return this.cartItems.reduce((total, item) => total + item.price, 0);
        }, 
        subtotal() {
            // return subtotal rounded to 2 decimals
            if(this.selectedShippingOption) {
                return (Number(this.itemsSubtotal) + Number(this.selectedShippingOption)).toFixed(2);
            }
            return '---';
        }
    }, 
    methods: {
        removeFromCart(itemId) {
            this.$store.dispatch('removeFromCart', itemId);
        }
    }
};
</script>
<style scoped>
.wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 75%;
    margin: 0 auto;
}
.cart-list {
    flex: 2;
    margin-right: 1rem;
}
.cart-list-item {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px groove gray;
}
.cart-list-item-details {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
}
.cart-list-btn-remove:hover {
    background-color: red;
}
.thumbnail {
    height: 100%;
    max-width: 150px;
    margin-top: .5rem;
}
.total-section {
    flex: 1;
    background: #FAFAFA;
    padding: 0 1rem 1rem;
}
.total-section-list {
    margin: 0;
}
.total-section-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.total-section-item-label {
    font-weight: bold;
    margin-right: 1rem;
}
.total-section-checkout-button {
    width: 100%;
}
</style>