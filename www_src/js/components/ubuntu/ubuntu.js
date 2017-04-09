define([
	'knockout',
	'text!js/components/ubuntu/ubuntu.html'
], function(ko, html) {
    
	function Ubuntu(params) {
        var self = this;

        self.invoice = params.invoice;
    };

    ///
    //proto
    ///
    ko.utils.extend(Ubuntu.prototype, {
    });

    return { viewModel: Ubuntu, template: html };
});

