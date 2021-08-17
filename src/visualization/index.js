import './styles/index.sass';
import Router from './router/Router';
import stackHTML from './pages/stack';
import Cover from './components/Cover';

customElements.define('cover-data', Cover);

const routes = {
  '/': ,
  '/stack': stackHTML
};

Router.setRoutes(routes);


