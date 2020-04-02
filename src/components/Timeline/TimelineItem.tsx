import React from 'react';
import classnames from 'classnames';

export interface TimelineItemProps{
  dot?: React.ReactNode,
  children?: React.ReactNode,
  className?: string,
  style?: React.CSSProperties
}

export default function TimelineItem (props: TimelineItemProps) {
  
  const { dot, children, className, style } = props
  
  const preFix = 'mv-timeline-item'

  return(
    <div style={style} className={classnames(className, preFix)}>
      <div className={`${preFix}-tail`}></div>
      <div className={`${preFix}-head`}>
        {dot}
      </div>
      <div className={`${preFix}-content`}>
        {children}
      </div>
    </div>
  )
}