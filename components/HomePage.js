import {useRef } from 'react'
 import HeroSlider from './HeroSlider'
import ContactForm from './ContactForm'
import Reviews from './Reviews'
import Intro from './Intro'
import Instagram from './Instagram'

export default function HomePage() {
  // const inquiryRef = useRef(null)
  const ref = useRef(null)
  const arrowClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }


  console.log(arrowClick)
  return (
    <>
      <HeroSlider arrowClick={arrowClick}  />
      <Intro ref={ref}/>
      <Reviews/>
      <ContactForm />
      <Instagram />
    </>
  )
}
