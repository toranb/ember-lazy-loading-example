define("js/models/report",
  ["exports"],
  function(__exports__) {
    "use strict";
    var Report = Ember.Object.extend({
        foo: function() {
            return 'foo...';
        }.property()
    });
    __exports__["default"] = Report;
});

define("js/controllers/reports",
  ["js/models/report","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Report = __dependency1__["default"];
    var ReportsController = Ember.ArrayController.extend({
        bar: function() {
            var model = Report.create();
            var foo = model.get('foo');
            return '%@ and ... bar'.fmt(foo);
        }.property()
    });
    __exports__["default"] = ReportsController;
});

define("js/views/reports",
  ["exports"],
  function(__exports__) {
    "use strict";
    var ReportsView = Ember.View.extend({
        defaultTemplate: Ember.Handlebars.compile('<h3>Hi</h3>{{foo}} and {{bar}}')
    });
    __exports__["default"] = ReportsView;
});
