/**
 *
 * App
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import GlobalStyles from '../../components/GlobalStyles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
//import Menu from '../../components/Menu';

import About from '../About';
import Blog from '../Blog';
import RestaurantsPage from '../RestaurantsPage';
import RestaurantPage from '../RestaurantPage';
import NotFound from '../NotFound';

const headerUrls = [
  { name: 'Modelos', to: '/' },
  { name: 'Ficha de modelo', to: '/5/informations' },
  { name: 'Servicios y accesorios', to: '/' },
  { name: 'Financiación', to: '/' },
  { name: 'Reviews y Comunidad', to: '/', clase: 'borbot' },

  { name: 'Toyota Mobility Service', to: '/' },
  { name: 'Toyota Gazoo Racing', to: '/' },
  { name: 'Toyota Híbridos', to: '/', clase: 'borbot' },

  { name: 'Concesionarios', to: '/' },
  { name: 'Test Drive', to: '/' },
  { name: 'Contacto', to: '/', clase: 'borbot' },

  { name: 'Actividades', to: '/' },
  { name: 'Servicios al Cliente', to: '/' },
  { name: 'Ventas Especiales', to: '/' },
  { name: 'Innovación', to: '/' },
  { name: 'Prensa', to: '/' },
  { name: 'Acerca de...', to: '/' }

  // Uncomment when available
  // { name: 'Blog', to: '/blog' }
];


function App() {
  return (
    <div>
      <GlobalStyles />

      <Header links={headerUrls} />
      <Switch>
        <Route path="/" component={RestaurantsPage} exact />
        <Route path="/about" component={About} exact />
        <Route path="/blog" component={Blog} exact />
        <Route path="/:id/:content" component={RestaurantPage} exact />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

App.defaultProps = {};
App.propTypes = {};

export default App;
