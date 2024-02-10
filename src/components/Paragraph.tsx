import clsx from 'clsx'
import React, { ReactNode } from 'react'

type HeadingProps = {
  className?: string
  children: ReactNode
}

export const Paragraph: React.FC<HeadingProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <p
      className={clsx(
        'text-md sm:text-lg  font-normal',
        className
      )}
      {...rest}
    >
      {children}
    </p>
  )
}
