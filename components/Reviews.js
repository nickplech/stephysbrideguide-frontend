import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import 'react-awesome-slider/dist/styles.css'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/captioned.css'

const SectionBlock = styled.div`
width: 100%;
display: flex;
position: relative;
.small-screen {
  display: none;
   @media (min-width: 0px) and (max-width: 768px) {
     display: block;
    font-size: 30px;
    position: absolute;
    font-family: 'Amelaryas';
    margin: 0;
    z-index: 50;
     transform: translateY(-45px) translateX(10px);
   }
}
`
const SliderDiv = styled.div`
  width: 100%;
position: relative;
  display: grid;
  grid-template-columns: 1fr 40%;
  justify-content: center;
  align-items: top;
  @media (min-width: 0px) and (max-width: 768px) {
    display: flex;
    flex-flow: column;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
 }
  .shorten {
    height: 100%;
    @media (min-width: 0px) and (max-width: 768px) {
   grid-row: 1;
   height: 300px;
   }
  }

  .awssld__bullets button {
    transform: translateY(-45px);
    z-index: 300;
    transition: .5s;
width: 12px;
height: 12px;
&:hover {
  transform:translateY(-45px) scale(1.1);
}
      }


  .awssld__controls button {
top: 94%;
@media (min-width: 0px) and (max-width: 768px) {
  top: 90%;

   }
  }


          .large-screen {
                position: absolute;
                font-family: 'Amelaryas';
                font-size:45px;
                margin: 0;
                z-index: 50;
                 transform: translateY(-70px) translateX(20px);
                 @media (min-width: 0px) and (max-width: 768px) {
                display: none;

              }
              }
              .aws-btn {

                --control-button-opacity: 1;
                --organic-arrow-thickness: 2px;
                --organic-arrow-border-radius:0px;
                --organic-arrow-height: 20px;
                --organic-arrow-color: white;
                --control-button-width: 10%;
                --control-button-height: 8%;
                --control-button-background: rgba(0,0,0,.5);
                --control-bullet-color: rgba(245,245,245,.5);
                --control-bullet-active-color:  rgba(245,245,245,1);
                --loader-bar-color: rgba(255,255,255,0);
                --loader-bar-height: 0px;

                }
                .awssld__controls__arrow-left, .awssld__controls__arrow-right {
                  height: 10px;
                }
                .awssld__next,.awssld__prev {
                  height: 25px;
                  width: 80px;
                }
`
const Slide = styled.div`
position: relative;
z-index: 1;

`

