import clsx from 'clsx'
import React, { ReactNode } from 'react'

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  children: ReactNode
}

export const Heading: React.FC<HeadingProps> = ({
  level,
  className,
  children,
  ...rest
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  return (
    <Tag
      className={clsx(
        'text-white',
        level === 1 && 'text-3xl sm:4xl md:text-5xl font-bold',
        level === 2 && 'text-2xl sm:text-3xl md:text-4xl font-bold',
        level === 3 && 'text-[21px] sm:text-2xl md:text-3xl font-semibold',
        level === 4 && 'sm:text-[21px] font-midium',
        level === 5 && 'text-normal',
        level === 6 && 'text-light',
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
