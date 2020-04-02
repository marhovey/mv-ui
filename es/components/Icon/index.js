function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import classnames from 'classnames';
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, fab, far);
export default function Icon(props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? 'angry' : _props$type,
      className = props.className,
      _props$theme = props.theme,
      theme = _props$theme === void 0 ? 'far' : _props$theme,
      restProps = __rest(props, ["type", "className", "theme"]);

  return /*#__PURE__*/React.createElement("span", _extends({}, restProps, {
    className: classnames('mv-icon', className)
  }), /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: [theme, type]
  }));
}
Icon.defaultProps = {
  type: 'check-square',
  theme: 'far'
};