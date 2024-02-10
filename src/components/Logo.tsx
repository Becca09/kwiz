import Image from 'next/image'
import React from 'react'

interface LogoProps {
  src: string
}

export const Logo: React.FC<LogoProps> = ({ src }) => {
  return (
    <Image
      className="w-[35px] sm:w-[65px] sm:h-[65px]"
      src={src}
      width={85}
      height={85}
      alt="quiz logo"
    />
  )
}
