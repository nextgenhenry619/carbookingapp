import Link from 'next/link';
import Image from 'next/image'

import CustomButton from './CustomButton'

const NavBar = () => {
  return (
    <header className="w-full absolute z-10 mt-2"> 
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center
    sm:px-16 px-6">
      <Link href="/" className="flex justify-center items-center">
        <Image 
        src="/logo.svg"
        alt="logo"
        width={100}
        height={18}
        className="object-contain"
        />
      </Link>
      <CustomButton
        title="Sign In"
        btnType="button"
        containerStyles='text-black bg-white font-medium rounded-md'
      />
    </nav>
    </header>
  )
}

export default NavBar