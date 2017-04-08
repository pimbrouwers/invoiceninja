define(['jquery', 'knockout', 'js/lib/jspdf'], function($, ko, jsPDF) {

    function register() {

        ko.bindingHandlers.generatePDF = {
            init: function(element) {

                function onClick() {
                    var pdf = new jsPDF('p', 'pt', 'letter');
                    pdf.canvas.height = 72 * 11;
                    pdf.canvas.width = 72 * 8.5;
                    
                    pdf.fromHTML(document.body);

                    pdf.save('test.pdf');                    
                };

                element.addEventListener("click", onClick);
            }
        };
    };



    return {
        Register: register
    };

});

