import { useState } from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import MenuToggle from './MenuToggle'
import Router from 'next/router'
import NProgress from 'nprogress'

// import SignInNoDisplay from './SignInNoDisplay'

Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => {
  NProgress.done()
}
Router.onRouteChangeError = () => {
  NProgress.done()
}

const StyledHeader = styled.header`
  display: grid;
  position: fixed;
  justify-content: space-between;
  background: rgba(245, 245, 245, 0.5);
  width: 100%;
  align-items: stretch;
  z-index: 1000;
  height: 40px;
  grid-template-columns: 1fr 1fr  ;
  @media (min-width: 768px) {
    font-size: 1.3rem;

    grid-template-columns: 200px 1fr;

    display: flex;
    align-self: center;
    justify-self: center;

    transition: 0.3s;
    z-index: 100;
  }
`

function Header() {
  const [isOpen, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!isOpen)
  }
  return (
    <StyledHeader>
      <Nav toggle={toggleMenu} isOpen={isOpen} />
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
    </StyledHeader>
  )
}

export default Header
