import Document, { Html, Head, Main, NextScript, DocumentProps, DocumentContext } from "next/document";
import { config } from "../../next-i18next.config";

interface Props extends DocumentProps {
  locale: string;
}

class NextDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const locale = ctx.locale || config.i18n.defaultLocale;
    
    return { ...initialProps, locale };
  }

  render() {
    return (
      <Html lang={this.props.locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default NextDocument;
