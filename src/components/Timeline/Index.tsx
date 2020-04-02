import React from 'react';
import classnames from 'classnames';
import TimelineItem, { TimelineItemProps } from './TimelineItem';
import './index.less';

export interface TimelineProps {
  className?: string,
  children?: React.ReactNode,
  style?: React.CSSProperties
}

export default class Timeline extends React.Component<TimelineProps, any>{
  
  static Item: React.SFC<TimelineItemProps> = TimelineItem

  static defaultProps = {
    className: ''
  }

  render() {
    const { children, style, className, ...restProps } = this.props
    const timelineItems = React.Children.toArray(children)
    const items = timelineItems.filter(item => !!item)
    const itemLen = React.Children.count(items)
    const child = React.Children.map(items, (ele: React.ReactElement<any>, ind) => {
      return React.cloneElement(ele, {
        className: classnames([
          ele.props.className,
          ind === itemLen - 1?'last-item':''
        ])
      })
    })
    return (
      <div {...restProps} className={classnames(className, 'mv-timeline')}>
        {child}
      </div>
    )
  }
}