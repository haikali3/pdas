import logo from './logo.svg';
import './App.css';
import ProfileCard from './ProfileCard';

function App() {
  return (
    // <div className="App">

    <div>
      <div>Personal Digital Assistants</div>

      <ProfileCard title="Alexa" handle="@alexa99" />
      <ProfileCard />
      <ProfileCard />
    </div>
    // </div>
  );
}
export default App;
