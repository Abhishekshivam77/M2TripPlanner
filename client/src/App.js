import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import InvalidPage from "./pages/invalidPage";
import Post from './pages/post';
import Retrieve from './pages/retrieve';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/post" element={<Post />} />
                <Route path="/retrieve" element={<Retrieve />} />
                <Route path="*" element={<InvalidPage />}/>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
