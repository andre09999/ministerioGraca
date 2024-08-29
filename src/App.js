import { Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about'
import Give from './pages/give'
import Header from './components/header';
import Headercellphone from './components/headercellphone'
import Footer from './components/footer';
import GracaKids from './pages/GracaKids';
function App() {
  return (
    <div>
      <Header />
      <Headercellphone />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sobre' element={<About />}/>
        <Route path='/servir' element={<Give />} />
        <Route path='/kids' element={<GracaKids />}/>
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
