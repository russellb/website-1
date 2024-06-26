import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" property="og:title" content="InstructLab" />
        <meta property="og:type" content="website" />
        {/* <meta
          name="image"
          property="og:image"
          content="https://thealliance.ai/banner.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" /> */}
        <meta
          name="description"
          property="og:description"
          content="InstructLab is an open source project designed to change how LLMs are developed"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
