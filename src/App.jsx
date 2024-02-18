
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from './components/Home/Navbar';
import Footer from './components/Home/Footer';
import Courses from './Pages/Academics/Intake/Courses';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admissions" element={<Courses/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
