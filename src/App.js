import { createBrowserRouter, createRoutesFromElements, Outlet } from 'react-router-dom';
import './App.css';
import Post from './components/Post';
import Show from './pages/Show';
import Index from './pages/Index';

function App() {
  return (
    <div className="App">
      <Outlet/>
    </div>
  );
}

export default App;
