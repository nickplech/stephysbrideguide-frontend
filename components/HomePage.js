import React, {useRef } from 'react'
 import HeroSlider from './HeroSlider'
import ContactForm from './ContactForm'
import Reviews from './Reviews'
import Intro from './Intro'
import Instagram from './Instagram'

const HomePage = React.forwardRef((props, reviewsRef) => {
  const ref = useRef(null)

console.log(ref)
console.log(reviewsRef)
  const arrowClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }


  return (
    <>
      <HeroSlider arrowClick={arrowClick}  />
      <Intro ref={ref}/>

  <Reviews reviewsRef={reviewsRef} id="reviews"/>
      <ContactForm />
    <Instagram />
    </>
  )
})

export default HomePage