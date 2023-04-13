import Image from "next/image"

interface IProps {
  href: string
  image: string
  alt: string
  text: string
}

export default function SocialMedia(props : IProps){

  return(

    <a className='
      flex
      items-center
      bg-[#2E2D2B]
      px-5
      py-3
      gap-3
      rounded-bl-[30px]
      rounded-br-[30px]
      rounded-tr-[30px]
    ' href={props.href}>

      <div className='
        p-1.5
        rounded-lg
        border
        border-solid
        border-[#CEAB6B]
      '>

        <div className='
          relative
          w-[18px]
          h-[18px]
        '>

          <Image className='
            object-contain
          ' src={props.image} fill alt={props.alt} loading='lazy' />

        </div>

      </div>

      <p className='
        text-[#CEAB6B]
      '>{props.text}</p>

    </a>

  )

}