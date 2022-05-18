import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import Main from './pages/Main';
import NavProvider from './Components/Nav/NavContext';



function App() {
  return (
    <div className="appCont">
      <NavProvider>
        <Nav />
        <Main/>
      </NavProvider>
      
    </div>
  );
}

export default App;
