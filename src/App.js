import logo from './logo.svg';
import './App.css';
import AddHosteller from './components/AddHosteller';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAll from './components/ViewAll';
import SearchHosteller from './components/SearchHosteller';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddHosteller/>}/>
      <Route path='/view' element={<ViewAll/>}/>
      <Route path='/search' element={<SearchHosteller/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
