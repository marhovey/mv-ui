"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Icon;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./index.css");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");

var _freeBrandsSvgIcons = require("@fortawesome/free-brands-svg-icons");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _freeRegularSvgIcons = require("@fortawesome/free-regular-svg-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.fas, _freeBrandsSvgIcons.fab, _freeRegularSvgIcons.far);

function Icon(props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? 'angry' : _props$type,
      className = props.className,
      _props$theme = props.theme,
      theme = _props$theme === void 0 ? 'far' : _props$theme,
      restProps = __rest(props, ["type", "className", "theme"]);

  return /*#__PURE__*/_react.default.createElement("span", _extends({}, restProps, {
    className: (0, _classnames.default)('mv-icon', className)
  }), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: [theme, type]
  }));
}

Icon.defaultProps = {
  type: 'check-square',
  theme: 'far'
};