import React from 'react'
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { Heading } from '@/components/Heading';




const page = () => {

    const LI = [
        { label: 'Art', href: '/art', },
        { label: 'Law', href: '/law', },
        { label: 'Science', href: '/science', },
        { label: 'English', href: '/english', },
        { label: 'History', href: '/history', },
        { label: 'Blockchain', href: '/blockchain', },
        { label: 'Mathematics', href: '/mathematics', },

    ];

    return (
        <div>
            <Heading level = {3} className='text-white text-center mt-5'>Select a topic or subject to have a quiz on </Heading>
            <Icon id="arrow" className={`h-6 w-6 mr-2 mt-1`} />

            <div>
                <ul className="flex flex-col gap-8 mt-3">
                    {LI.map((item, index) => (
                        <li
                            key={index}
                            className={`font-bold cursor-pointer flex flex-row justify-center items-center  text-white  hover:text-primary-100 text-center  `}
                        >
                            <Link href={item.href} className="mt-2">
                                {item.label}
                            </Link>

                            <Icon id="arrow" className={`h-6 w-6 mr-2 mt-1`} />

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default page