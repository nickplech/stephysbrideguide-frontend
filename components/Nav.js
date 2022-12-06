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
  transform: translateX(20px);
position: absolute;
line-height: 26px;
cursor: pointer;


  a {
    display: flex;
    align-items: center;
    letter-spacing: 4px;
    font-family: 'Comfortaa';
    font-weight: 800;
    background: none;
    border: none; transition: .4s;
    text-transform: uppercase;
    color: #573b2c;
      &:hover {
      outline: none;
      cursor: pointer;

   transform: translateX(3px);
    }
  }
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
