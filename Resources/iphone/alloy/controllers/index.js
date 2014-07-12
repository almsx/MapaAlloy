function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.mapview = Alloy.Globals.Map.createView({
        region: {
            latitude: 33.74511,
            longitude: -84.38993,
            latitudeDelta: .01,
            longitudeDelta: .01
        },
        animate: true,
        regionFit: true,
        userLocation: true,
        id: "mapview",
        ns: "Alloy.Globals.Map"
    });
    $.__views.index.add($.__views.mapview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.Map = require("ti.map");
    $.mapview.mapType = Alloy.Globals.Map.NORMAL_TYPE;
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;