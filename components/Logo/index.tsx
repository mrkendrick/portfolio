import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" passHref>
      <a>
        <div className="flex items-center space-x-3">
          <Image
            src="/images/letter-c.png"
            width={50}
            height={50}
            layout="fixed"
            alt="Charles Duruaku"
          />
          <div className="flex items-center space-x-2">
            <h2 className="font-bold text-xl">Charles</h2>
            <h3 className="text-xl">Duruaku</h3>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Logo
