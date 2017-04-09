define([
	'knockout', 
	'text!js/components/invoice-editor/invoice-editor.html'
],function(ko, html){

	function Editor(params){
		var self = this;

		self.invoice = params.invoice;
	};

	return { viewModel: Editor, template: html };

});