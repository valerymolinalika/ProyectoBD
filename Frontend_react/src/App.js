import { Routes, Route } from "react-router-dom"; 
import Login from './pages/Login';
import { Users, Subjects, Classrooms, ChooseClass} from './pages/admin/index';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="login" element={<Login/>} />
        <Route path="/admin/users" element={<Users/>} />
        <Route path="/admin/subjects" element={<Subjects/>} />
        <Route path="/admin/classrooms" element={<Classrooms/>} />
        <Route path="/admin/chooseclass" element={<ChooseClass/>} />
      </Routes>
    </div>
  );
}

export default App;
