import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="keywords" content="Charles Duruaku" />
          <meta
            name="description"
            content={`Charles Duruaku is a Software Engineer with ${
              new Date().getFullYear() - 2017
            } years of experience in building software related service like web applications, server-side appplications and mobile applications. He also manages cloud-based infrastructures such as Servers, S3 Buckets, Kubernets, Cloud Storage and lots more`}
          />
          <link rel="icon" href="/images/letter-c.png" />
          <link rel="apple-touch-icon" href="/images/letter-c.png" />
          <link rel="shortcut icon" href="/images/letter-c.png" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
