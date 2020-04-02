"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TimelineItem;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TimelineItem(props) {
  var dot = props.dot,
      children = props.children,
      className = props.className,
      style = props.style;
  var preFix = 'mv-timeline-item';
  return /*#__PURE__*/_react.default.createElement("div", {
    style: style,
    className: (0, _classnames.default)(className, preFix)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(preFix, "-tail")
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(preFix, "-head")
  }, dot), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(preFix, "-content")
  }, children));
}