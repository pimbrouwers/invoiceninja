require.config({});

var App = null;

require(['jquery', 'knockout', 'js/app', 'js/dom-bindings'], function($, ko, AppModel, DomBindings) {
    DomBindings.Register();

    ko.components.register('invoice-editor', { require: 'js/components/invoice-editor/invoice-editor' });
    ko.components.register('ubuntu', { require: 'js/components/ubuntu/ubuntu' });

    App = new AppModel();
    App.Initialize();
});

