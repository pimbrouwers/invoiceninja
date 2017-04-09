define(['knockout', 'js/models/invoice-item'], function(ko, InvoiceItem){

	function Invoice(){
		var self = this;

		self.title = ko.observable('Title');
		self.subtitle = ko.observable('Subtitle');
		self.date = ko.observable('June 4, 2016');
		self.invoicee = {
			title: ko.observable('Some Corp.'),
			address: ko.observable('123 Acme Drive, Toronto ON A1A 1A1')
		};
		self.notes = ko.observable('This is a great invoice!');		
		self.subtotal = ko.pureComputed(self.getSubtotal.bind(self));
		self.tax = ko.observable();
		self.total = ko.pureComputed(self.getTotal.bind(self));

		//items
		self.items = ko.observableArray();
		self.newItem = ko.observable(new InvoiceItem());

		self.methods = {
			addNewItem: self.addNewItem.bind(self)
		};
	};

	ko.utils.extend(Invoice.prototype, {
		addNewItem: function(){
			var self = this,
				item = ko.toJS(self.newItem);

			self.items.push(new InvoiceItem(item));

			self.newItem(new InvoiceItem());
		},
		getSubtotal: function(){
			var self = this,				
				subtotal = 0,
				items = ko.unwrap(self.items);

			if(typeof items != 'undefined' && items != null){
				ko.utils.arrayForEach(items, function(item){
					var itemTotalStr = ko.unwrap(item.total);

					if(!isNaN(itemTotalStr)){
						subtotal += parseInt(itemTotalStr);
					}
				});
			}

			return subtotal;
		},
		getTotal: function(){
			var self = this,
				subtotal = ko.unwrap(self.subtotal);

			return subtotal;
		}
	});

	return Invoice;	
});