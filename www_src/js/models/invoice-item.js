define(['knockout'], function(ko) {
    function InvoiceItem(data) {
        var self = this;

        self.description = ko.observable();
        self.quantity = ko.observable();
        self.unitPrice = ko.observable();
        self.total = ko.pureComputed(self.getTotal.bind(self));

        self.hydrate(data);
    };

    ko.utils.extend(InvoiceItem.prototype, {
        toJS: function() {
            var self = this;

            return {
                description: self.description.peek(),
                quantity: self.quantity.peek(),
                unitPrice: self.unitPrice.peek()
            };
        },
        hydrate: function(data) {
            var self = this;

            if (typeof data == 'undefined' || data == null) {
                data = {
                    description: 'Some Work',
                    quantity: '3.5hrs',
                    unitPrice: '35/hr'
                };
            }

            self.description(data.description);
            self.quantity(data.quantity);
            self.unitPrice(data.unitPrice);
        },
        getTotal: function() {
            var self = this,
                unitPrice = ko.unwrap(self.unitPrice),
                quantity = ko.unwrap(self.quantity);

            return '$' + ((parseFloat(unitPrice) || 0) * (parseFloat(quantity) || 0)).toFixed(2);
        }
    })

    return InvoiceItem;
});

