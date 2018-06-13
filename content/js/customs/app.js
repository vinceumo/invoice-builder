// https://invoice-generator.com/#/1
document.addEventListener('DOMContentLoaded', function(){ 
    var app = new Vue({
        el: '#invoice-app',
        data: {
            invoiceCurrency: "£",
            taxRate: 20,
            discountRate: 0,
            items: [
                { description: 'item1', quantity: 1, price: 300 },
                { description: 'item2', quantity: 1, price: 25 },
                { description: 'item3', quantity: 1, price: 10 },
                { description: 'item4', quantity: 3, price: 50 }
            ],
            currencies: [
                'Euro',
                'Pound',
                `Dollar`
            ]
        },
        methods: {
            addNewItem: function() {
                this.items.push(
                    { description: '', quantity: 0, price: 0 }
                )
            },
            deleteItem: function(index) {
                this.items.splice(index, 1)
            }
        },
        computed: {
            subTotal: function() {
                var total = this.items.reduce(function(accumulator, item) {
                    return accumulator + (item.price * item.quantity);
                }, 0)

                return total;
            },
            discountTotal: function() {
                return this.subTotal * (this.discountRate / 100);
            },
            taxTotal: function() {
                return (this.subTotal - this.discountTotal) * (this.taxRate / 100);
            },
            grandTotal: function() {
                return (this.subTotal - this.discountTotal) + this.taxTotal;
            }
        },
        filters: {
            currency: function(value) {
                return value.toFixed(2);
            }
        }
    });
}, false);