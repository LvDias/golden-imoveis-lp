import Image from 'next/image'

export default function Header(){

  return(

    <header>

      <Image src='/assets/logo.png' width={180} height={78} alt='logo' loading='lazy' />

    </header>

  )

}