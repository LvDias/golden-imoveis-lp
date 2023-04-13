import Image from 'next/image'

export default function Form(){

  return(

    <form className='
      flex
      flex-col
      gap-5
    ' action=''>

      <h3 className='
        text-[#ECC57A]
      '>Registre-se</h3>

      <p className='
        text-[#ECC57A]
      '>Cadastre-se agora para receber um atendimento personalizado</p>

      <div className='
        flex
        flex-col
        items-center
        bg-[#ECC57A]
        px-5
        py-10
        gap-5
        rounded-bl-[30px]
        rounded-br-[30px]
        rounded-tr-[30px]
        shadow-[inset_-2px_2px_10px_black]
      '>

        <div className='
          flex
          w-full
        '>

          <label className='
            text-sm
            border-b
            border-solid
            border-b-black
          ' htmlFor='name'>Nome:</label>
          <input className='
            border-b
            border-solid
            border-b-black
            outline-none
            bg-transparent
            px-5
            py
            w-full
          ' type='text' name='name' id='name' />

        </div>

        <div className='
          flex
          w-full
        '>

          <label className='
            text-sm
            border-b
            border-solid
            border-b-black
          ' htmlFor='phone'>Telefone:</label>
          <input className='
            border-b
            border-solid
            border-b-black
            outline-none
            bg-transparent
            px-5
            py
            w-full
          ' type='text' name='phone' id='phone' />

        </div>

        <button className='
          flex
          items-center
          px-14
          py-2.5
          rounded-full
          gap-5
          bg-[#2C2C2C]
          text-[#CAA969]
          shadow-[-2px_2px_5px_black]
        ' type='submit'> 
          Cadastrar
          <Image src='https://img.icons8.com/ios-filled/50/CAA969/long-arrow-right.png' width={20} height={20} alt='right arrow' />
        </button>

      </div>

    </form>

  )

}