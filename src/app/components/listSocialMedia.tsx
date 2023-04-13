import SocialMedia from "./socialMedia"

export default function ListSocialMedia(){

  return(

    <div className='
      flex flex-col gap-5
    '>

      <SocialMedia 
        href='https://google.com'
        image='/assets/social/whatsapp.png'
        alt='Whatsapp'
        text='Fale comigo no WhatsApp'
      />

      <SocialMedia 
        href='https://google.com'
        image='/assets/social/facebook.png'
        alt='Facebook'
        text='Me siga no Facebook'
      />

      <SocialMedia 
        href='https://google.com'
        image='/assets/social/instagram.png'
        alt='Instagram'
        text='Me siga no Instagram'
      />

      <SocialMedia 
        href='https://google.com'
        image='/assets/social/tiktok.png'
        alt='Tiktok'
        text='Me Siga no Tiktok'
      />
      
      <SocialMedia 
        href='https://google.com'
        image='/assets/social/youtube.png'
        alt='Youtube'
        text='Me siga no Youtube'
      />

    </div>

  )

}