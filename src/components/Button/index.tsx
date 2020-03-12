import classnames from 'classnames'
import './index.less'

/**
 * @param {onClick} func 对外暴露的点击事件
 * @param {className} string 自定义类名
 * @param {type} string 按钮类型 primary | warning | info | default 默认值: default
 * @param {size} string 按钮大小 default | mini | large 默认值: default
 * @param {block} boolean 按钮是否独占一行 true | false 默认值: false
 */
declare interface ButtonProps {
  type?: string,
  size?: string,
  block?: boolean,
  className?: string,
  onClick?: any,
  children?: string | JSX.Element,
  disabled?: boolean
}

export default function Button(props: ButtonProps) {
  const { children, onClick, className, type, size, block = false, disabled } = props
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classnames('mv-btn', type?`mv-${type}`:'', block?'block':'', size?`mv-${size}`:'', className)}>
      { children }
    </button>
  )
}