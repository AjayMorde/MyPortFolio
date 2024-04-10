import { BrowserRouter , Routes, Route } from 'react-router-dom';
// import { useState} from "react";
import Navbar from './components/Navbars/Navarbar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import SkillPage from './pages/SkillsPage';
import ProjectPage from './pages/ProjectPage';
import MyExperience from './pages/MyExperience';
import ContactPage from './pages/ContactPage';


// import Error from './pages/Error';


const App = () => {
  // const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/skills" element={<SkillPage/>} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/experience" element={<MyExperience/>} />
      <Route path="/contact" element={<ContactPage/>} />
      
  
      
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;