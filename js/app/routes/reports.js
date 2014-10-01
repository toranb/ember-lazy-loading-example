var ReportsRoute = Ember.Route.extend({
    beforeModel: function() {
        return $.getScript('js/lazy/reporting.js');
    },
    afterModel: function() {
        var Foo = require('vendor/foo')['default'].create();
        Foo.get('help');
    }
});

export default ReportsRoute;