const TextSide = styled.div`
display: flex;
flex-flow: column;
grid-column: 2;
padding: 0 30px;

justify-content: center;



@media (min-width: 0px) and (max-width: 768px) {
margin-top: 30px;
padding: 0 60px;

  }
.diane {
  display: block;

  font-size: 1.3rem;
  line-height: 17px;
  width: 100%;
  position: relative;
  text-align: left;
  z-index:50;
  transform: translate3d(0, 0, 0);
  opacity: 1;
  color: ${props => props.theme.third};
  transition: transform 0.45s cubic-bezier(0.15, 0.3, 0.15, 1), opacity 0.35s ease-out;
  @media (min-width: 0px) and (max-width: 768px) {

    text-align: center;
      }
  &:before {
    content: '';
    position: absolute;

    background-image: url("/../static/quotes.svg");
    background-repeat: no-repeat;

    height: 80px;
    width: 100px;
    background-color: transparent;
    transform: translateY(-30px) translateX(-10px);
    opacity: .3;
  }
}
.name {
  display: block;

  position: relative;
  font-size: 2.1rem;
  font-weight: 900;
color: ${props => props.theme.third};
text-align: right;
  font-family: "Tomatoes";
  transform: translateY(-4px) translateX(-10px);
}
img {
  position: absolute;
  height: 80px;

  opacity: .3;
  transform: translateY(-30px) translateX(-10px);
}
`
const data = [
  {
    name: 'Diane Levy',
    text:"Stephy was an absolute dream to work with! She is everything that I wanted in a wedding planner + more. She gave us very helpful and detailed information, was always extremely communicative, helped calm me down when the stressful moments arose, and was there to navigate every aspect of my wedding. Nick, her husband was also amazing, extremely hardworking, and so great to work with. I am sad that my wedding is over and I won’t be working with her anymore!! My special day seriously wouldn’t have been what it was without stephy and I am forever grateful...100/100" },
    {
  name: 'Noel Larson',
  text: "I can't say enough amazing things about sweet, sweet Stephy! The moment I got on an intro call with Stephy, I knew she was the one I wanted by my side through this wedding planning process. Not only is she amazing at what she does, she is truly the most genuine, selfless, kind, communicative, even-keeled and hard working person there is! Our wedding was pushed due to COVID and she always made me feel like I was her top priority, no matter where I was in the process. She was extremely organized and professional throughout the entire process, while also making me feel like I had a built in best friend along the way. Whenever I needed help or was feeling anxious about any planning decisions, she was always available to hop on a call, or chat via text or email. I was pretty much in contact with Stephy every single day for months leading up to the wedding. Towards the final months of the wedding planning process, I was so exhausted with making small decisions around decor items etc. and Stephy stepped in to help make final decisions on linens, chargers, day-of items, repurposing florals etc., I knew I could full trust her. She truly went above and beyond in every way and we're so grateful to her (and to her husband, Nick) for all of their help, support, and guidance over the past couple of years. I could go on and on, but in short, Stephy is the absolute best!"},
{
  name: 'Shannon Jackson',
  text:"I cannot recommend Stephy enough! I had been following Stephy’s Bride Guide on instagram years before getting engaged, & had always dreamed of having a wedding as beautiful as those she had planned! After getting engaged, there was no easier choice than to hire Stephy as our planner. Our planning journey was so easy, enjoyable and stress free! She was available 24/7 for questions, and was so incredibly supportive through our wedding planning and replanning after our postponement (thanks covid!). Stephy has a wealth of knowledge and the best eye for design & went above and beyond with her duties on the day of! Our wedding day was more beautiful than I ever could’ve imagined!! Thank you Stephy for making our wedding day so wonderful!"},

{
  name: 'Kristine Kollenda',
  text:"Stephy was the best wedding coordinator we could've possibly hired!!! We wanted to hire a 'month-of' coordinator to help finalize our plans already set in place and she provided service at least 3 months ahead of our wedding date. She was always available to take our calls, texts, and emails without hesitation or complaint! She helped us come up with ideas for decor and was always so kind and helpful! Literally, she went above and beyond what we hired her for! She is a true professional and our wedding couldn't have gone more perfectly at the Ole Hanson Beach Club! We can't thank her and her husband, Nick, enough for going above and beyond and making our wedding day perfect!" },
{
  name: 'Alexa Jesko',
  text:"I had briefly interviewed a few other planners, but once I talked with Stephy who was so warm and bubbly - I knew she was the one. From the beginning, Stephy was incredibly organized, professional, and communicative. It was clear to me she has great style and completely understood my wedding vision aesthetic, so I felt completely confident trusting her with any design input or ideas. Any time I had questions or wanted to meet with Stephy to talk through some details- she readily made herself available to hop on a call and help sort it out. When my first florist mock-up wasn't quite the look I had envisioned, Stephy graciously took over and communicated with the utmost professionalism to make sure we could get a redo of the mockup that we loved. Even when there was a last-minute hiccup with another vendor the day before the wedding- Stephy stepped in and truly saved the day. She helped our day go as seamlessly and perfectly as we could have imagined and helped bring our vision to life! I can't imagine this planning process without her- I would recommend Stephy without hesitation!" }]

const Reviews  =  React.forwardRef((props, reviewsRef) => {

  const [selectedSlide, setSelectedSlide] = useState(0)



const changeText = (bride) => {

setSelectedSlide(bride.currentMedia?.reviewtext)
}



  return <SectionBlock ref={reviewsRef}>
    <h2 className="small-screen">Client Sentiments</h2>
    <SliderDiv>
    <h2 className="large-screen">Client Sentiments</h2>
    <AwesomeSlider

      className="shorten aws-btn"
      play={false}
      selected
      buttons={true}
      bullets={true}
      mobileTouch={true}
      onTransitionEnd={changeText}

    >
 <Slide    reviewtext={0}   data-src= "/../static/stephysbrideguide-review.jpg">
      </Slide>
      <Slide   reviewtext={2}   data-src= "/../static/stephysbrideguide-shannon-review-resize.jpg">
      </Slide>
       <Slide    reviewtext={1}   data-src= "/../static/stephysbrideguide-noel-review-2.jpg">
      </Slide>
      <Slide    reviewtext={3}  data-src="/../static/stephysbrideguide-olivia-review.jpg">
      </Slide>

      <Slide reviewtext={4}      data-src="/../static/stephysbrideguide-alexa-review.jpg">
      </Slide>
    </AwesomeSlider>

    <TextSide>

    <p className="diane">{data[selectedSlide].text}</p>
    <div className="name">{data[selectedSlide].name}</div>

  </TextSide>
</SliderDiv>
</SectionBlock>

})

export default Reviews
