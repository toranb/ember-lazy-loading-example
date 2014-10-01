var ReportsRoute = Ember.Route.extend({
    beforeModel: function() {
        return $.getScript('js/lazy/reporting.js');
    }
});

export default ReportsRoute;
