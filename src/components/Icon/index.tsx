import classnames from 'classnames';
import './index.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, fab, far)

/**
  * @param {type} string icon type 图标类型 使用的font-awesome图标库 详见font-awesome
  * @param {theme} string icon theme 图标风格 fab | far | fas 默认值：far
  * @param {className} string custom className 自定义的类名
*/

declare interface IconProps {
  /**
    *图标名称 可选值 angry check-square等 (使用的font-awesome图标库 详见font-awesome)
  */
  type: string,
  /**
   * 自定义的类名 默认值：无
   */
  className?: string,
  /**
    * 图标类型 可选值 fab | far | fas 默认值：far
   */
  theme?: 'far' | 'fab' | 'fas'
}

export default function Icon(props: IconProps) {
  const {type, className, theme = "far"} = props
  return (
    <span className={classnames('mv-icon', className)}>
      <FontAwesomeIcon icon={[theme, type]} />
    </span>
  )
}