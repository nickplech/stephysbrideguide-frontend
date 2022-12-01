
import styled, {keyframes} from 'styled-components'
import AwesomeSlider  from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'



const fadeOut =
 keyframes` {
  from { opacity: 1.0; }
  to   { opacity: 0.0; }
}`
const fadeIn =
 keyframes` {
  from { opacity: 0.0; }
  to   { opacity: 1.0; }
}`

const scroller =
 keyframes` {
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}`




const SliderDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;

  .shorten {
    height: 100vh;
  }
  .arrow {
    height: 50%;
  }
  .awssld__bullets {
    transform: translateY(-50px) scale(0.6);
    z-index: 100;
    color: rgba(222, 222, 222, 0.7);
  }
  .awssld__bullets button {
    background: rgba(222, 222, 222, 0.8);
  }
  .awssld__bullets--active {
    transform: scale(1.2);
  }

  a {
  padding-top: 0px;
  position: absolute;
  bottom:  0px;

  z-index: 100;
  display: flex;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: #503931;
  font : normal 400 20px/1 'Josefin Sans', sans-serif;
  letter-spacing: .1em;
  text-decoration: none;
  transition: opacity .3s;
width: 100px;
height: 100px;
&:hover {
  cursor: pointer;
}
  }
   span {
    position: absolute;
    top: 0;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 2px solid #503931;
    border-bottom: 2px solid #503931;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: ${scroller} 3s infinite;
    animation: ${scroller} 3s infinite;
    box-sizing: border-box;
z-index: 100;
  }
  .aws-btn {


    --loader-bar-color: rgba(255,255,255,0);
    --loader-bar-height: 0px;
    }
  .awssld--animated {
    will-change: opacity;
    visibility: visible; }
  .awssld--moveRight {
    animation: ${fadeIn} 3s cubic-bezier(0.5, 0.075, 0.25, 0.95) ;
  }
  .awssld--moveLeft {
    -webkit-animation:  ${fadeIn} 3s cubic-bezier(0.5, 0.075, 0.25, 0.95);
            animation:  ${fadeIn} 3s cubic-bezier(0.5, 0.075, 0.25, 0.95); }
  .awssld--exit {
    z-index: 0; }
    .awssld--exit.awssld--moveLeft {
      -webkit-animation:  ${fadeOut} 3s cubic-bezier(0.5, 0.075, 0.25, 0.95);
              animation:  ${fadeOut} 3s cubic-bezier(0.5, 0.075, 0.25, 0.95); }
    .awssld--exit.awssld--moveRight {
      -webkit-animation:  ${fadeOut} 3s cubic-bezier(0.5, 0.075, 0.25, 0.95);
              animation:  ${fadeOut} 3s cubic-bezier(0.5, 0.075, 0.25, 0.95); }
   .awssld__timer {
               opacity: 0;
              }
`
const Opaque = styled.div`

position: absolute;
width: 100%;
height: 100vh;
background: rgba(245,245,245,.5);
z-index: 50;
`
const Title = styled.div`
  display: flex;
  // width: 100%;

  position: absolute;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 60;
  letter-spacing: 4px;

 color: ${props => props.theme.black};


  .box {



    display: flex;
    flex-flow: column;
    justify-contents: center;
    align-items: center;
    text-align: center;
margin: 0 auto;

  }
  img {
    width: 400px;
    display: flex;
    margin: 0 auto;
    transform: translateX(-2px)  ;
    @media (min-width: 0px) and (max-width: 768px) {
      width: 90%;
      max-width: 400px;
    }
  }


  h2 {
    font-size: 1em;
color: #000000;
    font-family: 'Comfortaa';
    width: 100%;
    text-align: center;
text-transform: uppercase;
// font-weight: 900;
@media (min-width: 0px) and (max-width: 768px) {
font-size: .7em;
margin-top: 20px;
}
  }

  .arrow-down {
    width: 33px;
    height: 33px;
    border: 3px solid #333;
    border-left: 0;
    border-top: 0;
    z-index: 100;
bottom: 0;
     transform: rotate(45deg);
     &:hover {
       cursor: pointer;
     }
  }
`

const AutoplaySlider = withAutoplay(AwesomeSlider)



const HeroSlider = function(props) {

  return (
    <SliderDiv>
      <Title>

      <div className="box">
      <img src="/../static/stephysbrideguidelogodarkbrown.png" alt="stephys bride guide" />
        <h2>wedding planning | styling | coordination</h2>

        </div>

      </Title>

      <Opaque/>
        <AutoplaySlider
          className="shorten aws-btn"
          play={true}
          cancelOnInteraction={false}
          buttons={false}
          bullets={false}
          interval={10000}
        >
          <div data-src="/../static/stephysbrideguide-olivia.jpeg" />
          <div data-src="/../static/stephysbrideguide-alexa.jpg" />
          <div data-src="/../static/stephysbrideguide-tristan-olivia.jpg" />
          <div data-src="/../static/stephysbrideguide-julya-jack.JPG" />
          <div data-src="/../static/stephysbrideguide-noel-david.jpg" />
          <div data-src="/../static/stephysbrideguide-heather-tablescape.jpg" />
          <div data-src="/../static/stephysbrideguide-bouqet.jpg" />
          <div data-src="/../static/stephysbrideguide-heather-drew.jpg" />
        </AutoplaySlider>
        <a  className="scroll-down-button" onClick={props.arrowClick}><span></span></a>
    </SliderDiv>
  )
}

export default HeroSlider