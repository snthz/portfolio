import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import './App.css'
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
 
function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <Home/>
        <About/>
      </main>
    </>
  );
}

export default App;
