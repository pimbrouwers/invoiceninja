define(['knockout', 'js/models/invoice'], function(ko, Invoice){

	function AppModel(){

		var self = this;

		self.data = {
			invoice: new Invoice(),
			template: ko.observable('ubuntu')
		};
		
	};

	ko.utils.extend(AppModel.prototype, {
		Initialize: function(){
			var self = this;

			ko.applyBindings(self);
		}
	});
	
	return AppModel;
});