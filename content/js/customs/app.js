// https://invoice-generator.com/#/1
document.addEventListener('DOMContentLoaded', function(){ 
    var app = new Vue({
        el: '#invoice-app',
        data: {
            invoiceCurrency: "£",
            products: [
                { description: 'product1', quantity: 1, price: 300 },
                { description: 'product2', quantity: 1, price: 25 },
                { description: 'product3', quantity: 1, price: 10 },
                { description: 'product4', quantity: 3, price: 50 }
            ]
        },
        methods: {
            addNewProduct: function() {
                this.products.push(
                    { description: '', quantity: 0, price: 0 }
                )
            }
        },
        computed: {
            grandTotal: function() {
                var total = this.products.reduce(function(accumulator, product) {
                    return accumulator + (product.price * product.quantity);
                }, 0)

                return total;
            }
        },
        filters: {
            currency: function(value) {
                return value.toFixed(2);
            }
        }
    });
}, false);