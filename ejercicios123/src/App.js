import logo from './logo.svg';
import './App.css';
import Contact from './components/contact';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Contact name={'Nacho'} lastname={'rios'} mail={'ignaciocruzrios@gmail.com'} />
      </header>
    </div>
  );
}

export default App;
