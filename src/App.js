import logo from './logo.svg';
import './App.css';
import './Post_It_Style.css';
import Card from './Card';
import Card_Post from './Card_Post';

function App() {
  return (
    <div className="App">
      <div className="sec1-container">
        <h2>POST IT</h2>
        <Card/>
      </div>
      <div className="sec2-container">
        <Card_Post/>
      </div>
   
    </div>
  );
}

export default App;
