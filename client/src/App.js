// * DEPENDS.
import './CSS/App.css'
import { Route } from 'react-router-dom';

// * COMPONENTS
import Header from './Components/Framework/Header/Header.js'
import Mission from './Components/Mission/Mission.js'
import Footer from './Components/Framework/Footer/Footer'
import ProductList from './Components/Products/ProductList'
import AboutContent from './Components/About/AboutContent';

function App() {
  return (
    <div className="App">
        <Header />
        <Route exact path='/'>
          <Mission />
          <ProductList />
        </Route>

        <Route exact path='/about'>
          <AboutContent />
        </Route>
        
        <Footer />
    </div>
  );
}

export default App;
