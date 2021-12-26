// eslint-disable-next-line import/no-extraneous-dependencies
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Page from './components/Page';
import theme from './theme';

const target = document.getElementById('root');

const App = () => (
  <ThemeProvider theme={theme}>
    <Page />
  </ThemeProvider>
);

ReactDOM.hydrate(<App />, target);
