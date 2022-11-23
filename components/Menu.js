import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

import { NavMenu } from './MenuNavigation'

const HamburgerMenuContainer = styled.div`
  display: flex;
  .signout {
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1em;
    background: none;
    border: 0;
    color: ${(props) => props.theme.second};

    cursor: pointer;
    padding: 7px 10px 7px 10px;
    margin: 0 20px;
    border: 2px solid ${(props) => props.theme.second};
    border-radius: 5px;
    transition: 0.3s;
    &:hover,
    &:focus {
      outline: none;
      background: ${(props) => props.theme.second};
      color: white;
    }
  }
`

const MenuContainer = styled(motion.div)`
  min-width: 300px;
  width: 100%;
  max-width: 44%;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
  z-index: 900;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(4em);
  user-select: none;
  padding: 1em 2.5em;
`

const TopContainer = styled.div`
  display: flex;
  width: 100%;
`



const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`

const menuVariants = {
  open: {
    transform: 'translateX(3%)',
  },
  closed: {
    transform: 'translateX(103%)',
  },
}

const menuTransition = {
  type: 'spring',
  duration: 1,
  stiffness: 33,
  delay: 0.1,
}


export default function Menu({ isOpen, toggle, me, addy }) {

  return (
    <HamburgerMenuContainer>
      <MenuContainer
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        transition={menuTransition}
      >
        <TopContainer>

        </TopContainer>
        <ContentContainer>
          <NavMenu me={me} addy={addy} isOpen={isOpen} toggle={toggle} />
        </ContentContainer>
      </MenuContainer>
    </HamburgerMenuContainer>
  )
}
