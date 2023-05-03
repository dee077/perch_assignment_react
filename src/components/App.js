import '../css/App.css';
import '../css/mobile.css';
import '../css/tab.css';
import Navbar from './Navbar.js';
import GetStarted from './GetStarted';
import NewRelease from './NewRelease';
import Explore from './Explore';
import FollowUs from './FollowUs';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <GetStarted/>
        <NewRelease/>
        <Explore/>
        <FollowUs/>
    </div>
  );
}

export default App;
