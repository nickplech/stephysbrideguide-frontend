import 'regenerator-runtime/runtime'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import { ApolloProvider } from '@apollo/client'
import Page from '../components/Page'
import withData from '../lib/withData'
import '../public/static/scaleOut.css'

function MyApp({ Component, apollo, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ApolloProvider client={apollo}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
    </>
  )
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  pageProps.query = ctx.query
  return { pageProps }
}

export default withData(MyApp)
