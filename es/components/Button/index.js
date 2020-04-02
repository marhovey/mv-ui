function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

import React from 'react';
import classnames from 'classnames';
import "./index.css";
export default function Button(props) {
  var children = props.children,
      onClick = props.onClick,
      className = props.className,
      type = props.type,
      size = props.size,
      block = props.block,
      disabled = props.disabled,
      restProps = __rest(props, ["children", "onClick", "className", "type", "size", "block", "disabled"]);

  return /*#__PURE__*/React.createElement("button", _extends({}, restProps, {
    onClick: onClick,
    disabled: disabled,
    className: classnames('mv-btn', type ? "mv-".concat(type) : '', block ? 'block' : '', size ? "mv-".concat(size) : '', className)
  }), children);
}
Button.defaultProps = {
  block: false,
  disabled: false,
  type: 'default'
};