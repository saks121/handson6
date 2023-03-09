
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import ContactUs from './Components/ContactUs';
import Student from './Components/Student';
import AddNewStudent from './Components/AddNewStudent';
import ContextData from './Components/ContextData';
function App() {
  return (
    <div className="App">

      <ContextData >
       
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contactUs' element={<ContactUs />} />
            <Route path='/student' element={<Student />} />
            <Route path='/addnewstudent' element={<AddNewStudent />} />

        </Routes>
        </BrowserRouter>

      </ContextData>
    </div>
  );
}

export default App;
