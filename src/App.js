import './App.css';
import Home from './components/home';
import Profile from './components/profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const testUser = {
    username: 'nrincon_2302',
    fullname: 'Nicolás',
    description: 'Lorem ipsum description',
    url: 'web.labredesxy.com',
    posts: 35,
    followers: 325,
    following: 521
  };

  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home usuario={testUser} />} />
         <Route path="/profile" element={<Profile usuario={testUser}/>} />
       </Routes>
     </BrowserRouter>
  );
}

export default App;
