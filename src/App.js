import './App.css';
import Play from './pages/Play';
import Document from './pages/Document';
import Error404 from './pages/Error';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import Tip from '../src/pages/Document/Components/Docs/pages/Tip'
//import Refence from '../src/pages/Document/Components/Docs/pages/Refence'
//import Gettings from '../src/pages/Document/Components/Docs/pages/Gettings'
//import Basic from '../src/pages/Document/Components/Docs/pages/Basic'
//import Credit from '../src/pages/Document/Components/Docs/pages/Credit'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Play/>} />
            <Route path="Docs" element={<Document />} />
            <Route path="*" element={<Error404 />} />
          </Route>
          {/*
          <Route path='Docs'>
            <Route index element={<Document/>}/>
            <Route path='start' element={<Gettings/>}/>
          </Route>
          */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
