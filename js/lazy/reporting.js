define("vendor/foo",
  ["exports"],
  function(__exports__) {
    "use strict";
    var Foo = Ember.Object.extend({
        help: function() {
            console.log('inside the help property');
        }.property()
    });
    __exports__["default"] = Foo;
});
