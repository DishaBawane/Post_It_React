import logo from './logo.svg';
import './App.css';
import './Components/Post_It_Style.css';
import Card from './Components/Card';
import PostCard from './Components/PostCard';

function App() {
  return (
    <div className="App">
      <div className="sec1-container">
        <h2>POST IT</h2>
        <Card/>
      </div>
      <div className="sec2-container">
        <PostCard/>
      </div>
   
    </div>
  );
}

export default App;
