import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header'
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Tecnology from './Pages/Tecnology/Tecnology';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Tecnology></Tecnology>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
