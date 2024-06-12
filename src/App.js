import logo from './logo.svg';
import './App.css';
import AddHosteller from './components/AddHosteller';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddHosteller/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
