"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Classy = /*#__PURE__*/function () {
  function Classy() {
    _classCallCheck(this, Classy);

    // Store the events here
    this.events = {};
  }

  _createClass(Classy, [{
    key: "callback",
    value: function callback(type) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // run the callback functions
      if (this.events[type]) this.events[type].forEach(function (event) {
        return event(data);
      });
    }
  }, {
    key: "on",
    value: function on(event, func) {
      // If we loaded an event and it's not the on event and we also loaded a function
      if (event && event != 'on' && event != 'callback' && this[event] && func && typeof func == 'function') {
        if (this.events[event] == undefined) this.events[event] = []; // Push a new event to the event array

        this.events[event].push(func);
      }
    }
  }]);

  return Classy;
}();

exports["default"] = Classy;