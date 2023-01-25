import {useRef} from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import smoothscroll from 'smoothscroll-polyfill';
import { useDidMount } from 'rooks';
import {
  isSafari,
} from 'react-device-detect';

const theme = {
  red: '#FF0000',
  blue: 'rgba(100,100,230,1)',
  green: 'rgba(50,230,150,1)',
  lightblue: 'rgba(100,160,250,1)',
  primary: 'rgba(237, 222, 213, 1)',
  second: '#9F7057',
  third: '#503931',
  fourth: '#6b996b',
  black: 'rgba(0,0,0,1)',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '100vw',
  innerWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0,0,0,0.09)',
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Comfortaa';
    src: url('/static/Comfortaa.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Amelaryas';
    src: url('/static/Amelaryas.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Tomatoes';
    src: url('/static/Tomatoes.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
  }
@font-face {
  font-family: 'Montserrat';
  src: url('/static/Montserrat-VariableFont_wght.ttf');
  font-weight: normal;
  font-style: normal;
}

	html {
		box-sizing: border-box;
		font-size: 10px;
overscroll-behavior: none;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	body {
		padding: 0;
		margin: 0;
		font-size: 1.4rem;
		line-height: 2;
		font-family: 'Montserrat';

	}
a {
text-decoration: none;
color: ${theme.black};
}


`
const StyledPage = styled.div`
  background: white;
  color: ${(props) => props.theme.black};
`

const Inner = styled.div`
  margin: 0 auto;
  padding: 0;
`

export default function Page({ children }) {
  useDidMount(() => {
    const isTargetedBrowser = isSafari
    if(isTargetedBrowser) {
      smoothscroll.polyfill()
    }
  })
  const reviewsRef = useRef(null)

  const reviewClick = () => {
    reviewsRef.current?.scrollIntoView({behavior: 'smooth'})
    console.log("review slide up")
  }
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledPage ref={reviewsRef}>
          <Header reviewClick={reviewClick} />
          <Inner>{children}</Inner>
          <Footer />
        </StyledPage>
      </ThemeProvider>
    </>
  )
}
