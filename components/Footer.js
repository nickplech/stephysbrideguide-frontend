import Link from 'next/link'
import styled from 'styled-components'

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 20px;
  justify-content: center;
  width: 100%;
  position: relative;
  height: 200px;
  margin: 0px auto;
  padding: 20px;
  background: rgba(237, 222, 213, 1);
  bottom: 0;
  overflow: hidden;
  color: #503931;
  .copy {
    text-align: center;
    grid-row: 2;
    font-size: 10px;
    font-family: 'Comfortaa';

    position: absolute;
    width: 100%;
color: #503931
    margin: 0 auto;
    padding: 0;
  }
  .logo {
    position: absolute;
    grid-column: 3;
    transform: translateY(-120px);

    right: -150px;
    height: 380px;
    @media (min-width: 0px) and (max-width: 768px) {
      transform: translateY(-70px);

      right: -150px;
    height: 320px;
  }
  }
  .insta {
    height: 25px;
    width: 25px;
    position: absolute;
    transform: translate(-88px, -70px);
    align-self: center;
    grid-column: 1;
    cursor: pointer;
    justify-self: flex-end;
    transition: 0.4s;
    opacity: 0.7;
    @media (min-width: 768px) {
      transform: translate(-128px, -70px);
    }
  }
`

const Wrap = styled.div`
  width: 95%;
  grid-row: 1;
  position: relative;

  color: ${(props) => props.theme.second};
  font-family: 'Comfortaa';

  font-size: 1.1em;

  text-transform: uppercase;
  .mainLink {
    width: 200px;
    position: relative;
    margin: 5px 0px;
    display: flex;
    color: ${(props) => props.theme.second};
    z-index: 100;
    transition: 0.3s;
    &:hover {
      transform: translate(5px, 0);
    }
  }
  a {
    color: ${(props) => props.theme.second};
    font-family: 'Comfortaa';
  }
  .linkage {
    grid-column: 1;
    list-style: none;
  }
`


const Footer = () => (
  <Div>
    {' '}
    <img
      className="logo"
      src="../../static/stephysbrideguidelogobeige.png"
      alt="stephys bride guide logo"
    />
    <Wrap>
      <ul className="linkage">
        {/* <Line /> */}
        <li className="mainLink">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="mainLink">
          <Link href="/">
            <a>Reviews</a>
          </Link>
        </li>
        <li className="mainLink">
          <Link href="/">
            <a>Inquire</a>
          </Link>
        </li>
      </ul>
    </Wrap>{' '}
    {/* <a
      className="insta"
      href="https://www.instagram.com/stephysbrideguide/?hl=en"
    >
      <Instagram src="../../static/instagram.png" />{' '}
    </a> */}
    <div className="copy">
      <p>
        Copyright © Stephy&apos;s Bride Guide 2016-{new Date().getFullYear()}
      </p>
    </div>
  </Div>
)

export default Footer
