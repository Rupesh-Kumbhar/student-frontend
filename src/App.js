//import logo from './logo.svg';
import './App.css';
// import '../src/Home/home';
import Home from '../src/Home/home';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AddStudent from './AddStudent/addStudent';
import ViewAllStudent from './ViewAllStudent/ViewAllStudent';
import DeleteStudent from './DeleteStudent/deleteStudent';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addStudent" element={<AddStudent />} />
        <Route path='/allStudents' element={<ViewAllStudent />} ></Route>
        <Route path='/deleteStudent' element={<DeleteStudent />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
