import Link from 'next/link'
import Image from 'next/image'

export default function Footer(){

  return(

    <footer className='
      flex
      justify-between
      fixed
      bottom-0
      p-5
      bg-black
      w-screen
    '>

      <div className='
        absolute
        top-0
        w-[calc(100%-40px)]
        h-px
        bg-[#CEAB6B]
      ' />

      <Link className='
        flex
        flex-col
        gap-1
        items-center
      ' href='/'>

        <Image src='/assets/footer/buyer.png' width={33} height={33} alt='Comprador' />

        <p className='
          text-[#B38A21]
        '>Comprador</p>

      </Link>

      <Link className='
        flex
        flex-col
        gap-1
        items-center
      ' href='/'>

        <Image src='/assets/footer/seller.png' width={33} height={33} alt='Vendedor' />

        <p className='
          text-[#B38A21]
        '>Vendedor</p>

      </Link>

      <Link className='
        flex
        flex-col
        gap-1
        items-center
      ' href='/'>

        <Image src='/assets/footer/locator.png' width={33} height={33} alt='Locador' />

        <p className='
          text-[#B38A21]
        '>Locador</p>

      </Link>

      <Link className='
        flex
        flex-col
        gap-1
        items-center
      ' href='/'>

        <Image src='/assets/footer/renter.png' width={33} height={33} alt='Locatário' />

        <p className='
          text-[#B38A21]
        '>Locatário</p>

      </Link>

      <Link className='
        flex
        flex-col
        gap-1
        items-center
      ' href='/'>

        <Image src='/assets/footer/profile.png' width={33} height={33} alt='Perfil' />

        <p className='
          text-[#B38A21]
        '>Perfil</p>

      </Link>

    </footer>

  )

}