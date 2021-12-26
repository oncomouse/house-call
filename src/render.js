// eslint-disable-next-line import/no-extraneous-dependencies
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { ServerStyleSheet, ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import Document from './Document';
import theme from './theme';

export default function render(Page) {
  const sheet = new ServerStyleSheet();

  const helmetContext = {};

  const content = renderToString(
    <HelmetProvider context={helmetContext}>
      <ThemeProvider theme={theme}>
        {sheet.collectStyles(<Page />)}
      </ThemeProvider>
    </HelmetProvider>,
  );

  const html = renderToStaticMarkup(
    <Document styles={sheet.getStyleElement()} helmet={helmetContext.helmet}>
      {content}
    </Document>,
  );
  sheet.seal();

  return `<!DOCTYPE html>${html}`;
}
