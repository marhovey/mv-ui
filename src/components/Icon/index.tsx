import classnames from 'classnames';
import './index.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-common-types';
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
  type: IconName,
  /**
   * 自定义的类名 默认值：无
   */
  className?: string,
  /**
    * 图标类型 可选值 fab | far | fas 默认值：far
    * @default far
   */
  theme?: 'far' | 'fab' | 'fas'
}

export default function Icon(props: IconProps) {
  const {type = 'angry', className, theme = 'far', ...restProps} = props
  return (
    <span {...restProps} className={classnames('mv-icon', className)}>
      <FontAwesomeIcon icon={[theme, type]} />
    </span>
  )
}

Icon.defaultProps = {
  type: 'check-square',
  theme: 'far'
}