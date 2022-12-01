import styled from 'styled-components'

const NavStyles = styled.ul`

  margin: 0;
  padding: 0;

grid-column: 2;

  font-size: 1.2rem;
  z-index: 0;
  position: relative;
  align-items: center;

  a {
    padding: 0rem 2rem;
    display: flex;
    align-items: center;
    position: relative;
    letter-spacing: 4px;
    font-family: 'Comfortaa';
    transform: translateY(12px);
    font-size: .9em;
    background: none;
    border: none;
    text-transform: uppercase;
    color: #573b2c;

    z-index: 5;
    cursor: pointer;

    &:after {
      height: 1px;
      background: #573b2c;
      content: '';
      width: 0;
      opacity: 1;
      position: absolute;
      transform: translateX(-55%);
      transition: width 0.7s;
      transition-timing-function: cubic-bezier(0.5, -0.65, 0, 1.31);
      left: 50%;
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
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
  @media (min-width: 768px) {

    grid-column: 2;
    justify-content: flex-end;
    font-size: 1.2rem;
  }

`

export default NavStyles
