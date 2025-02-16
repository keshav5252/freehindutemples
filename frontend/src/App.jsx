import Header from './Sections/Header';
import Aboutus from './Sections/Aboutus';
import Signup from './Sections/Signup';
import TemplesDirectory from './Sections/TemplesDirectory';
import Footer from './Sections/Footer';
import Login from './Sections/Login';
import Home from './Sections/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <main>

        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/templesDirectory" element={<TemplesDirectory />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>

         <Footer />

      </main>
    </Router>
  )
}

export default App
