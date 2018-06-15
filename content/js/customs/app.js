// https://invoice-generator.com/#/1
document.addEventListener('DOMContentLoaded', function(){ 
    var app = new Vue({
        el: '#invoice-app',
        data: {
            invoiceCurrency: {
                "symbol": "$",
                "name": "US Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "USD",
                "name_plural": "US dollars"
            },
            taxRate: 20,
            discountRate: 0,
            items: [
                { description: 'Item name', quantity: 0, price: 0 },
                { description: 'Item name', quantity: 0, price: 0 },

            ],
            currencies: currenciesData

        },
        methods: {
            addNewItem: function() {
                this.items.push(
                    { description: 'Item name', quantity: 0, price: 0 }
                )
            },
            deleteItem: function(index) {
                this.items.splice(index, 1)
            },
            decimalDigits: function(value) {
                return this.invoiceCurrency.symbol + ' ' + value.toFixed(this.invoiceCurrency.decimal_digits);
            },
            printInvoice: function() {
                window.print();
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
                var total = this.subTotal * (this.discountRate / 100);
                return total;
            },
            taxTotal: function() {
                var total = (this.subTotal - this.discountTotal) * (this.taxRate / 100);
                return total;
            },
            grandTotal: function() {
                var total = (this.subTotal - this.discountTotal) + this.taxTotal;
                return total;
            }
        }
    });
}, false);