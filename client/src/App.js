// * DEPENDS.
import './CSS/App.css'

// * COMPONENTS
import Header from './Components/Framework/Header/Header.js'
import Mission from './Components/Mission/Mission.js'
import Footer from './Components/Framework/Footer/Footer'
import ProductList from './Components/Products/ProductList'

function App() {
  return (
    <div className="App">
        <Header />
        <Mission />
        <ProductList />
        <Footer />
    </div>
  );
}

export default App;
