import { NextSeo } from 'next-seo'
import HomePage from '../components/HomePage'
export default function Home() {
  return (
    <div>
      <NextSeo
        title="Stephys Bride Guide"
        description="Wedding Planning, Styling + Coordination in Southern California."
        canonical="https://www.stephysbrideguide.com/"
        // openGraph={{
        //   url: 'https://www.canonicalurl.ie/',
        //   title: 'Open Graph Title',
        //   description: 'Open Graph Description',
        //   images: [
        //     {
        //       url: 'https://www.example.ie/og-image-01.jpg',
        //       width: 800,
        //       height: 600,
        //       alt: 'Og Image Alt',
        //     },
        //     {
        //       url: 'https://www.example.ie/og-image-02.jpg',
        //       width: 900,
        //       height: 800,
        //       alt: 'Og Image Alt Second',
        //     },
        //     { url: 'https://www.example.ie/og-image-03.jpg' },
        //     { url: 'https://www.example.ie/og-image-04.jpg' },
        //   ],
        // }}
      />
      <HomePage />
    </div>
  )
}
