import { Inter } from 'next/font/google'
import Video from './components/video'
import ListSocialMedia from './components/listSocialMedia'
import Form from './components/form'
import Affiliated from './components/affiliated'
import Header from './components/includes/header'
import Footer from './components/includes/footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '400', '700']
})

export default function Home() {
  return (
    
    <main className={`
      ${inter.className}
      min-h-screen
      bg-black
      p-5
      bg-[url(/assets/background.png)]
      bg-no-repeat
      bg-[0rem_6rem]
    `}>

      <section className='
        flex
        flex-col
        items-center
        gap-5
        w-full
        h-full
      '>

        <Header />

        <Video />

        <ListSocialMedia />

        <Form />

        <Affiliated />

        <Footer />
        
      </section>

    </main>

  )
}
