import logo from './logo.svg';
import './App.css';
import Header from './common/header/Header'
import Footer from './common/Footer/Footer';
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="App">

      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
