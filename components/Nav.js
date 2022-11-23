import Link from 'next/link'
import NavStyles from './styles/NavStyles'

import Menu from './Menu'
import styled from 'styled-components'
const Desktop = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`

const Logo = styled.h1`
  font-size: 1.1rem;
  margin-left: 1.7rem;
position: fixed;
  display: flex;
  align-self: center;
  justify-self: flex-start;
font-weight: 900;
  transition: 0.3s;
  z-index: 400;


  a {

    display: flex;
    align-items: center;

    letter-spacing: 4px;
    font-family: 'lemon milk';
    transform: translateY(1px);

    background: none;
    border: none;
    text-transform: uppercase;
    color: #573b2c;

    cursor: pointer;
transition: .3s;
    &:after {
      height: 1px;
      background: #573b2c;
      content: '';
      width: 0;
      opacity: .6;
      position: absolute;
      transform: translateX(-55%);
      transition: width 0.7s;
      transition-timing-function: cubic-bezier(0.5, -0.65, 0, 1.31);
      left: 53%;
      margin-top: 1.8rem;
    }
    @media (max-width: 699px) {
      &:after {
        height: 0;
        background: none;
        content: '';
        width: 0;
        position: absolute;
        transform: none;
        transition: none;
        left: 50%;
        margin-top: 1.3rem;
      }
    }
    &:hover {
      outline: none;
   transform: translateY(1px) translateX(3px);
    }
  }
  // h1 {
  //   padding: 0;
  //   background: transparent;
  //   margin: 0px auto;
  //   text-transform: uppercase;
  //   text-decoration: none;
  // }

`
const Mobile = styled.div`
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`
function Nav({ isOpen, toggle }) {
  return (
<>
<Logo>
        <Link href="/">
          <a>
            Stephys Bride Guide
          </a>
        </Link>
</Logo>
    <NavStyles>

      <Desktop>


          <Link href="/ondemand">
            <a>Reviews</a>
          </Link>
          <Link href="/contact">
            <a>Inquire</a>
          </Link>

      </Desktop>
      <Mobile>
        <Menu toggle={toggle} isOpen={isOpen} />
      </Mobile> </NavStyles>
</>
  )
}

export default Nav
