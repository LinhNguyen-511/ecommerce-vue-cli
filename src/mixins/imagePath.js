// mixin is a flexible way to reuse functionality in Vue componentss 
export const imagePath = {
    methods: {
        makeImagePath(product) {
            return require (`../assets/img/${product.image}`);
        }
    }
}