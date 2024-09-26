// pages/_document.tsx
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { DM_Sans } from '@next/font/google';

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="font-dm-sans"
            dangerouslySetInnerHTML={{
              __html: `:root { --font-dm-sans: ${dmSans.style.fontFamily}; }`,
            }}
          />
        </Head>
        <body style={{ fontFamily: 'var(--font-dm-sans)' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
