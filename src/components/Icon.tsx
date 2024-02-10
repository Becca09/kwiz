import * as React from 'react'

interface IconProps {
  id?: string
  className?: string
  width?: string
  height?: string
  fill?: string
}

export const Icon: React.FunctionComponent<IconProps> = (props) => {
  const { id, className, height, width } = props
  return (
    <svg className={className} width={width} height={height}>
      <use href={`/assets/images/sprite.svg#${id}`} />
    </svg>
  )
}
