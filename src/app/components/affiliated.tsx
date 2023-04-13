import Link from 'next/link'

export default function Affiliated(){

  return(

    <div className='
      flex
      items-center
      gap-5
      p-5
      mb-[96px]
      border
      border-solid
      border-[#ECC57A]
      rounded-full
    '>

      <p className='
        text-white
        font-bold
      '>Indique e Ganhe:</p>

      <Link className='
        rounded-full
        bg-[#ECC57A]
        shadow-[inset_-2px_2px_2.5px_black]
        p-2.5
        font-bold
      ' href='/'>Cadastre-se Agora</Link>

    </div>

  )

}