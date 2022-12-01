import React from 'react'
import styled from 'styled-components'

const SectionBlock = styled.div`
display: flex;

flex-flow: column;
margin: 150px auto 90px;
justify-content: center;
align-items: center;

.top {
min-width: 320px;
width: 60%;
max-width: 900px;
  text-align: center;



  opacity:.6;
  letter-spacing: 3px;
  color: ${props => props.theme.third};

  text-transform: uppercase;

}
.line {
  background: ${props => props.theme.second};
  height: 2px;
  width: 250px;

  opacity:.3;
}
.line2 {
  background: ${props => props.theme.second};
  height: 2px;
  width: 150px;
  margin-bottom:70px;
  opacity:.3;
}

`
const Services = styled.div`
display: grid;
  grid-template-columns: 45% 1fr;
  width: 100%;
  margin-bottom: 160px;
  align-items: center;
  justify-content: center;
  background:  rgba(237, 222, 213, .4);
  position: relative;
  overflow: hidden;
  @media (min-width: 0px) and (max-width: 768px) {
    grid-template-columns: 1fr;

  }
  .col {
    grid-column: 1;
    margin: 0 auto;
    padding: 20px;
    @media (min-width: 0px) and (max-width: 768px) {
      grid-column: 1;
      grid-row: 2;
      margin-bottom: 30px;
    }

  }
  .right-align {
    text-align: right;
    @media (min-width: 0px) and (max-width: 768px) {
     text-align: left;
    }
  }
h2 {
  position: absolute;
  font-family: 'Amelaryas';
  font-size:40px;
  z-index: 50;
justify-self: left;

  line-height: 50px;
  transform: translateY(25px) translateX(10px);
  // color: ${props => props.theme.third};
margin: 0;
@media (min-width: 769px) and (max-width: 962px) {
  font-size: 35px;
  }
@media (min-width: 0px) and (max-width: 768px) {
font-size: 30px;
}
}
  .col2 {
position: relative;
    grid-column: 2;
    display: grid;
    justify-content: right;
    align-items: top                     ;
    margin: 0 auto;

grid-row: 1;
@media (min-width: 0px) and (max-width: 768px) {
  grid-column: 1;
  grid-row: 1;
}
   }
  img {
width: 100%;
min-width: 500px;
    position: relative;

    overflow: hidden;
    margin: 60px auto;
    @media (min-width: 0px) and (max-width: 768px) {
     margin: 60px auto 10px;
     width: 90%;
     min-width: 300px;
    }
  }
  h3 {

    font-size: 12px;
    margin-bottom: 0;
    margin-top: 30px;
    color: #503931;
    font-family: 'Amelaryas';

  }
  p {
    font-size: 13px;
    line-height: 17px;
    color: #503931;
    padding-left: 20px;

  }

`

const GoToMe = styled.div`
position: absolute;

height: 20px;
width: 20px;
`
const Intro = React.forwardRef((props, ref) => {
  return (
    <>
    <GoToMe ref={ref}/>
  <SectionBlock >
  <div className="line"/>
  <div className="top"><p>Helping couples put together an event that revolves around the love they share brings me so much joy. I feel honored to be able to provide my guidance, passion + industry knowledge to the couples I work with. It is always my priority to ensure a beautiful wedding day that will be cherished forever!</p></div>
  <div className="line2" />

  </SectionBlock>
  <Services>
    <div className="col">

    <div className="right-align">
    <h3>Full Service Planning &amp; Design</h3>
  <p>For couples who would like guidance throughout the wedding planning process including securing and managing a dream team of vendors, keeping you on track with budget, monthly to do lists and assistance with every design detail along the way bringing your vision to life.</p>
</div>
<div className="right-align">
<h3>  Partial Planning</h3>
  <p>For the couples who have started planning but need assistance securing the rest of your vendors and pulling together a cohesive vision and help filling in the missing pieces! </p>
</div>
<div className="right-align">

 <h3> Wedding Management &amp; Coordination</h3>
  <p>Enjoy the final months leading up to your wedding and know all the remaining tasks and logistics will be handled by me. All your hard work planning can be confidently handed over to me to be executed and ensure a flawless wedding day.</p></div>
  </div>
  <div className="col2">
  <h2>Planning Services</h2>
  <img src="/../static/stephysbrideguide-terranea.png" alt="invitation suite picture" />
  </div>
  </Services>
  </>
  )
})

export default Intro
