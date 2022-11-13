import logo from './logo.svg';
import './App.css';
import ContactComponent from './components/contactComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <ContactComponent name={'Nacho'} lastname= {'Ríos'} mail={'ignaciocruzrios@gmail.com'} />
      </header>
    </div>
  );
}

export default App;
