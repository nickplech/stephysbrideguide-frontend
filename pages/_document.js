import Document, { Html, Head, NextScript, Main } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {

    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
          originalRenderPage({
              enhanceApp: (App) => (props) =>
                  sheet.collectStyles(<App {...props} />),
          })

    // const page = renderPage(
    //   (App) => (props) => sheet.collectStyles(<App {...props} />)
   //)
   const initialProps = await Document.getInitialProps(ctx)
   return {
       ...initialProps,
       styles: [initialProps.styles, sheet.getStyleElement()],
   }
} finally {
   sheet.seal()
}
  //   const styleTags = sheet.getStyleElement()
  //   return { ...page, styleTags }
  }

  render() {
    return (
      <Html lang="en">
        <Head>

	<link rel="apple-touch-icon" sizes="180x180" href="/../static/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/../static/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/../static/favicon-16x16.png" />
	<link rel="manifest" href="/../static/site.webmanifest" />
	<link rel="mask-icon" href="/../static/safari-pinned-tab.svg" color="#5bbad5" />
	<meta name="msapplication-TileColor" content="#da532c" />
	<meta name="theme-color" content="#ffffff" />
  <link
            rel="stylesheet"
            href="/static/fontstyle.css"
          />
          <link rel="shortcut icon" href="/../static/favicon-32x32.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
