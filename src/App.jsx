import Snow from './components/Snow'
import './App.css'
import WinterBackground from './components/WinterBackground';

function App() {
  let snowflakes = 10;

  return (
    <>
      <Snow freq={snowflakes}/>
      <WinterBackground />
    </>
  );
}

export default App
