define(['jquery', 'knockout', 'js/lib/jspdf'], function($, ko, jsPDF) {

    function register() {

        ko.bindingHandlers.contentEditable = {
            init: function(element, valueAccessor) {
                var value = valueAccessor();

                function onBlur() {
                    if (ko.isWriteableObservable(value)) {
                        value(this.innerHTML);
                    }
                };

                element.innerHTML = value(); //set initial value
                element.contentEditable = true; //mark contentEditable true
                element.addEventListener('blur', onBlur); //add blur listener
            }
        };

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

