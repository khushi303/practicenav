import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import About from './components/About';
// import Contact from './components/Contact';
// import Faq from './components/Faq';
// import Help from './components/Help';

import Forpractice from './components/Forpractice';


function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/' element={<Header />}></Route>
        <Route path='/About' exact element={<About />}></Route>
        <Route path='/Contact' exact element={<Contact />}></Route>
        <Route path='/Faq' exact element={<Faq />}></Route>
        <Route path='/Help' exact element={<Help />}></Route>
      </Routes>
      <About /> */}
      <Forpractice />
    </div>
  );
}

export default App;
