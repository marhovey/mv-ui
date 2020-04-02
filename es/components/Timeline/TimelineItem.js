import React from 'react';
import classnames from 'classnames';
export default function TimelineItem(props) {
  var dot = props.dot,
      children = props.children,
      className = props.className,
      style = props.style;
  var preFix = 'mv-timeline-item';
  return /*#__PURE__*/React.createElement("div", {
    style: style,
    className: classnames(className, preFix)
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(preFix, "-tail")
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(preFix, "-head")
  }, dot), /*#__PURE__*/React.createElement("div", {
    className: "".concat(preFix, "-content")
  }, children));
}