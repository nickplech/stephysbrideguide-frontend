import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import Header from './Header'
import Footer from './Footer'

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
    font-family: 'Sydney';
    src: url('/static/Sydney.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'LemonMilk';
    src: url('/static/LemonMilk.otf') format('otf');
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
		font-family: 'Comfortaa';

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
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Header />
          <Inner>{children}</Inner>
          <Footer />
        </StyledPage>
      </ThemeProvider>
    </>
  )
}
