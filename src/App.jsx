import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="app">
      
    {/* Header ----------------------------- */}
    <div className='app__header'>
      <img
      className='app__headerImage'
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
        alt="logo" />

    </div>
      <h1>hello world</h1>
 
      {/* Posts ------------------------- */}
      <Post />
      <Post />
      <Post />
      <Post />

    </div>
  );
}

export default App;
