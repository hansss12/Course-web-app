import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Secular+One&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="K5f6uNahkVFJ_uojt9wTyfpwCG00fXK1nVCEs1movuc"
        />
        <title>Course</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
